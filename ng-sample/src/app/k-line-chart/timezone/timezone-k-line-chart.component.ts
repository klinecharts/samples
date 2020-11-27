import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-timezone-k-kline-chart',
  templateUrl: './timezone-k-line-chart.component.html',
})
export class TimezoneKLineChartComponent implements AfterViewInit, OnDestroy {
  private kLineChart: Chart;

  timezones = [
    { key: 'Asia/Shanghai', text: '上海' },
    { key: 'Europe/Berlin', text: '柏林' },
    { key: 'America/Chicago', text: '芝加哥' }
  ];

  ngAfterViewInit(): void {
    this.kLineChart = init('timezone-k-line');
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  setTimezone(timezone: string) {
    this.kLineChart.setTimezone(timezone);
  }

  ngOnDestroy(): void {
    dispose('timezone-k-line');
  }
}
