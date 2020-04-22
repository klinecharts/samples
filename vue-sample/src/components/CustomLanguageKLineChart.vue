<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">自定义语言</p>
    <div
      id="custom-language-k-line"
      class="k-line-chart"/>
    <div class="k-line-chart-setting-container">
      <button
        v-on:click="setLanguage('zh-CN')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': language === 'zh-CN'}">
        简体中文
      </button>
      <button
        v-on:click="setLanguage('zh-HK')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': language === 'zh-HK'}">
        繁體中文
      </button>
      <button
        v-on:click="setLanguage('en')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': language === 'en'}">
        English
      </button>
    </div>
  </div>
</template>

<script>
  import {dispose, init} from "klinecharts"
  import generatedKLineDataList from "../generatedKLineDataList"

  export default {
    name: 'CustomLanguageKLineChart',
    data: function () {
      return {
        language: 'zh-CN'
      }
    },
    mounted: function () {
      this.kLineChart = init('custom-language-k-line')
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      getLanguageOptions: function (language) {
        return {
          floatLayer: {
            prompt: {
              candleStick: {
                labels: language === 'zh-CN'
                  ? ['时间', '开', '收', '高', '低', '成交量']
                  : language === 'zh-HK'
                    ? ['時間', '開', '收', '高', '低', '成交量']
                    : ['T', 'O', 'C', 'H', 'L', 'V']
              }
            }
          }
        }
      },
      setLanguage: function (language) {
        this.language = language
        this.kLineChart.setStyleOptions(this.getLanguageOptions(language))
      }
    },
    destroyed: function () {
      dispose('custom-language-k-line')
    }
  }
</script>
