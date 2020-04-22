<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">时区设置</p>
    <div
      id="timezone-k-line"
      class="k-line-chart"/>
    <div class="k-line-chart-setting-container">
      <button
        v-on:click="setTimezone('Asia/Shanghai')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': timezone === 'Asia/Shanghai'}">
        上海
      </button>
      <button
        v-on:click="setTimezone('Europe/Berlin')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': timezone === 'Europe/Berlin'}">
        柏林
      </button>
      <button
        v-on:click="setTimezone('America/Chicago')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': timezone === 'America/Chicago'}">
        芝加哥
      </button>
    </div>
  </div>
</template>

<script>
  import {dispose, init} from "klinecharts"
  import generatedKLineDataList from "../generatedKLineDataList"

  export default {
    name: 'TimezoneKLineChart',
    data: function () {
      return {
        timezone: 'Asia/Shanghai'
      }
    },
    mounted: function () {
      this.kLineChart = init('timezone-k-line')
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      setTimezone: function (timezone) {
        this.timezone = timezone
        this.kLineChart.setTimezone(timezone)
      }
    },
    destroyed: function () {
      dispose('timezone-k-line')
    }
  }
</script>
