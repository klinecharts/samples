import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart, Nullable } from 'klinecharts';

import generatedDataList from '../generatedDataList';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
})
export class TimezoneComponent implements AfterViewInit, OnDestroy {
  private chart: Nullable<Chart> = null;

  timezones = [
    { key: 'Asia/Shanghai', text: '上海' },
    { key: 'Europe/Berlin', text: '柏林' },
    { key: 'America/Chicago', text: '芝加哥' }
  ];

  ngAfterViewInit(): void {
    this.chart = init('timezone-k-line');
    this.chart?.applyNewData(generatedDataList());
  }

  setTimezone(timezone: string) {
    this.chart?.setTimezone(timezone);
  }

  ngOnDestroy(): void {
    dispose('timezone-k-line');
  }
}
