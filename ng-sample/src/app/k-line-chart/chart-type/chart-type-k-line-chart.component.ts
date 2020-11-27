import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-chart-type-k-kline-chart',
  templateUrl: './chart-type-k-line-chart.component.html',
})
export class ChartTypeKLineChartComponent implements AfterViewInit, OnDestroy {
  chartTypes = [
    { key: 'candle_solid', text: '蜡烛实心' },
    { key: 'candle_stroke', text: '蜡烛空心' },
    { key: 'candle_up_stroke', text: '蜡烛涨空心' },
    { key: 'candle_down_stroke', text: '蜡烛跌空心' },
    { key: 'ohlc', text: 'OHLC' },
    { key: 'area', text: '面积图' }
  ];

  private kLineChart: Chart;

  ngAfterViewInit(): void {
    this.kLineChart = init('chart-type-k-line');
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  setChartType(type) {
    this.kLineChart.setStyleOptions({
      candle: {
        type
      }
    });
  }

  ngOnDestroy(): void {
    dispose('chart-type-k-line');
  }
}
