<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">加载更多</p>
    <div id="load-more-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'LoadMoreKLineChart',
    mounted: function () {
      const kLineChart = init('load-more-k-line')
      kLineChart.loadMore(timestamp => {
        setTimeout(() => {
          const firstData = kLineChart.getDataList()[0]
          kLineChart.applyMoreData(generatedKLineDataList(timestamp, firstData.close, 100), true)
        }, 2000)
      })
      kLineChart.applyNewData(generatedKLineDataList(null, null , 200), true)
    },
    destroyed: function () {
      dispose('load-more-k-line')
    }
  }
</script>
