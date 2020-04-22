import React from 'react'
import BasicKLineChart from './chart/BasicKLineChart'
import RealTimeKLineChart from './chart/RealTimeKLineChart'
import UpdateKLineChart from './chart/UpdateKLineChart'
import LoadMoreKLineChart from './chart/LoadMoreKLineChart'
import TechnicalIndicatorKLineChart from './chart/TechnicalIndicatorKLineChart'
import LeftYAxisKLineChart from './chart/LeftYAxisKLineChart'
import WithoutYAxisKLineChart from './chart/WithoutYAxisKLineChart'
import PercentageYAxisKLineChart from './chart/PercentageYAxisKLineChart'
import YAxisTextInsideKLineChart from './chart/YAxisTextInsideKLineChart'
import TimezoneKLineChart from './chart/TimezoneKLineChart'
import CustomFontKLineChart from './chart/CustomFontKLineChart'
import CustomThemeKLineChart from './chart/CustomThemeKLineChart'
import CustomLanguageKLineChart from './chart/CustomLanguageKLineChart'
import FloatPromptKLineChart from './chart/FloatPromptKLineChart'
import FollowCrosshairPromptKLineChart from './chart/FollowCrosshairPromptKLineChart'
import TechnicalIndicatorLastDataPromptKLineChart from './chart/TechnicalIndicatorLastDataPromptKLineChart'
import CandleStickTechnicalIndicatorKLineChart from './chart/CandleStickTechnicalIndicatorKLineChart'
import DrawGraphicMarkKLineChart from './chart/DrawGraphicMarkKLineChart'

import './app.less'

export default function App () {
  return (
    <div className="app">
      <div className="k-line-chart-row">
        <BasicKLineChart/>
        <RealTimeKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <UpdateKLineChart/>
        <LoadMoreKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <TechnicalIndicatorKLineChart/>
        <TechnicalIndicatorLastDataPromptKLineChart/>
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
        <CustomThemeKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <CustomLanguageKLineChart/>
        <TimezoneKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <CandleStickTechnicalIndicatorKLineChart/>
        <DrawGraphicMarkKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <FloatPromptKLineChart/>
        <FollowCrosshairPromptKLineChart/>
      </div>
    </div>
  )
}
