import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-follow-crosshair-prompt-k-kline-chart',
  templateUrl: './follow-crosshair-prompt-k-line-chart.component.html',
})
export class FollowCrosshairPromptKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('follow-crosshair-prompt-k-line');
    kLineChart.setStyleOptions({
      floatLayer: {
        prompt: {
          displayRule: 'follow_cross'
        }
      }
    });
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('follow-crosshair-prompt-k-line');
  }
}
