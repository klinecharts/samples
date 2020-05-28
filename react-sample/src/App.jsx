import React from 'react'
import BasicKLineChart from './chart/BasicKLineChart'
import RealTimeKLineChart from './chart/RealTimeKLineChart'
import UpdateKLineChart from './chart/UpdateKLineChart'
import LoadMoreKLineChart from './chart/LoadMoreKLineChart'
import TechnicalIndicatorKLineChart from './chart/TechnicalIndicatorKLineChart'
import CustomTechnicalIndicatorKLineChart from './chart/CustomTechnicalIndicatorKLineChart'
import LeftYAxisKLineChart from './chart/LeftYAxisKLineChart'
import WithoutYAxisKLineChart from './chart/WithoutYAxisKLineChart'
import PercentageYAxisKLineChart from './chart/PercentageYAxisKLineChart'
import YAxisTextInsideKLineChart from './chart/YAxisTextInsideKLineChart'
import TimezoneKLineChart from './chart/TimezoneKLineChart'
import CustomFontKLineChart from './chart/CustomFontKLineChart'
import CustomThemeKLineChart from './chart/CustomThemeKLineChart'
import CustomLanguageKLineChart from './chart/CustomLanguageKLineChart'
import FloatPromptKLineChart from './chart/FloatPromptKLineChart'
import CustomCandleStickLabelKLineChart from './chart/CustomCandleStickLabelKLineChart'
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
        <CustomTechnicalIndicatorKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <TechnicalIndicatorLastDataPromptKLineChart/>
        <LeftYAxisKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <WithoutYAxisKLineChart/>
        <PercentageYAxisKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <YAxisTextInsideKLineChart/>
        <CustomFontKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <CustomThemeKLineChart/>
        <CustomLanguageKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <TimezoneKLineChart/>
        <CandleStickTechnicalIndicatorKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <DrawGraphicMarkKLineChart/>
        <FloatPromptKLineChart/>
      </div>
      <div className="k-line-chart-row">
        <CustomCandleStickLabelKLineChart/>
        <FollowCrosshairPromptKLineChart/>
      </div>
    </div>
  )
}
