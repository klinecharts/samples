<template>
  <Layout title="多语言">
    <div
      id="language-k-line"
      class="k-line-chart"/>
    <div class="k-line-chart-menu-container">
      <button
        v-on:click="setLanguage('zh-CN')">
        简体中文
      </button>
      <button
        v-on:click="setLanguage('zh-HK')">
        繁體中文
      </button>
      <button
        v-on:click="setLanguage('en-US')">
        English
      </button>
    </div>
  </Layout>
</template>

<script>
  import {dispose, init} from "klinecharts"
  import generatedKLineDataList from "../generatedKLineDataList"
  import Layout from "@/Layout"

  function getLanguageOptions (language) {
    return {
      candle: {
        tooltip: {
          labels: language === 'zh-CN'
            ? ['时间', '开', '收', '高', '低', '成交量']
            : language === 'zh-HK'
              ? ['時間', '開', '收', '高', '低', '成交量']
              : ['T', 'O', 'C', 'H', 'L', 'V']
        }
      }
    }
  }

  export default {
    name: 'LanguageKLineChart',
    components: {Layout},
    mounted: function () {
      this.kLineChart = init('language-k-line')
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      setLanguage: function (language) {
        this.kLineChart.setStyleOptions(getLanguageOptions(language))
      }
    },
    destroyed: function () {
      dispose('language-k-line')
    }
  }
</script>
