import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {init, dispose, Chart, GraphicMarkType} from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-draw-graphic-mark-k-line-chart',
  templateUrl: './draw-graphic-mark-k-line-chart.component.html',
})
export class DrawGraphicMarkKLineChartComponent implements AfterViewInit, OnDestroy {
  private kLineChart: Chart;

  drawLines = [
    { key: 'priceLine', text: '价格线' },
    { key: 'priceChannelLine', text: '价格通道线' },
    { key: 'parallelStraightLine', text: '平行直线' },
    { key: 'fibonacciLine', text: '斐波那契回调' }
  ];

  ngAfterViewInit(): void {
    this.kLineChart = init('draw-graphic-mark-k-line');
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  setGraphicMarkType(graphicMarkType: GraphicMarkType) {
    this.kLineChart.addGraphicMark(graphicMarkType);
  }

  removeAllGraphicMark() {
    this.kLineChart.removeAllGraphicMark();
  }

  ngOnDestroy(): void {
    dispose('draw-graphic-mark-k-line');
  }
}
