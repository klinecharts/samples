import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {
  init, dispose,
  Chart, GraphicMark, GraphicMarkDataSourceDrawType,
  GraphicMarkDataSourceItem, CoordinatePoint, TimestampPricePoint
} from 'klinecharts';

import { checkPointOnSegment } from 'klinecharts/lib/mark/graphicHelper';

import generatedKLineDataList from '../../generatedKLineDataList';

const rect: GraphicMark = {
  name: 'rect',
  totalStep: 3,
  checkMousePointOn: (
    key: string,
    type: GraphicMarkDataSourceDrawType,
    points: GraphicMarkDataSourceItem[],
    mousePoint: CoordinatePoint
  ) => {
    return checkPointOnSegment(points[0], points[1], mousePoint);
  },
  createGraphicDataSource: (
    step: number,
    tpPoint: TimestampPricePoint[],
    xyPoints: CoordinatePoint[]
  ) => {
    if (xyPoints.length === 2) {
      return [
        {
          type: 'line',
          isDraw: false,
          isCheck: true,
          dataSource: [
            [{ ...xyPoints[0] }, { x: xyPoints[1].x, y: xyPoints[0].y }],
            [{ x: xyPoints[1].x, y: xyPoints[0].y }, { ...xyPoints[1] }],
            [{ ...xyPoints[1] }, { x: xyPoints[0].x, y: xyPoints[1].y }],
            [{ x: xyPoints[0].x, y: xyPoints[1].y }, { ...xyPoints[0] }],
          ]
        },
        {
          type: 'polygon',
          isDraw: true,
          isCheck: false,
          style: 'fill',
          dataSource: [[
            { ...xyPoints[0] },
            { x: xyPoints[1].x, y: xyPoints[0].y },
            { ...xyPoints[1] },
            { x: xyPoints[0].x, y: xyPoints[1].y }
          ]]
        },
        {
          type: 'polygon',
          isDraw: true,
          isCheck: false,
          dataSource: [[
            { ...xyPoints[0] },
            { x: xyPoints[1].x, y: xyPoints[0].y },
            { ...xyPoints[1] },
            { x: xyPoints[0].x, y: xyPoints[1].y }
          ]]
        }
      ];
    }
    return [];
  }
};


const circle: GraphicMark = {
  name: 'circle',
  totalStep: 3,
  checkMousePointOn: (
    key: string,
    type: GraphicMarkDataSourceDrawType,
    points: GraphicMarkDataSourceItem,
    mousePoint: CoordinatePoint
  ) => {
    const xDis = Math.abs(points.x - mousePoint.x);
    const yDis = Math.abs(points.y - mousePoint.y);
    const r = Math.sqrt(xDis * xDis + yDis * yDis);
    return Math.abs(r - points.radius) < 3;
  },
  createGraphicDataSource(
    step: number,
    tpPoint: TimestampPricePoint[],
    xyPoints: CoordinatePoint[]
  ) {
    if (xyPoints.length === 2) {
      const xDis = Math.abs(xyPoints[0].x - xyPoints[1].x);
      const yDis = Math.abs(xyPoints[0].y - xyPoints[1].y);
      const radius = Math.sqrt(xDis * xDis + yDis * yDis);
      return [
        {
          type: 'arc',
          isDraw: true,
          isCheck: false,
          style: 'fill',
          dataSource: [
            { ...xyPoints[0], radius, startAngle: 0, endAngle: Math.PI * 2 },
          ]
        },
        {
          type: 'arc',
          isDraw: true,
          isCheck: true,
          dataSource: [
            { ...xyPoints[0], radius, startAngle: 0, endAngle: Math.PI * 2 },
          ]
        }
      ];
    }
    return [];
  }
};

@Component({
  selector: 'app-draw-graphic-mark-k-line-chart',
  templateUrl: './draw-graphic-mark-k-line-chart.component.html',
})
export class DrawGraphicMarkKLineChartComponent implements AfterViewInit, OnDestroy {
  private kLineChart: Chart;

  drawGraphics = [
    { key: 'priceLine', text: '价格线' },
    { key: 'priceChannelLine', text: '价格通道线' },
    { key: 'parallelStraightLine', text: '平行直线' },
    { key: 'fibonacciLine', text: '斐波那契回调' },
    { key: 'rect', text: '自定义矩形' },
    { key: 'circle', text: '自定义圆' }
  ];

  ngAfterViewInit(): void {
    this.kLineChart = init('draw-graphic-mark-k-line');
    this.kLineChart.addCustomGraphicMark(rect);
    this.kLineChart.addCustomGraphicMark(circle);
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  setGraphicMarkType(graphicMarkType: string) {
    this.kLineChart.createGraphicMark(graphicMarkType);
  }

  removeAllGraphicMark() {
    this.kLineChart.removeGraphicMark();
  }

  ngOnDestroy(): void {
    dispose('draw-graphic-mark-k-line');
  }
}
