<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">Y轴文字在图表内部</p>
    <div id="y-axis-text-inside-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'YAxisTextInsideKLineChart',
    mounted: function () {
      const kLineChart = init('y-axis-text-inside-k-line')
      kLineChart.setStyleOptions({
        yAxis: {
          tickText: {
            position: 'inside'
          }
        }
      })
      kLineChart.applyNewData(generatedKLineDataList())
    },
    destroyed: function () {
      dispose('y-axis-text-inside-k-line')
    }
  }
</script>
