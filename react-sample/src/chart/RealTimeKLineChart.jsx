import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function RealTimeKLineChart () {
  useEffect(() => {
    const kLineChart = init('real-time-k-line')
    kLineChart.applyNewData(generatedKLineDataList())
    kLineChart.setCandleStickChartType('real_time')
    return () => {
      dispose('real-time-k-line')
    }
  }, [])
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">分时图</p>
      <div id="real-time-k-line" className="k-line-chart"/>
    </div>
  )
}
