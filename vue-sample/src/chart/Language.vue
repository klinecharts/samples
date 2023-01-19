<template>
  <Layout title="多语言">
    <div id="language-k-line" class="k-line-chart" />
    <div class="k-line-chart-menu-container">
      <button v-on:click="setLanguage('zh-CN')">简体中文</button>
      <button v-on:click="setLanguage('zh-HK')">繁體中文</button>
      <button v-on:click="setLanguage('en-US')">English</button>
    </div>
  </Layout>
</template>

<script>
import { dispose, init, registerLocale } from "klinecharts";
import generatedDataList from "../generatedDataList";
import Layout from "../Layout.vue";

registerLocale("zh-HK", {
  time: "時間：",
  open: "開：",
  high: "高：",
  low: "低：",
  close: "收：",
  volume: "成交量：",
});

export default {
  name: "ChartLanguage",
  components: { Layout },
  mounted: function () {
    this.chart = init("language-k-line");
    this.chart.applyNewData(generatedDataList());
  },
  methods: {
    setLanguage: function (language) {
      this.chart.setLocale(language);
    },
  },
  unmounted: function () {
    dispose("language-k-line");
  },
};
</script>
