<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">自定义技术指标</p>
    <div id="custom-technical-indicator-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import {priceAndVolumeTrend} from 'klinecharts-technical-indicator'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'CustomTechnicalIndicatorKLineChart',
    mounted: function () {
      const kLineChart = init('custom-technical-indicator-k-line')
      kLineChart.addCustomTechnicalIndicator(priceAndVolumeTrend)
      kLineChart.createTechnicalIndicator('PVT', 50)
      kLineChart.applyNewData(generatedKLineDataList())
    },
    destroyed: function () {
      dispose('custom-technical-indicator-k-line')
    }
  }
</script>

