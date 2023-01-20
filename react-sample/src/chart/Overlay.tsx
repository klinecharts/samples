import React, { useEffect, useRef } from 'react'
import { init, dispose, registerOverlay, Chart, KLineData } from 'klinecharts'
import generatedDataList from '../generatedDataList'
import Layout from '../Layout'

registerOverlay({
  name: 'circle',
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  totalStep: 3,
  createPointFigures: function ({ overlay, coordinates }) {
    if (coordinates.length === 2) {
      const xDis = Math.abs(coordinates[0].x - coordinates[1].x)
      const yDis = Math.abs(coordinates[0].y - coordinates[1].y)
      const radius = Math.sqrt(xDis * xDis + yDis * yDis)
      return {
        key: 'circle',
        type: 'circle',
        attrs: {
          ...coordinates[0],
          r: radius
        },
        styles: {
          style: 'stroke_fill'
        }
      }
    }
    return []
  }
})

const overlays = [
  { key: 'priceLine', text: '内置价格线' },
  { key: 'circle', text: '自定义圆' }
]

export default function DrawGraphMarkKLineChart () {
  const chart = useRef<Chart | null>()
  useEffect(() => {
    chart.current = init('overlay-k-line')
    chart.current?.applyNewData(generatedDataList())
    return () => {
      dispose('overlay-k-line')
    }
  }, [])

  return (
    <Layout
      title="覆盖物">
      <div
        id="overlay-k-line" className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        <button
          onClick={() => {
            const dataList = chart.current?.getDataList() ?? []
            const data = dataList[dataList.length - 20] as KLineData
            chart.current?.createOverlay({
              name: 'simpleAnnotation',
              extendData: '注解注解注解',
              points: [{ timestamp: data.timestamp, value: data.high }]
            })
          }}>
          内置注解
        </button>
        <button
          onClick={() => {
            const dataList = chart.current?.getDataList() ?? []
            const data = dataList[dataList.length - 10] as KLineData
            chart.current?.createOverlay({
              name: 'simpleTag',
              extendData: '标签标签',
              points: [{ value: data.high }]
            })
          }}>
          内置标签
        </button> 
        {
          overlays.map(({ key, text }) => {
            return (
              <button
                key={key}
                onClick={_ => {
                  chart.current?.createOverlay(key)
                }}>
                {text}
              </button>
            )
          })
        }
        <button
          onClick={() => {
            chart.current?.removeOverlay()
          }}>
          清除
        </button>
      </div>
    </Layout>
  )
}
