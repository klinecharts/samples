import React, { useEffect } from 'react'
import { init, dispose, Chart } from 'klinecharts'
import generatedDataList from '../generatedDataList'
import Layout from '../Layout'

function updateData (chart: Chart | null) {
  setTimeout(() => {
    if (chart) {
      const dataList = chart.getDataList()
      const lastData = dataList[dataList.length - 1]
      const newData = generatedDataList(lastData.timestamp, lastData.close, 1)[0]
      newData.timestamp += 1000 * 60
      chart.updateData(newData)
    }
    updateData(chart)
  }, 1000)
}

export default function Update () {
  useEffect(() => {
    const chart = init('update-k-line')
    chart?.applyNewData(generatedDataList())
    updateData(chart)
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
