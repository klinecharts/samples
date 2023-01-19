import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart, Nullable, YAxisType } from 'klinecharts';

import generatedDataList from '../generatedDataList';

@Component({
  selector: 'app-y-axis',
  templateUrl: './y-axis.component.html',
})
export class YAxisComponent implements AfterViewInit, OnDestroy {
  private chart: Nullable<Chart> = null;
  ngAfterViewInit(): void {
    this.chart = init('y-axis-k-line');
    this.chart?.applyNewData(generatedDataList());
  }

  setType(type: string) {
    this.chart?.setStyles({
      yAxis: { type: type as YAxisType },
    });
  }

  ngOnDestroy(): void {
    dispose('y-axis-k-line');
  }
}
