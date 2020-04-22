<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">自定义主题</p>
    <div
      id="custom-theme-k-line"
      class="k-line-chart"
      v-bind:style="{backgroundColor: theme === 'light' ? '#FFFFFF' : '#25272F'}"/>
    <div class="k-line-chart-setting-container">
      <button
        v-on:click="setTheme('dark')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': theme === 'dark'}">
        深色
      </button>
      <button
        v-on:click="setTheme('light')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': theme === 'light'}">
        浅色
      </button>
    </div>
  </div>
</template>

<script>
  import {dispose, init} from "klinecharts"
  import generatedKLineDataList from "../generatedKLineDataList"

  export default {
    name: 'CustomThemeKLineChart',
    data: function () {
      return {
        theme: 'dark'
      }
    },
    mounted: function () {
      this.kLineChart = init('custom-theme-k-line')
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      getThemeOptions: function (theme) {
        const textColorDark = '#D9D9D9'
        const gridColorDark = '#393939'
        const axisLineColorDark = '#888888'

        const textColorLight = '#7F7F7F'
        const gridColorLight = '#EEEEEE'
        const axisLineColorLight = '#999999'
        const textColor = theme === 'dark' ? textColorDark : textColorLight
        const gridColor = theme === 'dark' ? gridColorDark : gridColorLight
        const axisLineColor = theme === 'dark' ? axisLineColorDark : axisLineColorLight
        return {
          grid: {
            horizontal: {
              display: true,
              color: gridColor
            }
          },
          candleStick: {
            priceMark: {
              high: {
                color: textColor
              },
              low: {
                color: textColor
              }
            }
          },
          technicalIndicator: {
            line: {
              colors: [textColor, '#F5A623', '#F601FF', '#1587DD', '#1e88e5']
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
          floatLayer: {
            crossHair: {
              horizontal: {
                line: {
                  color: axisLineColor
                }
              },
              vertical: {
                line: {
                  color: axisLineColor
                }
              }
            },
            prompt: {
              candleStick: {
                text: {
                  color: textColor
                }
              },
              technicalIndicator: {
                text: {
                  color: textColor
                }
              }
            }
          }
        }
      },
      setTheme: function (theme) {
        this.theme = theme
        this.kLineChart.setStyleOptions(this.getThemeOptions(theme))
      }
    },
    destroyed: function () {
      dispose('custom-theme-k-line')
    }
  }
</script>
