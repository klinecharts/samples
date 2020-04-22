<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">浮动框提示</p>
    <div id="float-prompt-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'FloatPromptKLineChart',
    mounted: function () {
      const kLineChart = init('float-prompt-k-line')
      kLineChart.setStyleOptions({
        floatLayer: {
          prompt: {
            candleStick: {
              showType: 'rect'
            }
          }
        }
      })
      kLineChart.applyNewData(generatedKLineDataList())
    },
    destroyed: function () {
      dispose('float-prompt-k-line')
    }
  }
</script>
