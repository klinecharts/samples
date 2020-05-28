<template>
  <div id="app" class="app">
    <div class="k-line-chart-row">
      <BasicKLineChart/>
      <RealTimeKLineChart/>
    </div>
    <div class="k-line-chart-row">
      <UpdateKLineChart/>
      <LoadMoreKLineChart/>
    </div>
    <div class="k-line-chart-row">
      <TechnicalIndicatorKLineChart/>
      <CustomTechnicalIndicatorKLineChart/>
    </div>
    <div class="k-line-chart-row">
      <TechnicalIndicatorLastDataPromptKLineChart/>
      <LeftYAxisKLineChart/>
    </div>
    <div class="k-line-chart-row">
      <WithoutYAxisKLineChart/>
      <PercentageYAxisKLineChart/>
    </div>
    <div class="k-line-chart-row">
      <YAxisTextInsideKLineChart/>
      <CustomFontKLineChart/>
    </div>
    <div class="k-line-chart-row">
      <CustomThemeKLineChart/>
      <CustomLanguageKLineChart/>
    </div>
    <div class="k-line-chart-row">
      <TimezoneKLineChart/>
      <CandleStickTechnicalIndicatorKLineChart/>
    </div>
    <div class="k-line-chart-row">
      <DrawGraphicMarkKLineChart/>
      <FloatPromptKLineChart/>
    </div>
    <div class="k-line-chart-row">
      <FollowCrosshairPromptKLineChart/>
      <CustomCandleStickLabelKLineChart/>
    </div>
  </div>
</template>

<script>
import BasicKLineChart from './components/BasicKLineChart'
import RealTimeKLineChart from './components/RealTimeKLineChart'
import UpdateKLineChart from './components/UpdateKLineChart'
import LoadMoreKLineChart from './components/LoadMoreKLineChart'
import TechnicalIndicatorKLineChart from './components/TechnicalIndicatorKLineChart'
import CustomTechnicalIndicatorKLineChart from './components/CustomTechnicalIndicatorKLineChart'
import TechnicalIndicatorLastDataPromptKLineChart from './components/TechnicalIndicatorLastDataPromptKLineChart'
import LeftYAxisKLineChart from './components/LeftYAxisKLineChart'
import WithoutYAxisKLineChart from './components/WithoutYAxisKLineChart'
import PercentageYAxisKLineChart from './components/PercentageYAxisKLineChart'
import YAxisTextInsideKLineChart from './components/YAxisTextInsideKLineChart'
import CustomFontKLineChart from './components/CustomFontKLineChart'
import CustomThemeKLineChart from './components/CustomThemeKLineChart'
import CustomLanguageKLineChart from './components/CustomLanguageKLineChart'
import TimezoneKLineChart from './components/TimezoneKLineChart'
import CandleStickTechnicalIndicatorKLineChart from './components/CandleStickTechnicalIndicatorKLineChart'
import DrawGraphicMarkKLineChart from './components/DrawGraphicMarkKLineChart'
import FloatPromptKLineChart from './components/FloatPromptKLineChart'
import FollowCrosshairPromptKLineChart from './components/FollowCrosshairPromptKLineChart'
import CustomCandleStickLabelKLineChart from './components/CustomCandleStickLabelKLineChart'

export default {
  name: 'App',
  components: {
    BasicKLineChart,
    RealTimeKLineChart,
    UpdateKLineChart,
    LoadMoreKLineChart,
    TechnicalIndicatorKLineChart,
    CustomTechnicalIndicatorKLineChart,
    TechnicalIndicatorLastDataPromptKLineChart,
    LeftYAxisKLineChart,
    WithoutYAxisKLineChart,
    PercentageYAxisKLineChart,
    YAxisTextInsideKLineChart,
    CustomFontKLineChart,
    CustomThemeKLineChart,
    CustomLanguageKLineChart,
    TimezoneKLineChart,
    CandleStickTechnicalIndicatorKLineChart,
    DrawGraphicMarkKLineChart,
    FloatPromptKLineChart,
    FollowCrosshairPromptKLineChart,
    CustomCandleStickLabelKLineChart
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 1300px;
    background-color: #EAEAEA;
  }

  div, p {
    box-sizing: border-box;
  }

  p {
    margin: 0;
  }

  .app {
    padding: 0 20px 60px 20px;
  }
  .k-line-chart-row {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-around;
  }

  .k-line-chart-title {
    line-height: 60px;
    font-size: 24px;
    font-weight: bold;
    color: #333333;
  }

  .k-line-chart {
    width: 600px;
    height: 280px;
    background-color: #25272F;
    border-radius: 2px;
  }
  .k-line-chart-setting-container {
    margin-top: 4px;
  }

  .k-line-chart-setting-button {
    line-height: 22px;
    height: 22px;
    border: none;
    outline: none;
    font-size: 14px;
    color: #333333;
    margin-right: 20px;
    background-color: transparent;
    border-radius: 2px;
    cursor: pointer;
  }

  .k-line-chart-setting-button:hover {
    background-color: #e1eff9;
  }

  .k-line-chart-setting-button-selected {
    background-color: #e1eff9;
  }
</style>
