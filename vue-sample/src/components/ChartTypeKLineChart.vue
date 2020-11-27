<template>
  <Layout title="图表类型">
    <div id="chart-type-k-line" class="k-line-chart"/>
    <div
      class="k-line-chart-menu-container">
      <button
        v-for="({ key, text }) in chartTypes"
        :key="key"
        v-on:click="setChartType(key)">
        {{text}}
      </button>
    </div>
  </Layout>
</template>

<script>
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '@/generatedKLineDataList'
import Layout from "@/Layout"

export default {
  name: 'ChartTypeKLineChart',
  components: {Layout},
  data: function () {
    return {
      chartTypes: [
        { key: 'candle_solid', text: '蜡烛实心' },
        { key: 'candle_stroke', text: '蜡烛空心' },
        { key: 'candle_up_stroke', text: '蜡烛涨空心' },
        { key: 'candle_down_stroke', text: '蜡烛跌空心' },
        { key: 'ohlc', text: 'OHLC' },
        { key: 'area', text: '面积图' }
      ]
    }
  },
  mounted: function () {
    this.kLineChart = init('chart-type-k-line')
    this.kLineChart.applyNewData(generatedKLineDataList())
  },
  methods: {
    setChartType: function (type) {
      this.kLineChart.setStyleOptions({
        candle: {
          type
        }
      })
    }
  },
  destroyed: function () {
    dispose('chart-type-k-line')
  }
}
</script>
