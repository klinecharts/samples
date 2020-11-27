import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart, TechnicalIndicatorInfo } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

const fruits = [
  '🍏', '🍎', '🍐', '🍊', '🍋', '🍌',
  '🍉', '🍇', '🍓', '🍈', '🍒', '🍑',
  '🍍', '🥥', '🥝', '🥭', '🥑', '🍏'
];

// 自定义指标
const emojiTechnicalIndicator: TechnicalIndicatorInfo = {
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
  render: (
    ctx,
    { from, to, technicalIndicatorDataList },
    { barSpace },
    options, xAxis, yAxis
  ) => {
    ctx.font = `${barSpace}px Helvetica Neue`;
    ctx.textAlign = 'center';
    for (let i = from; i < to; i++) {
      const data = technicalIndicatorDataList[i];
      const x = xAxis.convertToPixel(i);
      const y = yAxis.convertToPixel(data.emoji);
      ctx.fillText(data.text, x, y);
    }
  }
};

@Component({
  selector: 'app-technical-indicator-k-line-chart',
  templateUrl: './technical-indicator-k-line-chart.component.html',
})
export class TechnicalIndicatorKLineChartComponent implements AfterViewInit, OnDestroy {
  mainTechnicalIndicatorTypes = ['MA', 'EMA', 'SAR'];
  subTechnicalIndicatorTypes = ['VOL', 'MACD', 'KDJ'];

  private kLineChart: Chart;

  private pangTag: string;

  ngAfterViewInit(): void {
    this.kLineChart = init('technical-indicator-k-line');
    this.kLineChart.addCustomTechnicalIndicator(emojiTechnicalIndicator);
    // this.paneTag = this.kLineChart.createPane('technicalIndicator', { technicalIndicatorType: 'VOL', height: 100 });
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  setCandleTechnicalIndicator(type) {
    this.kLineChart.setTechnicalIndicatorType(type, true);
  }

  setSubTechnicalIndicator(type) {
    this.kLineChart.setTechnicalIndicatorType(type, true, this.pangTag);
  }

  ngOnDestroy(): void {
    dispose('technical-indicator-k-line');
  }
}
