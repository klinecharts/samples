import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-float-prompt-k-kline-chart',
  templateUrl: './float-prompt-k-line-chart.component.html',
})
export class FloatPromptKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('float-prompt-k-line');
    kLineChart.setStyleOptions({
      floatLayer: {
        prompt: {
          candleStick: {
            showType: 'rect'
          }
        }
      }
    });
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('float-prompt-k-line');
  }
}
