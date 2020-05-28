import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, KLineData } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-custom-candle-stick-label-k-kline-chart',
  templateUrl: './custom-candle-stick-label-k-line-chart.component.html',
})
export class CustomCandleStickLabelKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart = init('custom-candle-stick-label-k-line');
    kLineChart.setStyleOptions({
      floatLayer: {
        prompt: {
          candleStick: {
            labels: ['开', '收', '涨幅'],
            values: (kLineData: KLineData) => {
              return [
                {
                  value: kLineData.open.toFixed(2)
                }, {
                  value: kLineData.close.toFixed(2)
                }, {
                  value: `${((kLineData.close - kLineData.open) / kLineData.open * 100).toFixed(2)}%`,
                  color: kLineData.close - kLineData.open > 0 ? '#26A69A' : '#EF5350'
                }
              ];
            }
          }
        }
      }
    });
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('custom-candle-stick-label-k-line');
  }
}
