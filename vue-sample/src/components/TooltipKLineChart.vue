<template>
  <Layout title="十字光标文字提示">
    <div id="tooltip-k-line" class="k-line-chart"/>
    <div
      class="k-line-chart-menu-container">
      <span style="padding-right: 10px">主图显示类型</span>
      <button
        v-on:click="setCandleShowType('standard')">
      默认
      </button>
      <button
        v-on:click="setCandleShowType('rect')">
      矩形框
      </button>
    </div>
    <div
      class="k-line-chart-menu-container">
      <span style="padding-right: 10px">k线提示显示规则</span>
      <button
        v-for="({ key, text }) in rules"
        :key="key"
        v-on:click="setCandleShowRule(key)">
        {{text}}
      </button>
    </div>
    <div
      class="k-line-chart-menu-container">
      <span style="padding-right: 10px">指标提示显示规则</span>
      <button
        v-for="({ key, text }) in rules"
        :key="key"
        v-on:click="setTechnicalIndicatorShowRule(key)">
        {{text}}
      </button>
    </div>
  </Layout>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'
  import Layout from "@/Layout"

  function getTooltipOptions (candleShowType, candleShowRule, technicalIndicatorShowRule) {
    return {
      candle: {
        tooltip: {
          showType: candleShowType,
          showRule: candleShowRule,
          labels: ['开盘价', '收盘价', '涨跌幅'],
          values: kLineData => {
            const change = (kLineData.close - kLineData.open) / kLineData.open * 100
            return [
              { value: kLineData.open.toFixed(2) },
              { value: kLineData.close.toFixed(2) },
              {
                value: `${change.toFixed(2)}%`,
                color: change < 0 ? '#EF5350' : '#26A69A'
              }
            ]
          }
        }
      },
      technicalIndicator: {
        tooltip: {
          showRule: technicalIndicatorShowRule
        }
      }
    }
  }

  export default {
    name: 'TooltipKLineChart',
    components: {Layout},
    data: function () {
      return {
        rules: [
          { key: 'always', text: '总是显示' },
          { key: 'follow_cross', text: '跟随十字光标' },
          { key: 'none', text: '不显示' }
        ],
        candleShowType: 'standard',
        candleShowRule: 'always',
        technicalIndicatorShowRule: 'always'
      }
    },
    mounted: function () {
      this.kLineChart = init('tooltip-k-line')
      this.kLineChart.createTechnicalIndicator('MA', false, { id: 'candle_pane' })
      this.kLineChart.createTechnicalIndicator('KDJ', false, { height: 80 })
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      setCandleShowType: function (type) {
        this.candleShowType = type
        this.kLineChart.setStyleOptions(getTooltipOptions(
          type, this.candleShowRule, this.technicalIndicatorShowRule
        ))
      },
      setCandleShowRule: function (rule) {
        this.candleShowRule = rule
        this.kLineChart.setStyleOptions(getTooltipOptions(
          this.candleShowType, rule, this.technicalIndicatorShowRule
        ))
      },
      setTechnicalIndicatorShowRule: function (rule) {
        this.technicalIndicatorShowRule = rule
        this.kLineChart.setStyleOptions(getTooltipOptions(
          this.candleShowType, this.candleShowRule, rule
        ))
      },
    },
    destroyed: function () {
      dispose('tooltip-k-line')
    }
  }
</script>
