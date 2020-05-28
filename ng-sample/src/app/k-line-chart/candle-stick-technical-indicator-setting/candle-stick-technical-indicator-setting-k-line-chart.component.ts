import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-candle-stick-technical-indicator-setting-k-kline-chart',
  templateUrl: './candle-stick-technical-indicator-setting-k-line-chart.component.html',
})
export class CandleStickTechnicalIndicatorSettingKLineChartComponent implements AfterViewInit, OnDestroy {
  technicalIndicatorType = 'MA';
  private kLineChart: Chart;
  ngAfterViewInit(): void {
    this.kLineChart = init('candle-stick-technical-indicator-setting-k-line');
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  setTechnicalIndicatorType(technicalIndicatorType: string) {
    this.technicalIndicatorType = technicalIndicatorType;
    this.kLineChart.setCandleStickTechnicalIndicatorType(technicalIndicatorType);
  }

  ngOnDestroy(): void {
    dispose('candle-stick-technical-indicator-setting-k-line');
  }
}
