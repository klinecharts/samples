<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">技术指标最后值标记</p>
    <div id="technical-indicator-last-data-prompt-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'TechnicalIndicatorLastDataPromptKLineChart',
    mounted: function () {
      const kLineChart = init('technical-indicator-last-data-prompt-k-line')
      kLineChart.setStyleOptions({
        technicalIndicator: {
          lastValueMark: {
            display: true
          }
        }
      })
      kLineChart.applyNewData(generatedKLineDataList())
    },
    destroyed: function () {
      dispose('technical-indicator-last-data-prompt-k-line')
    }
  }
</script>
