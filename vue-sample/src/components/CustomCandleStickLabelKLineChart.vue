<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">自定义蜡烛图label</p>
    <div id="custom-candle-stick-label-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'CustomCandleStickLabelKLineChart',
    mounted: function () {
      const kLineChart = init('custom-candle-stick-label-k-line')
      kLineChart.setStyleOptions({
        floatLayer: {
          prompt: {
            candleStick: {
              labels: ['开', '收', '涨幅'],
              values: kLineData => {
                return [
                  {
                    value: kLineData.open.toFixed(2)
                  }, {
                    value: kLineData.close.toFixed(2)
                  }, {
                    value: `${((kLineData.close - kLineData.open) / kLineData.open * 100).toFixed(2)}%`,
                    color: kLineData.close - kLineData.open > 0 ? '#26A69A' : '#EF5350'
                  }
                ]
              }
            }
          }
        }
      })
      kLineChart.applyNewData(generatedKLineDataList())
    },
    destroyed: function () {
      dispose('custom-candle-stick-label-k-line')
    }
  }
</script>

