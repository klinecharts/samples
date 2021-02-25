import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

export default function CustomTechnicalIndicatorMarkKLineChart () {
  useEffect(() => {
    const kLineChart = init('custom-technical-indicator-mark-k-line')
    kLineChart.createTechnicalIndicator('MACD', true, { height: 150 })
    kLineChart.applyNewData(generatedKLineDataList())
    kLineChart.subscribeAction('drawTechnicalIndicator', (data) => {
      const { ctx, coordinate, technicalIndicatorData } = data
      if (technicalIndicatorData.macd > 5) {
        ctx.font = '12px'
        const text = `${technicalIndicatorData.macd.toFixed(4)}`
        ctx.textBaseline = 'middle'
        ctx.fillStyle = '#fff'
        ctx.fillText(text, coordinate.x, coordinate.macd + 6)
      }
    })
    return () => {
      dispose('custom-technical-indicator-mark-k-line')
    }
  }, [])
  return (
    <Layout
      title="自定义指标标记">
      <div id="custom-technical-indicator-mark-k-line" className="k-line-chart"/>
    </Layout>
  )
}
