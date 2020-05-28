import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose } from 'klinecharts';
import { priceAndVolumeTrend } from 'klinecharts-technical-indicator';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-custom-technical-indicator-k-kline-chart',
  templateUrl: './custom-technical-indicator-k-line-chart.component.html',
})
export class CustomTechnicalIndicatorKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart = init('custom-technical-indicator-k-line');
    kLineChart.addCustomTechnicalIndicator(priceAndVolumeTrend);
    kLineChart.createTechnicalIndicator('PVT', 50);
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('custom-technical-indicator-k-line');
  }
}
