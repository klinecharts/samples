import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, registerIndicator, Chart, Nullable } from 'klinecharts';

import generatedDataList from '../generatedDataList';

const fruits = [
  '🍏', '🍎', '🍐', '🍊', '🍋', '🍌',
  '🍉', '🍇', '🍓', '🍈', '🍒', '🍑',
  '🍍', '🥥', '🥝', '🥭', '🥑', '🍏'
];

registerIndicator({
  name: "EMOJI",
  figures: [{ key: "emoji" }],
  calc: (kLineDataList) => {
    return kLineDataList.map((kLineData) => ({
      emoji: kLineData.close,
      text: fruits[Math.floor(Math.random() * 17)],
    }));
  },
  draw: ({ ctx, barSpace, visibleRange, indicator, xAxis, yAxis }) => {
    const { from, to } = visibleRange;
    ctx.font = `${barSpace.gapBar}px Helvetica Neue`;
    ctx.textAlign = "center";
    const result = indicator.result;
    for (let i = from; i < to; i++) {
      const data = result[i];
      const x = xAxis.convertToPixel(i);
      const y = yAxis.convertToPixel(data.emoji);
      ctx.fillText(data.text, x, y);
    }
    return false;
  },
});

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
})
export class IndicatorComponent implements AfterViewInit, OnDestroy {
  mainIndicators = ['MA', 'EMA', 'SAR'];
  subIndicators = ['VOL', 'MACD', 'KDJ'];

  private chart: Nullable<Chart> = null;

  private paneId: string = '';

  ngAfterViewInit(): void {
    this.chart = init('indicator-k-line');
    this.paneId = this.chart?.createIndicator('VOL') ?? '';
    this.chart?.applyNewData(generatedDataList());
  }

  setMainIndicator(name: string) {
    this.chart?.createIndicator(name, false, { id: 'candle_pane' });
  }

  setSubIndicator(name: string) {
    this.chart?.createIndicator(name, false, { id: this.paneId });
  }

  ngOnDestroy(): void {
    dispose('indicator-k-line');
  }
}
