<template>
  <Layout title="主题">
    <div
      id="custom-theme-k-line"
      class="k-line-chart"
      v-bind:style="{ backgroundColor: theme === 'dark' ? '#1f2126' : '' }"
    />
    <div class="k-line-chart-menu-container">
      <button v-on:click="setTheme('dark')">深色</button>
      <button v-on:click="setTheme('light')">浅色</button>
    </div>
  </Layout>
</template>

<script>
import { dispose, init } from "klinecharts";
import generatedDataList from "../generatedDataList";
import Layout from "../Layout.vue";

export default {
  name: "ChartTheme",
  components: { Layout },
  data: function () {
    return {
      theme: "light",
    };
  },
  mounted: function () {
    this.chart = init("custom-theme-k-line");
    this.chart.applyNewData(generatedDataList());
  },
  methods: {
    setTheme: function (theme) {
      this.theme = theme;
      this.chart.setStyles(theme);
    },
  },
  unmounted: function () {
    dispose("custom-theme-k-line");
  },
};
</script>
