import React from 'react'
import BasicKLineChart from './chart/BasicKLineChart'
import TechnicalIndicatorKLineChart from './chart/TechnicalIndicatorKLineChart'
import LeftYAxisKLineChart from './chart/LeftYAxisKLineChart'
import WithoutYAxisKLineChart from './chart/WithoutYAxisKLineChart'
import PercentageYAxisKLineChart from './chart/PercentageYAxisKLineChart'
import YAxisTextInsideKLineChart from './chart/YAxisTextInsideKLineChart'
import CustomFontKLineChart from './chart/CustomFontKLineChart'

import './app.less'

export default function App () {
  return (
    <div className="app">
      <div className="k-line-chart-row">
        <BasicKLineChart/>
        <TechnicalIndicatorKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <LeftYAxisKLineChart/>
        <WithoutYAxisKLineChart/>
      </div>

      <div className="k-line-chart-row">
        <PercentageYAxisKLineChart/>
        <YAxisTextInsideKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <CustomFontKLineChart/>
      </div>
    </div>
  )
}
