<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">基础展示</p>
    <div id="basic-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
    import {dispose, init} from 'klinecharts'
import generatedKLineDataList from '../generatedKLineDataList'

export default {
  name: 'BasicKLineChart',
  mounted: function () {
    const kLineChart = init('basic-k-line')
    kLineChart.applyNewData(generatedKLineDataList())
  },
  destroyed: function () {
    dispose('basic-k-line')
  }
}
</script>

