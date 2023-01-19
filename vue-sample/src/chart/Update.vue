<template>
  <Layout title="实时更新">
    <div id="update-k-line" class="k-line-chart" />
  </Layout>
</template>

<script>
import { dispose, init } from "klinecharts";
import generatedDataList from "../generatedDataList";
import Layout from "../Layout.vue";

export default {
  name: "ChartUpdate",
  components: { Layout },
  mounted: function () {
    const chart = init("update-k-line");
    const updateData = () => {
      setTimeout(() => {
        const dataList = chart.getDataList();
        const lastData = dataList[dataList.length - 1];
        const newData = generatedDataList(
          lastData.timestamp,
          lastData.close,
          1
        )[0];
        newData.timestamp += 60 * 1000;
        chart.updateData(newData);
        updateData(chart);
      }, 1000);
    };
    chart.applyNewData(generatedDataList());
    updateData();
  },
  unmounted: function () {
    dispose("update-k-line");
  },
};
</script>
