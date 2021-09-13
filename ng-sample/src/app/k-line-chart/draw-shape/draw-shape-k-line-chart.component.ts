import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {
  init, dispose,
  Chart, ShapeTemplate,
  ShapeDataSourceItem,
  ShapeCheckOnParams, ShapeCreateDataSourceParams
} from 'klinecharts';

import { checkCoordinateOnSegment } from 'klinecharts/lib/shape/shapeHelper';

import generatedKLineDataList from '../../generatedKLineDataList';

const rect: ShapeTemplate = {
  name: 'rect',
  totalStep: 3,
  checkEventCoordinateOnShape: (params: ShapeCheckOnParams) => {
    return checkCoordinateOnSegment(params.dataSource[0], params.dataSource[1], params.eventCoordinate);
  },
  createShapeDataSource: (params: ShapeCreateDataSourceParams) => {
    const coordinates = params.coordinates
    if (coordinates.length === 2) {
      return [
        {
          type: 'line',
          isDraw: false,
          isCheck: true,
          dataSource: [
            [{ ...coordinates[0] }, { x: coordinates[1].x, y: coordinates[0].y }],
            [{ x: coordinates[1].x, y: coordinates[0].y }, { ...coordinates[1] }],
            [{ ...coordinates[1] }, { x: coordinates[0].x, y: coordinates[1].y }],
            [{ x: coordinates[0].x, y: coordinates[1].y }, { ...coordinates[0] }],
          ]
        },
        {
          type: 'polygon',
          isDraw: true,
          isCheck: false,
          styles: { style: 'fill' },
          dataSource: [[
            { ...coordinates[0] },
            { x: coordinates[1].x, y: coordinates[0].y },
            { ...coordinates[1] },
            { x: coordinates[0].x, y: coordinates[1].y }
          ]]
        },
        {
          type: 'polygon',
          isDraw: true,
          isCheck: false,
          dataSource: [[
            { ...coordinates[0] },
            { x: coordinates[1].x, y: coordinates[0].y },
            { ...coordinates[1] },
            { x: coordinates[0].x, y: coordinates[1].y }
          ]]
        }
      ];
    }
    return [];
  }
};


const circle: ShapeTemplate = {
  name: 'circle',
  totalStep: 3,
  checkEventCoordinateOnShape: (params: ShapeCheckOnParams) => {
    const dataSource: ShapeDataSourceItem = params.dataSource as ShapeDataSourceItem;
    const xDis = Math.abs(dataSource.x - params.eventCoordinate.x);
    const yDis = Math.abs(dataSource.y - params.eventCoordinate.y);
    const r = Math.sqrt(xDis * xDis + yDis * yDis);
    return Math.abs(r - dataSource.radius) < 3;
  },
  createShapeDataSource(params: ShapeCreateDataSourceParams) {
    const coordinates = params.coordinates
    if (coordinates.length === 2) {
      const xDis = Math.abs(coordinates[0].x - coordinates[1].x);
      const yDis = Math.abs(coordinates[0].y - coordinates[1].y);
      const radius = Math.sqrt(xDis * xDis + yDis * yDis);
      return [
        {
          type: 'arc',
          isDraw: true,
          isCheck: false,
          styles: { style: 'fill' },
          dataSource: [
            { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 },
          ]
        },
        {
          type: 'arc',
          isDraw: true,
          isCheck: true,
          dataSource: [
            { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 },
          ]
        }
      ];
    }
    return [];
  }
};

@Component({
  selector: 'app-draw-shape-k-line-chart',
  templateUrl: './draw-shape-k-line-chart.component.html',
})
export class DrawShapeKLineChartComponent implements AfterViewInit, OnDestroy {
  private kLineChart: Chart;

  shapes = [
    { key: 'priceLine', text: '价格线' },
    { key: 'priceChannelLine', text: '价格通道线' },
    { key: 'parallelStraightLine', text: '平行直线' },
    { key: 'fibonacciLine', text: '斐波那契回调' },
    { key: 'rect', text: '自定义矩形' },
    { key: 'circle', text: '自定义圆' }
  ];

  ngAfterViewInit(): void {
    this.kLineChart = init('draw-shape-k-line');
    this.kLineChart.addShapeTemplate([rect, circle]);
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  setShapeType(shapeName: string) {
    this.kLineChart.createShape(shapeName);
  }

  removeAllShape() {
    this.kLineChart.removeShape();
  }

  ngOnDestroy(): void {
    dispose('draw-shape-k-line');
  }
}
