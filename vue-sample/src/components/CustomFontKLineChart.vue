<template>
  <div class="k-line-chart-container">
    <p class="k-line-chart-title">自定义字体字号</p>
    <div id="custom-font-k-line" class="k-line-chart"/>
    <div class="k-line-chart-setting-container">
      <button
        v-on:click="setFont(0, 12, 'Arial')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': fontType === 0}">
      Arial 12
      </button>
      <button
        v-on:click="setFont(1, 14, 'Arial')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': fontType === 1}">
      Arial 14
      </button>
      <button
        v-on:click="setFont(2, 14, 'Courier New')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': fontType === 2}">
      Courier New 12
      </button>
      <button
        v-on:click="setFont(3, 14, 'Times New Roman')"
        class="k-line-chart-setting-button"
        v-bind:class="{'k-line-chart-setting-button-selected': fontType === 3}">
      Times New Roman 14
      </button>
    </div>
  </div>
</template>

<script>
  import {dispose, init} from "klinecharts"
  import generatedKLineDataList from "../generatedKLineDataList"

  export default {
    name: 'CustomFontKLineChart',
    data: function () {
      return {
        fontType: 0
      }
    },
    mounted: function () {
      this.kLineChart = init('custom-font-k-line')
      this.kLineChart.applyNewData(generatedKLineDataList())
    },
    methods: {
      getFontOptions: function (fontSize, fontFamily) {
        return {
          candleStick: {
            priceMark: {
              high: {
                textSize: fontSize,
                textFamily: fontFamily
              },
              low: {
                textSize: fontSize,
                textFamily: fontFamily
              },
              last: {
                text: {
                  size: fontSize,
                  family: fontFamily
                }
              }
            }
          },
          xAxis: {
            tickText: {
              size: fontSize,
              family: fontFamily
            }
          },
          yAxis: {
            tickText: {
              size: fontSize,
              family: fontFamily
            }
          },
          floatLayer: {
            crossHair: {
              horizontal: {
                text: {
                  size: fontSize,
                  family: fontFamily
                }
              },
              vertical: {
                text: {
                  size: fontSize,
                  family: fontFamily
                }
              }
            },
            prompt: {
              candleStick: {
                text: {
                  size: fontSize,
                  family: fontFamily
                }
              },
              technicalIndicator: {
                text: {
                  size: fontSize,
                  family: fontFamily
                }
              }
            }
          }
        }
      },
      setFont: function (fontType, fontSize, fontFamily) {
        this.fontType = fontType
        this.kLineChart.setStyleOptions(this.getFontOptions(fontSize, fontFamily))
      }
    },
    destroyed: () => {
      dispose('custom-font-k-line')
    }
  }
</script>
