<template>
  <Layout title="时区设置">
    <div id="timezone-k-line" class="k-line-chart" />
    <div class="k-line-chart-menu-container">
      <button
        v-for="{ key, text } in timezones"
        :key="key"
        v-on:click="setTimezone(key)"
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
  name: "ChartTimezone",
  components: { Layout },
  data: function () {
    return {
      timezones: [
        { key: "Asia/Shanghai", text: "上海" },
        { key: "Europe/Berlin", text: "柏林" },
        { key: "America/Chicago", text: "芝加哥" },
      ],
    };
  },
  mounted: function () {
    this.chart = init("timezone-k-line");
    this.chart.applyNewData(generatedDataList());
  },
  methods: {
    setTimezone: function (timezone) {
      this.chart.setTimezone(timezone);
    },
  },
  unmounted: function () {
    dispose("timezone-k-line");
  },
}
</script>
