import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

export default function UpdateKLineChart () {
  function updateData (kLineChart) {
    setTimeout(() => {
      if (kLineChart) {
        const dataList = kLineChart.getDataList()
        const lastData = dataList[dataList.length - 1]
        const newData = generatedKLineDataList(lastData.timestamp, lastData.close, 1)[0]
        newData.timestamp += 1000 * 60
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
    <Layout
      title="实时更新">
      <div id="update-k-line" className="k-line-chart"/>
    </Layout>
  )
}
