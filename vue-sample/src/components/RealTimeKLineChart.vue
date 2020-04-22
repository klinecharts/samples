<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">分时图</p>
    <div id="real-time-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../generatedKLineDataList'

export default {
  name: 'RealTimeKLineChart',
  mounted: function () {
    const kLineChart = init('real-time-k-line')
    kLineChart.setCandleStickChartType('real_time')
    kLineChart.applyNewData(generatedKLineDataList())
  },
  destroyed: function () {
    dispose('real-time-k-line')
  }
}
</script>
