import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-left-y-axis-k-kline-chart',
  templateUrl: './left-y-axis-k-line-chart.component.html',
})
export class LeftYAxisKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('left-y-axis-k-line');
    kLineChart.setStyleOptions({
      yAxis: {
        position: 'left'
      }
    });
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('left-y-axis-k-line');
  }
}
