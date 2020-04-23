import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-technical-indicator-last-data-prompt-k-line-chart',
  templateUrl: './technical-indicator-last-data-prompt-k-line-chart.component.html',
})
export class TechnicalIndicatorLastDataPromptKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('technical-indicator-last-data-prompt-k-line');
    kLineChart.setStyleOptions({
      technicalIndicator: {
        lastValueMark: {
          display: true
        }
      }
    });
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('technical-indicator-last-data-prompt-k-line');
  }
}
