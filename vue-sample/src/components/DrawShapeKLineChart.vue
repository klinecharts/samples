<template>
  <Layout title="绘图">
    <div
      id="draw-shape-k-line"
      class="k-line-chart"/>
    <div
      class="k-line-chart-menu-container">
      <button
        v-for="({ key, text }) in shapes"
        :key="key"
        v-on:click="setShapeType(key)">
        {{text}}
      </button>
      <button
        v-on:click="removeAllShape()">
        清除
      </button>
    </div>
  </Layout>
</template>

<script>
  import { dispose, init } from "klinecharts"
  import { checkCoordinateOnSegment } from "klinecharts/lib/shape/shapeHelper"
  import generatedKLineDataList from "../generatedKLineDataList"
  import Layout from "@/Layout"

  const rect = {
    name: 'rect',
    totalStep: 3,
    checkEventCoordinateOnShape: ({ dataSource, eventCoordinate }) => {
      return checkCoordinateOnSegment(dataSource[0], dataSource[1], eventCoordinate)
    },
    createShapeDataSource: ({ coordinates }) => {
      if (coordinates.length === 2) {
        return [
          {
            type: 'line',
            isDraw: false,
            isCheck: true,
            dataSource: [
              [{ ...coordinates[0] }, { x: coordinates[1].x, y: coordinates[0].y }],
              [{ x: coordinates[1].x, y: coordinates[0].y }, { ...coordinates[1] }],
              [{ ...coordinates[1] }, { x: coordinates[0].x, y: coordinates[1].y }],
              [{ x: coordinates[0].x, y: coordinates[1].y }, { ...coordinates[0] }]
            ]
          },
          {
            type: 'polygon',
            isDraw: true,
            isCheck: false,
            styles: { style: 'fill' },
            dataSource: [[
              { ...coordinates[0] },
              { x: coordinates[1].x, y: coordinates[0].y },
              { ...coordinates[1] },
              { x: coordinates[0].x, y: coordinates[1].y }
            ]]
          },
          {
            type: 'polygon',
            isDraw: true,
            isCheck: false,
            dataSource: [[
              { ...coordinates[0] },
              { x: coordinates[1].x, y: coordinates[0].y },
              { ...coordinates[1] },
              { x: coordinates[0].x, y: coordinates[1].y }
            ]]
          }
        ]
      }
      return []
    }
  }


  const circle = {
    name: 'circle',
    totalStep: 3,
     checkEventCoordinateOnShape: ({ dataSource, eventCoordinate }) => {
      const xDis = Math.abs(dataSource.x - eventCoordinate.x)
      const yDis = Math.abs(dataSource.y - eventCoordinate.y)
      const r = Math.sqrt(xDis * xDis + yDis * yDis)
      return Math.abs(r - dataSource.radius) < 3;
    },
    createShapeDataSource: ({ coordinates }) => {
      if (coordinates.length === 2) {
        const xDis = Math.abs(coordinates[0].x - coordinates[1].x)
        const yDis = Math.abs(coordinates[0].y - coordinates[1].y)
        const radius = Math.sqrt(xDis * xDis + yDis * yDis)
        return [
          {
            type: 'arc',
            isDraw: true,
            isCheck: false,
            styles: { style: 'fill' },
            dataSource: [
              { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 }
            ]
          },
          {
            type: 'arc',
            isDraw: true,
            isCheck: true,
            dataSource: [
              { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 }
            ]
          }
        ];
      }
      return []
    }
  }

  export default {
    name: 'DrawShapeKLineChart',
    components: {Layout},
    data: function () {
      return {
        shapes: [
          { key: 'priceLine', text: '价格线' },
          { key: 'priceChannelLine', text: '价格通道线' },
          { key: 'parallelStraightLine', text: '平行直线' },
          { key: 'fibonacciLine', text: '斐波那契回调' },
          { key: 'rect', text: '自定义矩形' },
          { key: 'circle', text: '自定义圆' }
        ]
      }
    },
    mounted: function () {
      this.kLineChart = init('draw-shape-k-line')
      this.kLineChart.addShapeTemplate([rect, circle])
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      setShapeType: function (shapeName) {
        this.kLineChart.createShape(shapeName)
      },
      removeAllShape () {
        this.kLineChart.removeShape()
      }
    },
    destroyed: function () {
      dispose('draw-shape-k-line')
    }
  }
</script>
