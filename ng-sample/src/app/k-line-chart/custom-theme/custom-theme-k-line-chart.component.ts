import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

const textColorDark = '#D9D9D9';
const gridColorDark = '#393939';
const axisLineColorDark = '#888888';

const textColorLight = '#7F7F7F';
const gridColorLight = '#EEEEEE';
const axisLineColorLight = '#999999';

@Component({
  selector: 'app-custom-theme-k-kline-chart',
  templateUrl: './custom-theme-k-line-chart.component.html',
})
export class CustomThemeKLineChartComponent implements AfterViewInit, OnDestroy {
  theme = 'dark';
  private kLineChart: Chart;
  ngAfterViewInit(): void {
    this.kLineChart = init('custom-theme-k-line');
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  setTheme(theme: string) {
    this.theme = theme;
    const textColor = theme === 'dark' ? textColorDark : textColorLight;
    const gridColor = theme === 'dark' ? gridColorDark : gridColorLight;
    const axisLineColor = theme === 'dark' ? axisLineColorDark : axisLineColorLight;
    this.kLineChart.setStyleOptions({
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
    });
  }

  ngOnDestroy(): void {
    dispose('custom-theme-k-line');
  }
}
