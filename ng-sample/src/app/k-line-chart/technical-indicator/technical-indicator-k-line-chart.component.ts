import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-technical-indicator-k-line-chart',
  templateUrl: './technical-indicator-k-line-chart.component.html',
})
export class TechnicalIndicatorKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('technical-indicator-k-line');
    kLineChart.createTechnicalIndicator('VOL', 50);
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('technical-indicator-k-line');
  }
}
