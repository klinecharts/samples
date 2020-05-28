import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import { priceAndVolumeTrend } from 'klinecharts-technical-indicator'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function CustomTechnicalIndicatorKLineChart () {
  let kLineChart
  useEffect(() => {
    kLineChart = init('custom-technical-indicator-k-line')
    kLineChart.addCustomTechnicalIndicator(priceAndVolumeTrend)
    kLineChart.createTechnicalIndicator('PVT', 50)
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('custom-technical-indicator-k-line')
    }
  })
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">自定义技术指标</p>
      <div id="custom-technical-indicator-k-line" className="k-line-chart"/>
    </div>
  )
}
