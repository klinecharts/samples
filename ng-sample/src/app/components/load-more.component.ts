import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart, Nullable } from 'klinecharts';

import generatedDataList from '../generatedDataList';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
})
export class LoadMoreComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const chart: Nullable<Chart> = init('load-more-k-line');
    chart?.loadMore(timestamp => {
      setTimeout(() => {
        const firstData = chart.getDataList()[0];
        chart.applyMoreData(generatedDataList(timestamp as number, firstData.close, 100), true);
      }, 2000);
      return {};
    });
    chart?.applyNewData(generatedDataList(Date.now(), 5000, 200), true);
  }

  ngOnDestroy(): void {
    dispose('load-more-k-line');
  }
}
