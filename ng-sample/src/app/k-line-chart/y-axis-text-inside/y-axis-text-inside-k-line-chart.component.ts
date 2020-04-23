import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-y-axis-text-inside-k-line-chart',
  templateUrl: './y-axis-text-inside-k-line-chart.component.html',
})
export class YAxisTextInsideKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('y-axis-text-inside-k-line');
    kLineChart.setStyleOptions({
      yAxis: {
        tickText: {
          position: 'inside'
        }
      }
    });
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('y-axis-text-inside-k-line');
  }
}
