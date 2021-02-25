import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';

import generatedKLineDataList from '../../generatedKLineDataList';



@Component({
  selector: 'app-tooltip-k-kline-chart',
  templateUrl: './tooltip-k-line-chart.component.html',
})
export class TooltipKLineChartComponent implements AfterViewInit, OnDestroy {
  private candleShowType = 'standard';
  private candleShowRule = 'always';
  private technicalIndicatorShowRule = 'always';

  private kLineChart: Chart;
  rules = [
    { key: 'always', text: '总是显示' },
    { key: 'follow_cross', text: '跟随十字光标' },
    { key: 'none', text: '不显示' }
  ];

  ngAfterViewInit(): void {
    this.kLineChart = init('tooltip-k-line');
    this.kLineChart.createTechnicalIndicator('MA', false, { id: 'candle_pane' });
    this.kLineChart.createTechnicalIndicator('KDJ', false, { height: 60 });
    this.kLineChart.applyNewData(generatedKLineDataList());
  }

  getTooltipOptions(candleShowType: string, candleShowRule: string, technicalIndicatorShowRule: string) {
    return {
      candle: {
        tooltip: {
          showType: candleShowType,
          showRule: candleShowRule,
          labels: ['开盘价', '收盘价', '涨跌幅'],
          values: kLineData => {
            const change = (kLineData.close - kLineData.open) / kLineData.open * 100;
            return [
              { value: kLineData.open.toFixed(2) },
              { value: kLineData.close.toFixed(2) },
              {
                value: `${change.toFixed(2)}%`,
                color: change < 0 ? '#EF5350' : '#26A69A'
              }
            ];
          }
        }
      },
      technicalIndicator: {
        tooltip: {
          showRule: technicalIndicatorShowRule
        }
      }
    };
  }

  setCandleShowType(type: string) {
    this.candleShowType = type;
    this.kLineChart.setStyleOptions(this.getTooltipOptions(
      type, this.candleShowRule, this.technicalIndicatorShowRule
    ));
  }

  setCandleShowRule(rule: string) {
    this.candleShowRule = rule;
    this.kLineChart.setStyleOptions(this.getTooltipOptions(
      this.candleShowType, rule, this.technicalIndicatorShowRule
    ));
  }

  setTechnicalIndicatorShowRule(rule: string) {
    this.technicalIndicatorShowRule = rule;
    this.kLineChart.setStyleOptions(this.getTooltipOptions(
      this.candleShowType, this.candleShowRule, rule
    ));
  }

  ngOnDestroy(): void {
    dispose('tooltip-k-line');
  }
}
