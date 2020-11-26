import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

export default function BasicKLineChart () {
  useEffect(() => {
    const kLineChart = init('basic-k-line')
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('basic-k-line')
    }
  }, [])
  return (
    <Layout
      title="基础展示">
      <div id="basic-k-line" className="k-line-chart"/>
    </Layout>
  )
}
