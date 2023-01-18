import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedDataList from '../generatedDataList'
import Layout from '../Layout'

export default function LoadMore () {
  useEffect(() => {
    const chart = init('load-more-k-line')
    chart?.applyNewData(generatedDataList(Date.now(), 5000, 200), true)
    chart?.loadMore(timestamp => {
      setTimeout(() => {
        const firstData = chart.getDataList()[0]
        chart.applyMoreData(generatedDataList(timestamp as number, firstData.close, 100), true)
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
