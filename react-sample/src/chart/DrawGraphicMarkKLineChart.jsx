import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

const drawLines = [
  { key: 'priceLine', text: '价格线' },
  { key: 'priceChannelLine', text: '价格通道线' },
  { key: 'parallelStraightLine', text: '平行直线' },
  { key: 'fibonacciLine', text: '斐波那契回调' }
]

export default function DrawGraphMarkKLineChart () {
  let kLineChart
  useEffect(() => {
    kLineChart = init('draw-graph-mark-k-line')
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('draw-graph-mark-k-line')
    }
  }, [])

  return (
    <Layout
      title="画线">
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
                  kLineChart.addGraphicMark(key)
                }}>
                {text}
              </button>
            )
          })
        }
        <button
          onClick={() => {
            kLineChart.removeAllGraphicMark()
          }}>
          清除
        </button>
      </div>
    </Layout>
  )
}
