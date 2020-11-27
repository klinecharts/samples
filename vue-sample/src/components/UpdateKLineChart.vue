<template>
  <Layout title="实时更新">
    <div id="update-k-line" class="k-line-chart"/>
  </Layout>
</template>

<script>
  import {dispose, init} from 'klinecharts'
  import generatedKLineDataList from '../generatedKLineDataList'
  import Layout from "@/Layout"

  export default {
    name: 'UpdateKLineChart',
    components: {Layout},
    mounted: function () {
      const kLineChart = init('update-k-line')
      const updateData = () => {
        setTimeout(() => {
          const dataList = kLineChart.getDataList()
          const lastData = dataList[dataList.length - 1]
          const newData = generatedKLineDataList(lastData.timestamp, lastData.close, 1)[0]
          newData.timestamp += 60 * 1000
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
