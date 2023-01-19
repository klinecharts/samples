<template>
  <Layout title="Y轴">
    <div id="y-axis-k-line" class="k-line-chart" />
    <div class="k-line-chart-menu-container">
      <button
        v-for="{ key, text } in types"
        :key="key"
        v-on:click="setYAxisType(key)"
      >
        {{ text }}
      </button>
    </div>
  </Layout>
</template>

<script>
import { dispose, init } from "klinecharts";
import generatedDataList from "../generatedDataList";
import Layout from "../Layout.vue";

export default {
  name: "ChartYAxis",
  components: { Layout },
  data: function () {
    return {
      types: [
        { key: "normal", text: "线性轴" },
        { key: "percentage", text: "百分比轴" },
        { key: "log", text: "对数轴" },
      ]
    };
  },
  mounted: function () {
    this.chart = init("y-axis-k-line");
    this.chart.applyNewData(generatedDataList());
  },
  methods: {
    setYAxisType: function (type) {
      this.chart.setStyles({
        yAxis: { type },
      });
    },
  },
  unmounted: function () {
    dispose("y-axis-k-line");
  },
};
</script>
