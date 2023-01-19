<script setup>
import ChartType from "./chart/ChartType.vue";
import Indicator from "./chart/Indicator.vue";
import Theme from "./chart/Theme.vue";
import Language from "./chart/Language.vue";
import YAxis from "./chart/YAxis.vue";
import Tooltip from "./chart/Tooltip.vue";
import Timezone from "./chart/Timezone.vue";
import Overlay from "./chart/Overlay.vue";
import LoadMore from "./chart/LoadMore.vue";
import Update from "./chart/Update.vue";
</script>

<template>
  <div id="app" class="app">
    <ChartType />
    <Theme />
    <YAxis />
    <Language />
    <Tooltip />
    <Timezone />
    <Indicator />
    <Overlay />
    <LoadMore />
    <Update />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f2f3f5;
}

div,
p {
  box-sizing: border-box;
}

p {
  margin: 0;
}

.app {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px;
}
.k-line-chart-container {
  display: flex;
  flex-direction: column;
  margin: 15px;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  width: 620px;
  height: 440px;
  padding: 16px 6px 16px 16px;
}

.k-line-chart-title {
  margin: 0;
  color: #252525;
  padding-bottom: 10px;
}

.k-line-chart {
  display: flex;
  flex: 1;
}
.k-line-chart-menu-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
  color: #606060;
}
.k-line-chart-menu-container button {
  cursor: pointer;
  background-color: #1677ff;
  border-radius: 2px;
  margin-right: 8px;
  height: 24px;
  line-height: 26px;
  padding: 0 6px;
  font-size: 12px;
  color: #fff;
  border: none;
  outline: none;
}
</style>
