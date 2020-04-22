<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">隐藏Y轴</p>
    <div id="without-y-axis-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'WithoutYAxisKLineChart',
    mounted: function () {
      const kLineChart = init('without-y-axis-k-line')
      kLineChart.setStyleOptions({
        yAxis: {
          display: false
        }
      })
      kLineChart.applyNewData(generatedKLineDataList())
    },
    destroyed: function () {
      dispose('without-y-axis-k-line')
    }
  }
</script>
