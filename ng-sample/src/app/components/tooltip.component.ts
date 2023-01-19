import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart, Nullable, KLineData, TooltipShowRule, TooltipShowType } from 'klinecharts';

import generatedDataList from '../generatedDataList';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent implements AfterViewInit, OnDestroy {
  private candleShowType = 'standard';
  private candleShowRule = 'always';
  private indicatorShowRule = 'always';

  private chart: Nullable<Chart> = null;
  rules = [
    { key: 'always', text: '总是显示' },
    { key: 'follow_cross', text: '跟随十字光标' },
    { key: 'none', text: '不显示' }
  ];

  ngAfterViewInit(): void {
    this.chart = init('tooltip-k-line');
    this.chart?.createIndicator('MA', false, { id: 'candle_pane' });
    this.chart?.createIndicator('KDJ', false, { height: 60, id: '' });
    this.chart?.applyNewData(generatedDataList());
  }

  getTooltipOptions(candleShowType: string, candleShowRule: string, indicatorShowRule: string) {
    return {
      candle: {
        tooltip: {
          showType: candleShowType as TooltipShowType,
          showRule: candleShowRule as TooltipShowRule,
          custom: function (kLineData: KLineData) {
            const change =
              ((kLineData.close - kLineData.open) / kLineData.open) * 100;
            return [
              { title: "open", value: kLineData.open.toFixed(2) },
              { title: "close", value: kLineData.close.toFixed(2) },
              {
                title: "Change: ",
                value: {
                  text: `${change.toFixed(2)}%`,
                  color: change < 0 ? "#EF5350" : "#26A69A",
                },
              },
            ];
          },
        }
      },
      technicalIndicator: {
        tooltip: {
          showRule: indicatorShowRule
        }
      }
    };
  }

  setCandleShowType(type: string) {
    this.candleShowType = type;
    this.chart?.setStyles(this.getTooltipOptions(
      type, this.candleShowRule, this.indicatorShowRule
    ));
  }

  setCandleShowRule(rule: string) {
    this.candleShowRule = rule;
    this.chart?.setStyles(this.getTooltipOptions(
      this.candleShowType, rule, this.indicatorShowRule
    ));
  }

  setIndicatorShowRule(rule: string) {
    this.indicatorShowRule = rule;
    this.chart?.setStyles(this.getTooltipOptions(
      this.candleShowType, this.candleShowRule, rule
    ));
  }

  ngOnDestroy(): void {
    dispose('tooltip-k-line');
  }
}
