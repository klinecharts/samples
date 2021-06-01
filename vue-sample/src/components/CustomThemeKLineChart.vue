<template>
  <Layout title="自定义主题">
    <div
      id="custom-theme-k-line"
      class="k-line-chart"
      v-bind:style="{backgroundColor: theme === 'dark' ? '#1f2126' : ''}"/>
    <div
      class="k-line-chart-menu-container">
      <button
        v-on:click="setTheme('dark')">
        深色
      </button>
      <button
        v-on:click="setTheme('light')">
        浅色
      </button>
    </div>
  </Layout>
</template>

<script>
  import {dispose, init} from "klinecharts"
  import generatedKLineDataList from "../generatedKLineDataList"
  import Layout from "@/Layout"

  const textColorDark = '#929AA5'
  const gridColorDark = '#292929'
  const axisLineColorDark = '#333333'
  const crossTextBackgroundColorDark = '#373a40'

  const textColorLight = '#76808F'
  const gridColorLight = '#ededed'
  const axisLineColorLight = '#DDDDDD'
  const crossTextBackgroundColorLight = '#686d76'

  function getThemeOptions (theme) {
    const textColor = theme === 'dark' ? textColorDark : textColorLight
    const gridColor = theme === 'dark' ? gridColorDark : gridColorLight
    const axisLineColor = theme === 'dark' ? axisLineColorDark : axisLineColorLight
    const crossLineColor = theme === 'dark' ? axisLineColorDark : axisLineColorLight
    const crossTextBackgroundColor = theme === 'dark' ? crossTextBackgroundColorDark : crossTextBackgroundColorLight
    return {
      grid: {
        horizontal: {
          color: gridColor
        },
        vertical: {
          color: gridColor
        }
      },
      candle: {
        priceMark: {
          high: {
            color: textColor
          },
          low: {
            color: textColor
          }
        },
        tooltip: {
          text: {
            color: textColor
          }
        }
      },
      technicalIndicator: {
        tooltip: {
          text: {
            color: textColor
          }
        }
      },
      xAxis: {
        axisLine: {
          color: axisLineColor
        },
        tickLine: {
          color: axisLineColor
        },
        tickText: {
          color: textColor
        }
      },
      yAxis: {
        axisLine: {
          color: axisLineColor
        },
        tickLine: {
          color: axisLineColor
        },
        tickText: {
          color: textColor
        }
      },
      separator: {
        color: axisLineColor
      },
      crosshair: {
        horizontal: {
          line: {
            color: crossLineColor
          },
          text: {
            backgroundColor: crossTextBackgroundColor
          }
        },
        vertical: {
          line: {
            color: crossLineColor
          },
          text: {
            backgroundColor: crossTextBackgroundColor
          }
        }
      }
    }
  }

  export default {
    name: 'CustomThemeKLineChart',
    components: {Layout},
    data: function () {
      return {
        theme: 'light'
      }
    },
    mounted: function () {
      this.kLineChart = init('custom-theme-k-line')
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      setTheme: function (theme) {
        this.theme = theme
        this.kLineChart.setStyleOptions(getThemeOptions(theme))
      }
    },
    destroyed: function () {
      dispose('custom-theme-k-line')
    }
  }
</script>
