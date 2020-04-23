import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-timezone-k-kline-chart',
  templateUrl: './timezone-k-line-chart.component.html',
})
export class TimezoneKLineChartComponent implements AfterViewInit, OnDestroy {
  timezone = 'Asia/Shanghai';
  private kLineChart: Chart;
  ngAfterViewInit(): void {
    this.kLineChart = init('timezone-k-line');
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  setTimezone(timezone: string) {
    this.timezone = timezone;
    this.kLineChart.setTimezone(timezone);
  }

  ngOnDestroy(): void {
    dispose('timezone-k-line');
  }
}
