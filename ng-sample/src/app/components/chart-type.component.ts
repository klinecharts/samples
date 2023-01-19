import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart, Nullable, CandleType } from 'klinecharts';

import generatedDataList from '../generatedDataList';

@Component({
  selector: 'app-chart-type',
  templateUrl: './chart-type.component.html',
})
export class ChartTypeComponent implements AfterViewInit, OnDestroy {
  chartTypes = [
    { key: 'candle_solid', text: '蜡烛实心' },
    { key: 'candle_stroke', text: '蜡烛空心' },
    { key: 'candle_up_stroke', text: '蜡烛涨空心' },
    { key: 'candle_down_stroke', text: '蜡烛跌空心' },
    { key: 'ohlc', text: 'OHLC' },
    { key: 'area', text: '面积图' }
  ];

  private chart: Nullable<Chart> = null;

  ngAfterViewInit(): void {
    this.chart = init('chart-type-k-line');
    this.chart?.applyNewData(generatedDataList());
  }

  setChartType(type: string) {
    this.chart?.setStyles({
      candle: {
        type: type as CandleType
      }
    });
  }

  ngOnDestroy(): void {
    dispose('chart-type-k-line');
  }
}
