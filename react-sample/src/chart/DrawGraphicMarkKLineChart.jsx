import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import { checkPointOnSegment } from 'klinecharts/lib/mark/graphicHelper'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

const rect = {
  name: 'rect',
  totalStep: 3,
  checkMousePointOn: (key, type, points, mousePoint) => {
    return checkPointOnSegment(points[0], points[1], mousePoint)
  },
  createGraphicDataSource: (step, tpPoint, xyPoints) => {
    if (xyPoints.length === 2) {
      return [
        {
          type: 'line',
          isDraw: false,
          isCheck: true,
          dataSource: [
            [{ ...xyPoints[0] }, { x: xyPoints[1].x, y: xyPoints[0].y }],
            [{ x: xyPoints[1].x, y: xyPoints[0].y }, { ...xyPoints[1] }],
            [{ ...xyPoints[1] }, { x: xyPoints[0].x, y: xyPoints[1].y }],
            [{ x: xyPoints[0].x, y: xyPoints[1].y }, { ...xyPoints[0] }]
          ]
        },
        {
          type: 'polygon',
          isDraw: true,
          isCheck: false,
          style: 'fill',
          dataSource: [[
            { ...xyPoints[0] },
            { x: xyPoints[1].x, y: xyPoints[0].y },
            { ...xyPoints[1] },
            { x: xyPoints[0].x, y: xyPoints[1].y }
          ]]
        },
        {
          type: 'polygon',
          isDraw: true,
          isCheck: false,
          dataSource: [[
            { ...xyPoints[0] },
            { x: xyPoints[1].x, y: xyPoints[0].y },
            { ...xyPoints[1] },
            { x: xyPoints[0].x, y: xyPoints[1].y }
          ]]
        }
      ]
    }
    return []
  }
}

const circle = {
  name: 'circle',
  totalStep: 3,
  checkMousePointOn: (key, type, points, mousePoint) => {
    const xDis = Math.abs(points.x - mousePoint.x)
    const yDis = Math.abs(points.y - mousePoint.y)
    const r = Math.sqrt(xDis * xDis + yDis * yDis)
    return Math.abs(r - points.radius) < 3
  },
  createGraphicDataSource: (step, tpPoint, xyPoints) => {
    if (xyPoints.length === 2) {
      const xDis = Math.abs(xyPoints[0].x - xyPoints[1].x)
      const yDis = Math.abs(xyPoints[0].y - xyPoints[1].y)
      const radius = Math.sqrt(xDis * xDis + yDis * yDis)
      return [
        {
          type: 'arc',
          isDraw: true,
          isCheck: false,
          style: 'fill',
          dataSource: [
            { ...xyPoints[0], radius, startAngle: 0, endAngle: Math.PI * 2 }
          ]
        },
        {
          type: 'arc',
          isDraw: true,
          isCheck: true,
          dataSource: [
            { ...xyPoints[0], radius, startAngle: 0, endAngle: Math.PI * 2 }
          ]
        }
      ]
    }
    return []
  }
}

const drawLines = [
  { key: 'priceLine', text: '价格线' },
  { key: 'priceChannelLine', text: '价格通道线' },
  { key: 'parallelStraightLine', text: '平行直线' },
  { key: 'fibonacciLine', text: '斐波那契回调' },
  { key: 'rect', text: '自定义矩形' },
  { key: 'circle', text: '自定义圆' }
]

export default function DrawGraphMarkKLineChart () {
  let kLineChart
  useEffect(() => {
    kLineChart = init('draw-graph-mark-k-line')
    kLineChart.addCustomGraphicMark(rect)
    kLineChart.addCustomGraphicMark(circle)
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('draw-graph-mark-k-line')
    }
  }, [])

  return (
    <Layout
      title="绘图">
      <div
        id="draw-graph-mark-k-line" className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        {
          drawLines.map(({ key, text }) => {
            return (
              <button
                key={key}
                onClick={_ => {
                  kLineChart.createGraphicMark(key)
                }}>
                {text}
              </button>
            )
          })
        }
        <button
          onClick={() => {
            kLineChart.removeGraphicMark()
          }}>
          清除
        </button>
      </div>
    </Layout>
  )
}
