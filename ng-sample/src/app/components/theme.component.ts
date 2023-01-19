import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart, Nullable } from 'klinecharts';

import generatedDataList from '../generatedDataList';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
})
export class ThemeComponent implements AfterViewInit, OnDestroy {
  theme = 'light';
  private chart: Nullable<Chart> = null;
  ngAfterViewInit(): void {
    this.chart = init('theme-k-line');
    this.chart?.applyNewData(generatedDataList());
  }

  setTheme(theme: string) {
    this.theme = theme;
    this.chart?.setStyles(theme);
  }

  ngOnDestroy(): void {
    dispose('theme-k-line');
  }
}
