import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, registerLocale, Chart, Nullable } from 'klinecharts';

import generatedDataList from '../generatedDataList';

registerLocale("zh-HK", {
  time: "時間：",
  open: "開：",
  high: "高：",
  low: "低：",
  close: "收：",
  volume: "成交量：",
});

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
})
export class LanguageComponent implements AfterViewInit, OnDestroy {
  language = 'zh-CN';
  private chart: Nullable<Chart> = null;
  ngAfterViewInit(): void {
    this.chart = init('language-k-line');
    this.chart?.applyNewData(generatedDataList());
  }

  setLanguage(language: string) {
    this.language = language;
    this.chart?.setLocale(language);
  }

  ngOnDestroy(): void {
    dispose('language-k-line');
  }
}
