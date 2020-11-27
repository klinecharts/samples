<template>
  <Layout title="画线">
    <div
      id="draw-graphic-mark-k-line"
      class="k-line-chart"/>
    <div
      class="k-line-chart-menu-container">
      <button
        v-for="({ key, text }) in drawLines"
        :key="key"
        v-on:click="setGraphicMarkType(key)">
        {{text}}
      </button>
      <button
        v-on:click="removeAllGraphicMark()">
        清除
      </button>
    </div>
  </Layout>
</template>

<script>
  import {dispose, init} from "klinecharts"
  import generatedKLineDataList from "../generatedKLineDataList"
  import Layout from "@/Layout"

  export default {
    name: 'DrawGraphicMarkKLineChart',
    components: {Layout},
    data: function () {
      return {
        drawLines: [
          { key: 'priceLine', text: '价格线' },
          { key: 'priceChannelLine', text: '价格通道线' },
          { key: 'parallelStraightLine', text: '平行直线' },
          { key: 'fibonacciLine', text: '斐波那契回调' }
        ]
      }
    },
    mounted: function () {
      this.kLineChart = init('draw-graphic-mark-k-line')
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      setGraphicMarkType: function (graphicMarkType) {
        this.kLineChart.addGraphicMark(graphicMarkType)
      },
      removeAllGraphicMark () {
        this.kLineChart.removeAllGraphicMark()
      }
    },
    destroyed: function () {
      dispose('draw-graphic-mark-k-line')
    }
  }
</script>
