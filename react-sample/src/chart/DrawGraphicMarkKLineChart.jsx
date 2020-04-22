import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function DrawGraphMarkKLineChart () {
  let kLineChart
  useEffect(() => {
    kLineChart = init('draw-graph-mark-k-line')
  })

  useEffect(() => {
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('draw-graph-mark-k-line')
    }
  }, [])

  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">绘制标记</p>
      <div id="draw-graph-mark-k-line" className="k-line-chart"/>
      <div className="k-line-chart-setting-container">
        <button
          className="k-line-chart-setting-button"
          onClick={() => {
            kLineChart.addGraphicMark('priceLine')
          }}>
          价格线
        </button>
        <button
          className="k-line-chart-setting-button"
          onClick={() => {
            kLineChart.addGraphicMark('priceChannelLine')
          }}>
          价格通道线
        </button>
        <button
          className="k-line-chart-setting-button"
          onClick={() => {
            kLineChart.addGraphicMark('parallelStraightLine')
          }}>
          平行直线
        </button>
        <button
          className="k-line-chart-setting-button"
          onClick={() => {
            kLineChart.addGraphicMark('fibonacciLine')
          }}>
          斐波那契回调
        </button>
        <button
          className="k-line-chart-setting-button"
          onClick={() => {
            kLineChart.removeAllGraphicMark()
          }}>
          清除
        </button>
      </div>
    </div>
  )
}
