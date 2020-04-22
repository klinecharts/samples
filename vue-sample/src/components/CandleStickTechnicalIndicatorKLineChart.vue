<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">蜡烛图技术指标设置</p>
    <div
      id="candle-stick-technical-indicator-type-k-line"
      class="k-line-chart"/>
    <div class="k-line-chart-setting-container">
      <button
        v-on:click="setTechnicalIndicatorType('NO')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': technicalIndicatorType === 'NO'}">
        NO
      </button>
      <button
        v-on:click="setTechnicalIndicatorType('MA')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': technicalIndicatorType === 'MA'}">
        MA
      </button>
      <button
        v-on:click="setTechnicalIndicatorType('EMA')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': technicalIndicatorType === 'EMA'}">
        EMA
      </button>
      <button
        v-on:click="setTechnicalIndicatorType('BOLL')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': technicalIndicatorType === 'BOLL'}">
        BOLL
      </button>
      <button
        v-on:click="setTechnicalIndicatorType('SAR')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': technicalIndicatorType === 'SAR'}">
        SAR
      </button>
    </div>
  </div>
</template>

<script>
  import {dispose, init} from "klinecharts"
  import generatedKLineDataList from "../generatedKLineDataList"

  export default {
    name: 'CandleStickTechnicalIndicatorKLineChart',
    data: function () {
      return {
        technicalIndicatorType: 'MA'
      }
    },
    mounted: function () {
      this.kLineChart = init('candle-stick-technical-indicator-type-k-line')
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      setTechnicalIndicatorType: function (technicalIndicatorType) {
        this.technicalIndicatorType = technicalIndicatorType
        this.kLineChart.setCandleStickTechnicalIndicatorType(technicalIndicatorType)
      }
    },
    destroyed: function () {
      dispose('candle-stick-technical-indicator-type-k-line')
    }
  }
</script>
