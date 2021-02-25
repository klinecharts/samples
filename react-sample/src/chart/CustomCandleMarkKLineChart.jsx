import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

export default function CustomCandleMarkKLineChart () {
  useEffect(() => {
    const kLineChart = init('custom-candle-mark-k-line')
    kLineChart.setOffsetRightSpace(200)
    kLineChart.applyNewData(generatedKLineDataList())
    kLineChart.subscribeAction('drawCandle', (data) => {
      const { ctx, dataIndex, kLineData, coordinate, isCandle } = data
      const dataSize = kLineChart.getDataList().length
      if (isCandle && dataIndex === dataSize - 1) {
        ctx.font = '12px'
        const text = `标记，最新价：${kLineData.close.toFixed(2)}`
        const textWidth = ctx.measureText(text).width

        const startX = coordinate.x + 10
        const startY = coordinate.close
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(startX + 10, startY - 10)
        ctx.lineTo(startX + 10 + textWidth + 10, startY - 10)
        ctx.lineTo(startX + 10 + textWidth + 10, startY + 10)
        ctx.lineTo(startX + 10, startY + 10)
        ctx.closePath()
        ctx.fill()
        ctx.textBaseline = 'middle'
        ctx.fillStyle = '#fff'
        ctx.fillText(text, startX + 12, startY)
      }
    })
    return () => {
      dispose('custom-candle-mark-k-line')
    }
  }, [])
  return (
    <Layout
      title="自定义蜡烛图标记">
      <div id="custom-candle-mark-k-line" className="k-line-chart"/>
    </Layout>
  )
}
