import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function BasicKLineChart () {
  useEffect(() => {
    const kLineChart = init('technical-indicator-k-line')
    kLineChart.addTechnicalIndicator('VOL', 50)
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('technical-indicator-k-line')
    }
  }, [])
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">技术指标</p>
      <div id="technical-indicator-k-line" className="k-line-chart"/>
    </div>
  )
}
