<template>
  <Layout title="技术指标">
    <div id="technical-indicator-k-line" class="k-line-chart"/>
    <div
      class="k-line-chart-menu-container">
      <span style="padding-right: 10px">主图指标</span>
      <button
        v-for="type in mainTechnicalIndicatorTypes"
        :key="type"
        v-on:click="setCandleTechnicalIndicator(type)">
        {{type}}
      </button>
      <button
        v-on:click="setCandleTechnicalIndicator('EMOJI')">
        自定义
      </button>
      <span style="padding-right: 10px;padding-left: 12px">副图指标</span>
      <button
        v-for="type in subTechnicalIndicatorTypes"
        :key="type"
        v-on:click="setSubTechnicalIndicator(type)">
        {{type}}
      </button>
      <button
        v-on:click="setSubTechnicalIndicator('EMOJI')">
        自定义
      </button>
    </div>
  </Layout>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'
  import Layout from "@/Layout"

  const fruits = [
    '🍏', '🍎', '🍐', '🍊', '🍋', '🍌',
    '🍉', '🍇', '🍓', '🍈', '🍒', '🍑',
    '🍍', '🥥', '🥝', '🥭', '🥑', '🍏'
  ]

  // 自定义指标
  const emojiTechnicalIndicator = {
    name: 'EMOJI',
    plots: [
      { key: 'emoji' }
    ],
    calcTechnicalIndicator: (kLineDataList) => {
      const result = []
      kLineDataList.forEach(kLineData => {
        result.push({ emoji: kLineData.close, text: fruits[Math.floor(Math.random() * 17)] })
      })
      return result
    },
    render: (
      ctx,
      { from, to, technicalIndicatorDataList },
      { barSpace },
      options, xAxis, yAxis
    ) => {
      ctx.font = `${barSpace}px Helvetica Neue`
      ctx.textAlign = 'center'
      for (let i = from; i < to; i++) {
        const data = technicalIndicatorDataList[i]
        const x = xAxis.convertToPixel(i)
        const y = yAxis.convertToPixel(data.emoji)
        ctx.fillText(data.text, x, y)
      }
    }
  }

  export default {
    name: 'TechnicalIndicatorKLineChart',
    components: {Layout},
    data: function () {
      return {
        mainTechnicalIndicatorTypes: ['MA', 'EMA', 'SAR'],
        subTechnicalIndicatorTypes: ['VOL', 'MACD', 'KDJ']
      }
    },
    mounted: function () {
      this.kLineChart = init('technical-indicator-k-line')
      this.kLineChart.addCustomTechnicalIndicator(emojiTechnicalIndicator)
      this.paneId = this.kLineChart.createTechnicalIndicator('VOL', false)
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      setCandleTechnicalIndicator: function (type) {
        this.kLineChart.createTechnicalIndicator(type, false, { id: 'candle_pane' })
      },
      setSubTechnicalIndicator: function (type) {
        this.kLineChart.createTechnicalIndicator(type, false, { id: this.paneId })
      },
    },
    destroyed: function () {
      dispose('technical-indicator-k-line')
    }
  }
</script>
