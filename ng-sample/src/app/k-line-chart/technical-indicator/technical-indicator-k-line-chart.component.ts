import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { extension, init, dispose, Chart, TechnicalIndicatorTemplate, TechnicalIndicatorRenderParams } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

const fruits = [
  '🍏', '🍎', '🍐', '🍊', '🍋', '🍌',
  '🍉', '🍇', '🍓', '🍈', '🍒', '🍑',
  '🍍', '🥥', '🥝', '🥭', '🥑', '🍏'
];

// 自定义指标
const emojiTechnicalIndicator: TechnicalIndicatorTemplate = {
  name: 'EMOJI',
  plots: [
    { key: 'emoji' }
  ],
  calcTechnicalIndicator: (kLineDataList) => {
    const result = [];
    kLineDataList.forEach(kLineData => {
      result.push({ emoji: kLineData.close, text: fruits[Math.floor(Math.random() * 17)] });
    });
    return result;
  },
  render: (params: TechnicalIndicatorRenderParams) => {
    const { ctx, dataSource, viewport, xAxis, yAxis } = params
    ctx.font = `${viewport.barSpace}px Helvetica Neue`;
    ctx.textAlign = 'center';
    for (let i = dataSource.from; i < dataSource.to; i++) {
      const data = dataSource.technicalIndicatorDataList[i];
      const x = xAxis.convertToPixel(i);
      const y = yAxis.convertToPixel(data.emoji);
      ctx.fillText(data.text, x, y);
    }
  }
};

extension.addTechnicalIndicatorTemplate(emojiTechnicalIndicator);

@Component({
  selector: 'app-technical-indicator-k-line-chart',
  templateUrl: './technical-indicator-k-line-chart.component.html',
})
export class TechnicalIndicatorKLineChartComponent implements AfterViewInit, OnDestroy {
  mainTechnicalIndicatorTypes = ['MA', 'EMA', 'SAR'];
  subTechnicalIndicatorTypes = ['VOL', 'MACD', 'KDJ'];

  private kLineChart: Chart;

  private paneId: string;

  ngAfterViewInit(): void {
    this.kLineChart = init('technical-indicator-k-line');
    // this.kLineChart.addTechnicalIndicatorTemplate(emojiTechnicalIndicator);
    this.paneId = this.kLineChart.createTechnicalIndicator('VOL', false);
    this.kLineChart.applyNewData(generatedKLineDataList());
    abstract class Circle {
      x: number = 100
      on () {
        this.in(this)
      }
      abstract in (c: Circle): void
    }

    class Circle1 extends Circle {
      in(c: Circle1): void {
      }
      y: number = 9
    }

    new Circle1().on()
  }

  setCandleTechnicalIndicator(type) {
    this.kLineChart.createTechnicalIndicator(type, false, { id: 'candle_pane' });
  }

  setSubTechnicalIndicator(type) {
    this.kLineChart.createTechnicalIndicator(type, false, { id: this.paneId });
  }

  ngOnDestroy(): void {
    dispose('technical-indicator-k-line');
  }
}
