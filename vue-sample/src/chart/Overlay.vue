<template>
  <Layout title="覆盖物">
    <div id="overlay-k-line" class="k-line-chart" />
    <div class="k-line-chart-menu-container">
      <button v-on:click="createAnnotation()">内置注解</button>
      <button v-on:click="createTag()">内置标签</button>
      <button
        v-for="{ key, text } in overlays"
        :key="key"
        v-on:click="setOverlayType(key)"
      >
        {{ text }}
      </button>
      <button v-on:click="removeAllOverlay()">清除</button>
    </div>
  </Layout>
</template>

<script>
import { dispose, init, registerOverlay } from "klinecharts";
import generatedDataList from "../generatedDataList";
import Layout from "../Layout.vue";

registerOverlay({
  name: "circle",
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  totalStep: 3,
  createPointFigures: function ({ coordinates }) {
    if (coordinates.length === 2) {
      const xDis = Math.abs(coordinates[0].x - coordinates[1].x);
      const yDis = Math.abs(coordinates[0].y - coordinates[1].y);
      const radius = Math.sqrt(xDis * xDis + yDis * yDis);
      return {
        key: "circle",
        type: "circle",
        attrs: {
          ...coordinates[0],
          r: radius,
        },
        styles: {
          style: "stroke_fill",
        },
      };
    }
    return [];
  },
});

export default {
  name: "ChartOverlay",
  components: { Layout },
  data: function () {
    return {
      overlays: [
        { key: "priceLine", text: "内置价格线" },
        { key: "circle", text: "自定义圆" },
      ],
    };
  },
  mounted: function () {
    this.chart = init("overlay-k-line");
    this.chart.applyNewData(generatedDataList());
  },
  methods: {
    setOverlayType: function (name) {
      this.chart.createOverlay(name);
    },
    createAnnotation: function () {
      const dataList = this.chart.getDataList();
      const data = dataList[dataList.length - 20];
      this.chart.createOverlay({
        name: "simpleAnnotation",
        extendData: "注解注解注解",
        points: [
          {
            timestamp: data.timestamp,
            value: data.high
          },
        ],
      });
    },
    createTag: function () {
      const dataList = this.chart.getDataList();
      const data = dataList[dataList.length - 10];
      this.chart.createOverlay({
        name: "simpleTag",
        extendData: "标签标签",
        points: [{ value: data.high }],
      });
    },
    removeAllOverlay() {
      this.chart.removeOverlay();
    },
  },
  unmounted: function () {
    dispose("overlay-k-line");
  },
};
</script>
