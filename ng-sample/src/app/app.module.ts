import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LayoutComponent } from './components/layout.component';
import { ChartTypeComponent } from './components/chart-type.component';
import { ThemeComponent } from './components/theme.component';
import { OverlayComponent } from './components/overlay.component';
import { LanguageComponent } from './components/language.component';
import { LoadMoreComponent } from './components/load-more.component';
import { IndicatorComponent } from './components/indicator.component';
import { TimezoneComponent } from './components/timezone.component';
import { TooltipComponent } from './components/tooltip.component';
import { UpdateComponent } from './components/update.component';
import { YAxisComponent } from './components/y-axis.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ChartTypeComponent,
    ThemeComponent,
    OverlayComponent,
    LanguageComponent,
    LoadMoreComponent,
    IndicatorComponent,
    TimezoneComponent,
    TooltipComponent,
    UpdateComponent,
    YAxisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
