import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-real-time-k-kline-chart',
  templateUrl: './real-time-k-line-chart.component.html',
})
export class RealTimeKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('real-time-k-line');
    kLineChart.setCandleStickChartType('real_time');
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('real-time-k-line');
  }
}
