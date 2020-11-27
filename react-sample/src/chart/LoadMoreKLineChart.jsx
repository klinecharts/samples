import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

export default function LoadMoreKLineChart () {
  useEffect(() => {
    const kLineChart = init('load-more-k-line')
    kLineChart.applyNewData(generatedKLineDataList(Date.now(), 5000, 200), true)
    kLineChart.loadMore(timestamp => {
      setTimeout(() => {
        const firstData = kLineChart.getDataList()[0]
        kLineChart.applyMoreData(generatedKLineDataList(timestamp, firstData.close, 100), true)
      }, 2000)
    })
    return () => {
      dispose('load-more-k-line')
    }
  }, [])
  return (
    <Layout
      title="加载历史数据">
      <div id="load-more-k-line" className="k-line-chart"/>
    </Layout>
  )
}
