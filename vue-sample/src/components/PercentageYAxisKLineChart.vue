<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">百分比Y轴</p>
    <div id="percentage-y-axis-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'PercentageYAxisKLineChart',
    mounted: function () {
      const kLineChart = init('percentage-y-axis-k-line')
      kLineChart.setStyleOptions({
        yAxis: {
          type: 'percentage'
        }
      })
      kLineChart.applyNewData(generatedKLineDataList())
    },
    destroyed: function () {
      dispose('percentage-y-axis-k-line')
    }
  }
</script>
