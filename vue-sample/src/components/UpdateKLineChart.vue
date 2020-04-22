<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">仿真实时</p>
    <div id="update-k-line" class="k-line-chart"/>
  </div>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'

  export default {
    name: 'UpdateKLineChart',
    mounted: function () {
      const kLineChart = init('update-k-line')
      const updateData = () => {
        setTimeout(() => {
          const dataList = kLineChart.getDataList()
          const lastData = dataList[dataList.length - 1]
          const newData = generatedKLineDataList(lastData.timestamp, lastData.close, 1)[0]
          kLineChart.updateData(newData)
          updateData(kLineChart)
        }, 1000)

      }
      kLineChart.applyNewData(generatedKLineDataList())
      updateData()
    },
    methods: {

    },
    destroyed: function () {
      dispose('update-k-line')
    }
  }
</script>
