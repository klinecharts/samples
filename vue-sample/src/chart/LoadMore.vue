<template>
  <Layout title="加载更多">
    <div id="load-more-k-line" class="k-line-chart" />
  </Layout>
</template>

<script>
import { dispose, init } from "klinecharts";
import generatedDataList from "../generatedDataList";
import Layout from "../Layout.vue";

export default {
  components: { Layout },
  mounted: function () {
    const chart = init("load-more-k-line");
    chart.loadMore((timestamp) => {
      setTimeout(() => {
        const firstData = chart.getDataList()[0];
        chart.applyMoreData(
          generatedDataList(timestamp, firstData.close, 100),
          true
        );
      }, 2000);
    });
    chart.applyNewData(generatedDataList(Date.now(), 5000, 200), true);
  },
  unmounted: function () {
    dispose("load-more-k-line");
  },
};
</script>
