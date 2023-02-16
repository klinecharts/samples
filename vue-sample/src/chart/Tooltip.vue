<template>
  <Layout title="十字光标文字提示">
    <div id="tooltip-k-line" class="k-line-chart" />
    <div class="k-line-chart-menu-container">
      <span style="padding-right: 10px">主图显示类型</span>
      <button v-on:click="setCandleShowType('standard')">默认</button>
      <button v-on:click="setCandleShowType('rect')">矩形框</button>
    </div>
    <div class="k-line-chart-menu-container">
      <span style="padding-right: 10px">k线提示显示规则</span>
      <button
        v-for="{ key, text } in rules"
        :key="key"
        v-on:click="setCandleShowRule(key)"
      >
        {{ text }}
      </button>
    </div>
    <div class="k-line-chart-menu-container">
      <span style="padding-right: 10px">指标提示显示规则</span>
      <button
        v-for="{ key, text } in rules"
        :key="key"
        v-on:click="setIndicatorShowRule(key)"
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

function getTooltipOptions(candleShowType, candleShowRule, indicatorShowRule) {
  return {
    candle: {
      tooltip: {
        showType: candleShowType,
        showRule: candleShowRule,
        custom: (data) => {
          const { prev, current } = data;
          const prevClose = prev?.close ?? current.open;
          const change = ((current.close - prevClose) / prevClose) * 100;
          return [
            { title: "open", value: current.open.toFixed(2) },
            { title: "close", value: current.close.toFixed(2) },
            {
              title: "Change: ",
              value: {
                text: `${change.toFixed(2)}%`,
                color: change < 0 ? "#EF5350" : "#26A69A",
              },
            },
          ];
        },
      },
    },
    indicator: {
      tooltip: {
        showRule: indicatorShowRule,
      },
    },
  };
}

export default {
  name: "ChartTooltip",
  components: { Layout },
  data: function () {
    return {
      rules: [
        { key: "always", text: "总是显示" },
        { key: "follow_cross", text: "跟随十字光标" },
        { key: "none", text: "不显示" },
      ],
      candleShowType: "standard",
      candleShowRule: "always",
      indicatorShowRule: "always",
    };
  },
  mounted: function () {
    this.chart = init("tooltip-k-line");
    this.chart.createIndicator("MA", false, {
      id: "candle_pane",
    });
    this.chart.createIndicator("KDJ", false, { height: 80 });
    this.chart.applyNewData(generatedDataList());
  },
  methods: {
    setCandleShowType: function (type) {
      this.candleShowType = type;
      this.chart.setStyles(
        getTooltipOptions(type, this.candleShowRule, this.indicatorShowRule)
      );
    },
    setCandleShowRule: function (rule) {
      this.candleShowRule = rule;
      this.chart.setStyles(
        getTooltipOptions(this.candleShowType, rule, this.indicatorShowRule)
      );
    },
    setIndicatorShowRule: function (rule) {
      this.indicatorShowRule = rule;
      this.chart.setStyleOptions(
        getTooltipOptions(this.candleShowType, this.candleShowRule, rule)
      );
    },
  },
  unmounted: function () {
    dispose("tooltip-k-line");
  },
};
</script>
