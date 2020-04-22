import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function UpdateKLineChart () {
  function updateData (kLineChart) {
    setTimeout(() => {
      if (kLineChart) {
        const dataList = kLineChart.getDataList()
        const lastData = dataList[dataList.length - 1]
        const newData = generatedKLineDataList(lastData.timestamp, lastData.close, 1)[0]
        kLineChart.updateData(newData)
      }
      updateData(kLineChart)
    }, 1000)
  }

  useEffect(() => {
    const kLineChart = init('update-k-line')
    kLineChart.applyNewData(generatedKLineDataList())
    updateData(kLineChart)
    return () => {
      dispose('update-k-line')
    }
  }, [])
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">仿真实时</p>
      <div id="update-k-line" className="k-line-chart"/>
    </div>
  )
}
