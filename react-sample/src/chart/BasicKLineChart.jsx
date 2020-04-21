import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function BasicKLineChart () {
  useEffect(() => {
    const kLineChart = init('basic-k-line')
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('basic-k-line')
    }
  }, [])
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">基础展示</p>
      <div id="basic-k-line" className="k-line-chart"/>
    </div>
  )
}
