<template>
  <Layout
    title="加载更多">
    <div id="load-more-k-line" class="k-line-chart"/>
  </Layout>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'
  import Layout from "@/Layout"

  export default {
    name: 'LoadMoreKLineChart',
    components: {Layout},
    mounted: function () {
      const kLineChart = init('load-more-k-line')
      kLineChart.loadMore(timestamp => {
        setTimeout(() => {
          const firstData = kLineChart.getDataList()[0]
          kLineChart.applyMoreData(generatedKLineDataList(timestamp, firstData.close, 100), true)
        }, 2000)
      })
      kLineChart.applyNewData(generatedKLineDataList(Date.now(), 5000 , 200), true)
    },
    destroyed: function () {
      dispose('load-more-k-line')
    }
  }
</script>
