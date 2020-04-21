import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function LeftYAxisKLineChart () {
  useEffect(() => {
    const kLineChart = init('left-y-axis-k-line')
    kLineChart.setStyleOptions({
      yAxis: {
        position: 'left'
      }
    })
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('left-y-axis-k-line')
    }
  }, [])
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">Y轴在左边</p>
      <div id="left-y-axis-k-line" className="k-line-chart"/>
    </div>
  )
}
