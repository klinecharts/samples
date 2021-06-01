import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

const textColorDark = '#929AA5';
const gridColorDark = '#292929';
const axisLineColorDark = '#333333';
const crossTextBackgroundColorDark = '#373a40';

const textColorLight = '#76808F';
const gridColorLight = '#ededed';
const axisLineColorLight = '#DDDDDD';
const crossTextBackgroundColorLight = '#686d76';

@Component({
  selector: 'app-custom-theme-k-kline-chart',
  templateUrl: './custom-theme-k-line-chart.component.html',
})
export class CustomThemeKLineChartComponent implements AfterViewInit, OnDestroy {
  theme = 'light';
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
    const crossLineColor = theme === 'dark' ? axisLineColorDark : axisLineColorLight;
    const crossTextBackgroundColor = theme === 'dark' ? crossTextBackgroundColorDark : crossTextBackgroundColorLight;
    this.kLineChart.setStyleOptions({
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
    });
  }

  ngOnDestroy(): void {
    dispose('custom-theme-k-line');
  }
}
