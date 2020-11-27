<template>
  <Layout title="基础展示">
    <div id="basic-k-line" class="k-line-chart"></div>
  </Layout>
</template>

<script>
import {dispose, init} from 'klinecharts'
import Layout from '@/Layout'
import generatedKLineDataList from '@/generatedKLineDataList'

export default {
  name: 'BasicKLineChart',
  components: {Layout},
  mounted: function () {
    const kLineChart = init('basic-k-line')
    kLineChart.applyNewData(generatedKLineDataList())
  },
  destroyed: function () {
    dispose('basic-k-line')
  }
}
</script>

