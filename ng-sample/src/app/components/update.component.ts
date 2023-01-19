import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart, KLineData, Nullable } from 'klinecharts';

import generatedDataList from '../generatedDataList';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
})
export class UpdateComponent implements AfterViewInit, OnDestroy {
  private chart: Nullable<Chart> = null;
  ngAfterViewInit(): void {
    this.chart = init('update-k-line');
    this.chart?.applyNewData(generatedDataList());
    this.updateData();
  }

  updateData() {
    setTimeout (() => {
      const dataList: KLineData[] = this.chart?.getDataList() ?? [];
      const lastData = dataList[dataList.length - 1];
      const newData = generatedDataList(lastData.timestamp, lastData.close, 1)[0];
      newData.timestamp += 60 * 1000;
      this.chart?.updateData(newData);
      this.updateData();
    }, 1000);
  }

  ngOnDestroy(): void {
    dispose('update-k-line');
  }
}
