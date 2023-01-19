<template>
  <Layout title="技术指标">
    <div id="indicator-k-line" class="k-line-chart" />
    <div class="k-line-chart-menu-container">
      <span style="padding-right: 10px">主图指标</span>
      <button
        v-for="type in mainIndicators"
        :key="type"
        v-on:click="setMainIndicator(type)"
      >
        {{ type }}
      </button>
      <button v-on:click="setMainIndicator('EMOJI')">自定义</button>
      <span style="padding-right: 10px; padding-left: 12px">副图指标</span>
      <button
        v-for="type in subIndicators"
        :key="type"
        v-on:click="setSubIndicator(type)"
      >
        {{ type }}
      </button>
      <button v-on:click="setSubIndicator('EMOJI')">自定义</button>
    </div>
  </Layout>
</template>

<script>
import { dispose, init, registerIndicator } from "klinecharts";
import generatedDataList from "../generatedDataList";
import Layout from "../Layout.vue";

const fruits = [
  "🍏",
  "🍎",
  "🍐",
  "🍊",
  "🍋",
  "🍌",
  "🍉",
  "🍇",
  "🍓",
  "🍈",
  "🍒",
  "🍑",
  "🍍",
  "🥥",
  "🥝",
  "🥭",
  "🥑",
  "🍏",
];

registerIndicator({
  name: "EMOJI",
  figures: [{ key: "emoji" }],
  calc: (kLineDataList) => {
    return kLineDataList.map((kLineData) => ({
      emoji: kLineData.close,
      text: fruits[Math.floor(Math.random() * 17)],
    }));
  },
  draw: ({ ctx, barSpace, visibleRange, indicator, xAxis, yAxis }) => {
    const { from, to } = visibleRange;
    ctx.font = `${barSpace.gapBar}px Helvetica Neue`;
    ctx.textAlign = "center";
    const result = indicator.result;
    for (let i = from; i < to; i++) {
      const data = result[i];
      const x = xAxis.convertToPixel(i);
      const y = yAxis.convertToPixel(data.emoji);
      ctx.fillText(data.text, x, y);
    }
    return false;
  },
});

export default {
  name: "ChartIndicator",
  components: { Layout },
  data: function () {
    return {
      mainIndicators: ["MA", "EMA", "SAR"],
      subIndicators: ["VOL", "MACD", "KDJ"],
    };
  },
  mounted: function () {
    this.chart = init("indicator-k-line");
    this.paneId = this.chart.createIndicator("VOL");
    this.chart.applyNewData(generatedDataList());
  },
  methods: {
    setMainIndicator: function (name) {
      this.chart.createIndicator(name, false, { id: "candle_pane" });
    },
    setSubIndicator: function (name) {
      this.chart.createIndicator(name, false, { id: this.paneId });
    },
  },
  unmounted: function () {
    dispose("indicator-k-line");
  },
};
</script>
