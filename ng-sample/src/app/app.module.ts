import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicKLineChartComponent } from './k-line-chart/basic/basic-k-line-chart.component';
import { RealTimeKLineChartComponent } from './k-line-chart/real-time/real-time-k-line-chart.component';
import { UpdateKLineChartComponent } from './k-line-chart/update/update-k-line-chart.component';
import { LoadMoreKLineChartComponent } from './k-line-chart/load-more/load-more-k-line-chart.component';
import { CandlestickTechnicalIndicatorSettingKLineChartComponent } from './k-line-chart/candlestick-technical-indicator-setting/candle-stick-technical-indicator-setting-k-line-chart.component';
import { CustomFontKLineChartComponent } from './k-line-chart/custom-font/custom-font-k-line-chart.component';
import { CustomLanguageKLineChartComponent } from './k-line-chart/custom-language/custom-language-k-line-chart.component';
import { CustomThemeKLineChartComponent } from './k-line-chart/custom-theme/custom-theme-k-line-chart.component';
import { DrawGraphicMarkKLineChartComponent } from './k-line-chart/draw-graphic-mark/draw-graphic-mark-k-line-chart.component';
import { FloatPromptKLineChartComponent } from './k-line-chart/float-prompt/float-prompt-k-line-chart.component';
import { FollowCrosshairPromptKLineChartComponent } from './k-line-chart/follow-crosshair-prompt/follow-crosshair-prompt-k-line-chart.component';
import { LeftYAxisKLineChartComponent } from './k-line-chart/left-y-axis/left-y-axis-k-line-chart.component';
import { PercentageYAxisKLineChartComponent } from './k-line-chart/percentage-y-axis/percentage-y-axis-k-line-chart.component';
import { TechnicalIndicatorKLineChartComponent } from './k-line-chart/technical-indicator/technical-indicator-k-line-chart.component';
import { CustomTechnicalIndicatorKLineChartComponent } from './k-line-chart/custom-technical-indicator/custom-technical-indicator-k-line-chart.component';
import { TechnicalIndicatorLastDataPromptKLineChartComponent } from './k-line-chart/technical-indicator-last-data-prompt/technical-indicator-last-data-prompt-k-line-chart.component';
import { TimezoneKLineChartComponent } from './k-line-chart/timezone/timezone-k-line-chart.component';
import { WithoutYAxisKLineChartComponent } from './k-line-chart/without-y-axis/without-y-axis-k-line-chart.component';
import { YAxisTextInsideKLineChartComponent } from './k-line-chart/y-axis-text-inside/y-axis-text-inside-k-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicKLineChartComponent,
    RealTimeKLineChartComponent,
    UpdateKLineChartComponent,
    LoadMoreKLineChartComponent,
    CandlestickTechnicalIndicatorSettingKLineChartComponent,
    CustomFontKLineChartComponent,
    CustomLanguageKLineChartComponent,
    CustomThemeKLineChartComponent,
    DrawGraphicMarkKLineChartComponent,
    FloatPromptKLineChartComponent,
    FollowCrosshairPromptKLineChartComponent,
    LeftYAxisKLineChartComponent,
    PercentageYAxisKLineChartComponent,
    TechnicalIndicatorKLineChartComponent,
    CustomTechnicalIndicatorKLineChartComponent,
    TechnicalIndicatorLastDataPromptKLineChartComponent,
    TimezoneKLineChartComponent,
    WithoutYAxisKLineChartComponent,
    YAxisTextInsideKLineChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
