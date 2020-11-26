import React from 'react'
import BasicKLineChart from './chart/BasicKLineChart'
import ChartTypeKLineChart from './chart/ChartTypeKLineChart'
import TechnicalIndicatorKLineChart from './chart/TechnicalIndicatorKLineChart'
import CustomThemeKLineChart from './chart/CustomThemeKLineChart'

import './app.less'

export default function App () {
  return (
    <div
      className="app">
      <BasicKLineChart/>
      <ChartTypeKLineChart/>
      <TechnicalIndicatorKLineChart/>
      <CustomThemeKLineChart/>
    </div>
  )
}
