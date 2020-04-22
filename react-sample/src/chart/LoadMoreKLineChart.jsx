import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function LoadMoreKLineChart () {
  useEffect(() => {
    const kLineChart = init('load-more-k-line')
    kLineChart.applyNewData(generatedKLineDataList(null, null, 200), true)
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
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">加载历史数据</p>
      <div id="load-more-k-line" className="k-line-chart"/>
    </div>
  )
}
