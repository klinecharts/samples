import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';

@Component({
  selector: 'app-language-k-kline-chart',
  templateUrl: './language-k-line-chart.component.html',
})
export class LanguageKLineChartComponent implements AfterViewInit, OnDestroy {
  language = 'zh-CN';
  private kLineChart: Chart;
  ngAfterViewInit(): void {
    this.kLineChart = init('language-k-line');
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  setLanguage(language: string) {
    this.language = language;
    this.kLineChart.setStyleOptions({
      candle: {
        tooltip: {
          labels: language === 'zh-CN'
            ? ['时间', '开', '收', '高', '低', '成交量']
            : language === 'zh-HK'
              ? ['時間', '開', '收', '高', '低', '成交量']
              : ['T', 'O', 'C', 'H', 'L', 'V']
        }
      }
    });
  }

  ngOnDestroy(): void {
    dispose('language-k-line');
  }
}
