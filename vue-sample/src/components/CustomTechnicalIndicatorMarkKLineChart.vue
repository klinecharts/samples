<template>
  <Layout title="自定义指标标记">
    <div id="custom-technical-indicator-mark-k-line" class="k-line-chart"></div>
  </Layout>
</template>

<script>
import {dispose, init} from 'klinecharts'
import Layout from '@/Layout'
import generatedKLineDataList from '@/generatedKLineDataList'

export default {
  name: 'CustomTechnicalIndicatorMarkKLineChart',
  components: {Layout},
  mounted: function () {
    const kLineChart = init('custom-technical-indicator-mark-k-line')
    kLineChart.createTechnicalIndicator('MACD', false, { height: 150 })
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
    kLineChart.applyNewData(generatedKLineDataList())
  },
  destroyed: function () {
    dispose('custom-technical-indicator-mark-k-line')
  }
}
</script>
