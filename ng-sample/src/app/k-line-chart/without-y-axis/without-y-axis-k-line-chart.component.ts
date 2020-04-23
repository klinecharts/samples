import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-without-y-axis-k-kline-chart',
  templateUrl: './without-y-axis-k-line-chart.component.html',
})
export class WithoutYAxisKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('without-y-axis-k-kline');
    kLineChart.setStyleOptions({
      yAxis: {
        display: false
      }
    });
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('without-y-axis-k-kline');
  }
}
