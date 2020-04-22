<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">添加标记图形</p>
    <div
      id="draw-graphic-mark-k-line"
      class="k-line-chart"/>
    <div class="k-line-chart-setting-container">
      <button
        v-on:click="setGraphicMarkType('priceLine')"
        class="k-line-chart-setting-button">
        价格线
      </button>
      <button
        v-on:click="setGraphicMarkType('priceChannelLine')"
        class="k-line-chart-setting-button">
        价格通道线
      </button>
      <button
        v-on:click="setGraphicMarkType('parallelStraightLine')"
        class="k-line-chart-setting-button">
        平行直线
      </button>
      <button
        v-on:click="setGraphicMarkType('fibonacciLine')"
        class="k-line-chart-setting-button">
        斐波那契回调
      </button>
      <button
        v-on:click="removeAllGraphicMark()"
        class="k-line-chart-setting-button">
        清除
      </button>
    </div>
  </div>
</template>

<script>
  import {dispose, init} from "klinecharts"
  import generatedKLineDataList from "../generatedKLineDataList"

  export default {
    name: 'DrawGraphicMarkKLineChart',
    data: function () {
      return {
        graphicMarkType: 'Asia/Shanghai'
      }
    },
    mounted: function () {
      this.kLineChart = init('draw-graphic-mark-k-line')
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      setGraphicMarkType: function (graphicMarkType) {
        this.graphicMarkType = graphicMarkType
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
