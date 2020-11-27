import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {init, dispose, Chart, KLineData} from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-update-k-kline-chart',
  templateUrl: './update-k-line-chart.component.html',
})
export class UpdateKLineChartComponent implements AfterViewInit, OnDestroy {
  private kLineChart: Chart;
  ngAfterViewInit(): void {
    this.kLineChart = init('update-k-line');
    this.kLineChart.applyNewData(generatedKLineDataList());
    this.updateData();
  }

  updateData() {
    setTimeout (() => {
      const dataList: KLineData[] = this.kLineChart.getDataList();
      const lastData = dataList[dataList.length - 1];
      const newData = generatedKLineDataList(lastData.timestamp, lastData.close, 1)[0];
      newData.timestamp += 60 * 1000;
      this.kLineChart.updateData(newData);
      this.updateData();
    }, 1000);
  }

  ngOnDestroy(): void {
    dispose('update-k-line');
  }
}
