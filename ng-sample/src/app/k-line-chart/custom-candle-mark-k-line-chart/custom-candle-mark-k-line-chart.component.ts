import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-custom-candle-mark-k-kline-chart',
  templateUrl: './custom-candle-mark-k-line-chart.component.html',
})
export class CustomCandleMarkKLineChartComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    const kLineChart: Chart = init('custom-candle-mark-k-line');
    kLineChart.setOffsetRightSpace(200);
    kLineChart.subscribeAction('drawCandle', (data) => {
      const { ctx, dataIndex, kLineData, coordinate, isCandle } = data;
      const dataSize = kLineChart.getDataList().length;
      if (isCandle && dataIndex === dataSize - 1) {
        ctx.font = '12px';
        const text = `标记，最新价：${kLineData.close.toFixed(2)}`;
        const textWidth = ctx.measureText(text).width;

        const startX = coordinate.x + 10;
        const startY = coordinate.close;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + 10, startY - 10);
        ctx.lineTo(startX + 10 + textWidth + 10, startY - 10);
        ctx.lineTo(startX + 10 + textWidth + 10, startY + 10);
        ctx.lineTo(startX + 10, startY + 10);
        ctx.closePath();
        ctx.fill();
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#fff';
        ctx.fillText(text, startX + 12, startY);
      }
    });
    kLineChart.applyNewData(generatedKLineDataList());
  }

  ngOnDestroy(): void {
    dispose('custom-candle-mark-k-line');
  }
}
