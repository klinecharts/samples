import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-percentage-y-axis-k-line-chart',
  templateUrl: './left-percentage-y-axis-k-line-chart.component.html',
})
export class PercentageYAxisKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('percentage-y-axis-k-line');
    kLineChart.setStyleOptions({
      yAxis: {
        type: 'percentage'
      }
    });
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('percentage-y-axis-k-line');
  }
}
