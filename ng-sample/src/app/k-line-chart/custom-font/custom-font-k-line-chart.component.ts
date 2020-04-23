import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-custom-font-k-kline-chart',
  templateUrl: './custom-font-k-line-chart.component.html',
})
export class CustomFontKLineChartComponent implements AfterViewInit, OnDestroy {
  fontType = 0;
  private kLineChart: Chart;
  ngAfterViewInit(): void {
    this.kLineChart = init('custom-font-k-line');
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  setFont(fontType: number, fontFamily: string, fontSize: number) {
    this.fontType = fontType;
    this.kLineChart.setStyleOptions({
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
    });
  }

  ngOnDestroy(): void {
    dispose('custom-font-k-line');
  }
}
