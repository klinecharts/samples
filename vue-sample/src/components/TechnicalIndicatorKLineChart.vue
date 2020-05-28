<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">技术指标</p>
    <div id="technical-indicator-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'TechnicalIndicatorKLineChart',
    mounted: function () {
      const kLineChart = init('technical-indicator-k-line')
      kLineChart.createTechnicalIndicator('VOL', 50)
      kLineChart.applyNewData(generatedKLineDataList())
    },
    destroyed: function () {
      dispose('technical-indicator-k-line')
    }
  }
</script>
