import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {
  init, dispose, registerOverlay, Chart, Nullable
} from 'klinecharts';

import generatedDataList from '../generatedDataList';

registerOverlay({
  name: 'circle',
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  totalStep: 3,
  createPointFigures: function ({ coordinates }) {
    if (coordinates.length === 2) {
      const xDis = Math.abs(coordinates[0].x - coordinates[1].x);
      const yDis = Math.abs(coordinates[0].y - coordinates[1].y);
      const radius = Math.sqrt(xDis * xDis + yDis * yDis);
      return {
        key: 'circle',
        type: 'circle',
        attrs: {
          ...coordinates[0],
          r: radius
        },
        styles: {
          style: 'stroke_fill'
        }
      }
    }
    return []
  }
});

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
})
export class OverlayComponent implements AfterViewInit, OnDestroy {
  private chart: Nullable<Chart> = null;

  overlays = [
    { key: 'priceLine', text: '内置价格线' },
    { key: 'circle', text: '自定义圆' }
  ];

  ngAfterViewInit(): void {
    this.chart = init('overlay-k-line');
    this.chart?.applyNewData(generatedDataList());
  }

  setOverlayType(name: string) {
    this.chart?.createOverlay(name);
  }

  createAnnotation() {
    const dataList = this.chart?.getDataList() ?? [];
    const data = dataList[dataList.length - 20];
    this.chart?.createOverlay({
      name: "simpleAnnotation",
      extendData: "注解注解注解",
      points: [
        {
          timestamp: data.timestamp,
          value: data.high
        },
      ],
    });
  }

  createTag() {
    const dataList = this.chart?.getDataList() ?? [];
    const data = dataList[dataList.length - 10];
    this.chart?.createOverlay({
      name: "simpleTag",
      extendData: "标签标签",
      points: [{ value: data.high }],
    });
  }

  removeAllOverlay() {
    this.chart?.removeOverlay();
  }

  ngOnDestroy(): void {
    dispose('overlay-k-line');
  }
}
