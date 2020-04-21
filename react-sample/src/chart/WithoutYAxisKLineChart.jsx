import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function WithoutYAxisKLineChart () {
  useEffect(() => {
    const kLineChart = init('without-y-axis-k-line')
    kLineChart.setStyleOptions({
      yAxis: {
        display: false
      }
    })
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('without-y-axis-k-line')
    }
  }, [])
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">不显示Y轴</p>
      <div id="without-y-axis-k-line" className="k-line-chart"/>
    </div>
  )
}
