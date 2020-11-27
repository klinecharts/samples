import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-load-more-k-kline-chart',
  templateUrl: './load-more-k-line-chart.component.html',
})
export class LoadMoreKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('load-more-k-line');
    kLineChart.loadMore(timestamp => {
      setTimeout(() => {
        const firstData = kLineChart.getDataList()[0];
        kLineChart.applyMoreData(generatedKLineDataList(timestamp, firstData.close, 100), true);
      }, 2000);
      return {};
    });
    kLineChart.applyNewData(generatedKLineDataList(Date.now(), 5000, 200), true);
  }

  ngOnDestroy(): void {
    dispose('load-more-k-line');
  }
}
