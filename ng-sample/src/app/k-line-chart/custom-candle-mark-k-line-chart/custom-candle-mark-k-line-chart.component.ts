import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart, CoordinatePoint, AnnotationDrawParams } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-custom-candle-mark-k-kline-chart',
  templateUrl: './custom-candle-mark-k-line-chart.component.html',
})
export class CustomCandleMarkKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('custom-candle-mark-k-line');
    const kLineDataList = generatedKLineDataList();
    kLineChart.applyNewData(kLineDataList);
    kLineChart.createAnnotation([
      {
        point: { timestamp: kLineDataList[kLineDataList.length - 10].timestamp },
        drawExtend: (params: AnnotationDrawParams) => {
          const { ctx, coordinate } = params;
          this.annotationDrawExtend(ctx, coordinate, '这是一个固定显示标记');
        }
      }, {
        point: { timestamp: kLineDataList[kLineDataList.length - 20].timestamp },
        styles: {
          symbol: {
            type: 'circle'
          }
        }
      }, {
        point: { timestamp: kLineDataList[kLineDataList.length - 22].timestamp },
        styles: {
          symbol: {
            type: 'rect'
          }
        }
      }, {
        point: { timestamp: kLineDataList[kLineDataList.length - 40].timestamp },
        drawExtend: (params: AnnotationDrawParams) => {
          const { ctx, coordinate, isActive } = params;
          if (isActive) {
            this.annotationDrawExtend(ctx, coordinate, '这是一个鼠标移入显示标记');
          }
        }
      }, {
        point: { timestamp: kLineDataList[kLineDataList.length - 46].timestamp },
        styles: {
          symbol: {
            type: 'triangle'
          }
        }
      }, {
        point: {
          timestamp: kLineDataList[kLineDataList.length - 45].timestamp, price: kLineDataList[kLineDataList.length - 45].high
        },
        styles: {
          symbol: {
            position: 'point',
            offset: [0, -30]
          }
        }
      }
    ]);
  }

  private annotationDrawExtend(ctx: CanvasRenderingContext2D, coordinate: CoordinatePoint, text: string): void {
    ctx.font = '12px Roboto';
    ctx.fillStyle = '#2d6187';
    ctx.strokeStyle = '#2d6187';

    const textWidth = ctx.measureText(text).width;
    const startX = coordinate.x;
    let startY = coordinate.y + 6;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    startY += 5;
    ctx.lineTo(startX - 4, startY);
    ctx.lineTo(startX + 4, startY);
    ctx.closePath();
    ctx.fill();

    const rectX = startX - textWidth / 2 - 6;
    const rectY = startY;
    const rectWidth = textWidth + 12;
    const rectHeight = 28;
    const r = 2;
    ctx.beginPath();
    ctx.moveTo(rectX + r, rectY);
    ctx.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + rectHeight, r);
    ctx.arcTo(rectX + rectWidth, rectY + rectHeight, rectX, rectY + rectHeight, r);
    ctx.arcTo(rectX, rectY + rectHeight, rectX, rectY, r);
    ctx.arcTo(rectX, rectY, rectX + rectWidth, rectY, r);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#fff';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(text, startX, startY + 14);
  }

  ngOnDestroy(): void {
    dispose('custom-candle-mark-k-line');
  }
}
