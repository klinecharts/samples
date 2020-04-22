<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">左边Y轴</p>
    <div id="left-y-axis-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'LeftYAxisKLineChart',
    mounted: function () {
      const kLineChart = init('left-y-axis-k-line')
      kLineChart.setStyleOptions({
        yAxis: {
          position: 'left'
        }
      })
      kLineChart.applyNewData(generatedKLineDataList())
    },
    destroyed: function () {
      dispose('left-y-axis-k-line')
    }
  }
</script>
