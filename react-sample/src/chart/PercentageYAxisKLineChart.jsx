import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function PercentageYAxisKLineChart () {
  useEffect(() => {
    const kLineChart = init('percentage-y-axis-k-line')
    kLineChart.setStyleOptions({
      yAxis: {
        type: 'percentage'
      }
    })
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('percentage-y-axis-k-line')
    }
  }, [])
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">百分比Y轴</p>
      <div id="percentage-y-axis-k-line" className="k-line-chart"/>
    </div>
  )
}
