import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout.component';
import { ChartTypeKLineChartComponent } from './k-line-chart/chart-type/chart-type-k-line-chart.component';
import { TechnicalIndicatorKLineChartComponent } from './k-line-chart/technical-indicator/technical-indicator-k-line-chart.component';
import { CustomThemeKLineChartComponent } from './k-line-chart/custom-theme/custom-theme-k-line-chart.component';
import { LanguageKLineChartComponent } from './k-line-chart/language/language-k-line-chart.component';
import { TooltipKLineChartComponent } from './k-line-chart/tooltip/tooltip-k-line-chart.component';
import { TimezoneKLineChartComponent } from './k-line-chart/timezone/timezone-k-line-chart.component';
import { DrawGraphicMarkKLineChartComponent } from './k-line-chart/draw-graphic-mark/draw-graphic-mark-k-line-chart.component';
import { LoadMoreKLineChartComponent } from './k-line-chart/load-more/load-more-k-line-chart.component';
import { UpdateKLineChartComponent } from './k-line-chart/update/update-k-line-chart.component';
import { CustomCandleMarkKLineChartComponent } from './k-line-chart/custom-candle-mark-k-line-chart/custom-candle-mark-k-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ChartTypeKLineChartComponent,
    TechnicalIndicatorKLineChartComponent,
    CustomThemeKLineChartComponent,
    LanguageKLineChartComponent,
    TooltipKLineChartComponent,
    TimezoneKLineChartComponent,
    DrawGraphicMarkKLineChartComponent,
    LoadMoreKLineChartComponent,
    UpdateKLineChartComponent,
    CustomCandleMarkKLineChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
