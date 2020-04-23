import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-basic-k-kline-chart',
  templateUrl: './basic-k-line-chart.component.html',
})
export class BasicKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('basic-k-line');
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('basic-k-line');
  }
}
