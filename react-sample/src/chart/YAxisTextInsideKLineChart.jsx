import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function YAxisTextInsideKLineChart () {
  useEffect(() => {
    const kLineChart = init('y-axis-text-inside-k-line')
    kLineChart.setStyleOptions({
      yAxis: {
        tickText: {
          position: 'inside'
        }
      }
    })
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('y-axis-text-inside-k-line')
    }
  }, [])
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">Y轴文字显示在图表内</p>
      <div id="y-axis-text-inside-k-line" className="k-line-chart"/>
    </div>
  )
}
