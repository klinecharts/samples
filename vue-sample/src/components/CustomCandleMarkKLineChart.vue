<template>
  <Layout title="自定义蜡烛图标记">
    <div id="custom-candle-mark-k-line" class="k-line-chart"></div>
  </Layout>
</template>

<script>
import {dispose, init} from 'klinecharts'
import Layout from '@/Layout'
import generatedKLineDataList from '@/generatedKLineDataList'

export default {
  name: 'CustomCandleMarkKLineChart',
  components: {Layout},
  mounted: function () {
    const kLineChart = init('custom-candle-mark-k-line')
    kLineChart.setOffsetRightSpace(200)
    kLineChart.subscribeDrawAction('drawCandle', (data) => {
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
    kLineChart.applyNewData(generatedKLineDataList())
  },
  destroyed: function () {
    dispose('custom-candle-mark-k-line')
  }
}
</script>
