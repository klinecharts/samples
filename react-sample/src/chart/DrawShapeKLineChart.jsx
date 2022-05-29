import React, { useEffect, useRef } from 'react'
import { init, dispose } from 'klinecharts'
import { checkCoordinateOnSegment } from 'klinecharts/lib/shape/shapeHelper'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

const rect = {
  name: 'rect',
  totalStep: 3,
  checkEventCoordinateOnShape: ({ dataSource, eventCoordinate }) => {
    return checkCoordinateOnSegment(dataSource[0], dataSource[1], eventCoordinate)
  },
  createShapeDataSource: ({ coordinates }) => {
    if (coordinates.length === 2) {
      return [
        {
          type: 'line',
          isDraw: false,
          isCheck: true,
          dataSource: [
            [{ ...coordinates[0] }, { x: coordinates[1].x, y: coordinates[0].y }],
            [{ x: coordinates[1].x, y: coordinates[0].y }, { ...coordinates[1] }],
            [{ ...coordinates[1] }, { x: coordinates[0].x, y: coordinates[1].y }],
            [{ x: coordinates[0].x, y: coordinates[1].y }, { ...coordinates[0] }]
          ]
        },
        {
          type: 'polygon',
          isDraw: true,
          isCheck: false,
          styles: { style: 'fill' },
          dataSource: [[
            { ...coordinates[0] },
            { x: coordinates[1].x, y: coordinates[0].y },
            { ...coordinates[1] },
            { x: coordinates[0].x, y: coordinates[1].y }
          ]]
        },
        {
          type: 'polygon',
          isDraw: true,
          isCheck: false,
          dataSource: [[
            { ...coordinates[0] },
            { x: coordinates[1].x, y: coordinates[0].y },
            { ...coordinates[1] },
            { x: coordinates[0].x, y: coordinates[1].y }
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
  checkEventCoordinateOnShape: ({ dataSource, eventCoordinate }) => {
    const xDis = Math.abs(dataSource.x - eventCoordinate.x)
    const yDis = Math.abs(dataSource.y - eventCoordinate.y)
    const r = Math.sqrt(xDis * xDis + yDis * yDis)
    return Math.abs(r - dataSource.radius) < 3
  },
  createShapeDataSource: ({ coordinates }) => {
    if (coordinates.length === 2) {
      const xDis = Math.abs(coordinates[0].x - coordinates[1].x)
      const yDis = Math.abs(coordinates[0].y - coordinates[1].y)
      const radius = Math.sqrt(xDis * xDis + yDis * yDis)
      return [
        {
          type: 'arc',
          isDraw: true,
          isCheck: false,
          styles: { style: 'fill' },
          dataSource: [
            { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 }
          ]
        },
        {
          type: 'arc',
          isDraw: true,
          isCheck: true,
          dataSource: [
            { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 }
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
  const chart = useRef()
  useEffect(() => {
    chart.current = init('draw-shape-k-line')
    chart.current.addShapeTemplate([rect, circle])
    chart.current.applyNewData(generatedKLineDataList())
    return () => {
      dispose('draw-shape-k-line')
    }
  }, [])

  return (
    <Layout
      title="绘图">
      <div
        id="draw-shape-k-line" className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        {
          drawLines.map(({ key, text }) => {
            return (
              <button
                key={key}
                onClick={_ => {
                  chart.current && chart.current.createShape(key)
                }}>
                {text}
              </button>
            )
          })
        }
        <button
          onClick={() => {
            chart.current && chart.current.removeShape()
          }}>
          清除
        </button>
      </div>
    </Layout>
  )
}
