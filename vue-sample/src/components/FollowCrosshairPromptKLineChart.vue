<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">提示跟随十字光标</p>
    <div id="follow-crosshair-prompt-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'FollowCrosshairPromptKLineChart',
    mounted: function () {
      const kLineChart = init('follow-crosshair-prompt-k-line')
      kLineChart.setStyleOptions({
        floatLayer: {
          prompt: {
            displayRule: 'follow_cross'
          }
        }
      })
      kLineChart.applyNewData(generatedKLineDataList())
    },
    destroyed: function () {
      dispose('follow-crosshair-prompt-k-line')
    }
  }
</script>
