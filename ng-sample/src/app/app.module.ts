import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicKLineChartComponent } from './k-line-chart/basic/basic-k-line-chart.component';
import { RealTimeKLineChartComponent } from './k-line-chart/real-time/real-time-k-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicKLineChartComponent,
    RealTimeKLineChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
