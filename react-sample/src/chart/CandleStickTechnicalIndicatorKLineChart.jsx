import React, { useEffect, useState } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function CandleStickTechnicalIndicatorKLineChart () {
  let kLineChart
  const [technicalIndicatorType, setTechnicalIndicatorType] = useState('MA')

  useEffect(() => {
    kLineChart = init('candle-stick-technical-indicator-k-line')
  })

  useEffect(() => {
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('candle-stick-technical-indicator-k-line')
    }
  }, [])

  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">蜡烛图技术指标设置</p>
      <div id="candle-stick-technical-indicator-k-line" className="k-line-chart"/>
      <div className="k-line-chart-setting-container">
        <button
          className={`k-line-chart-setting-button ${technicalIndicatorType === 'NO' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setCandleStickTechnicalIndicatorType('NO')
            setTechnicalIndicatorType('NO')
          }}>
          NO
        </button>
        <button
          className={`k-line-chart-setting-button ${technicalIndicatorType === 'MA' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setCandleStickTechnicalIndicatorType('MA')
            setTechnicalIndicatorType('MA')
          }}>
          MA
        </button>
        <button
          className={`k-line-chart-setting-button ${technicalIndicatorType === 'EMA' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setCandleStickTechnicalIndicatorType('EMA')
            setTechnicalIndicatorType('EMA')
          }}>
          EMA
        </button>
        <button
          className={`k-line-chart-setting-button ${technicalIndicatorType === 'BOLL' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setCandleStickTechnicalIndicatorType('BOLL')
            setTechnicalIndicatorType('BOLL')
          }}>
          BOLL
        </button>
        <button
          className={`k-line-chart-setting-button ${technicalIndicatorType === 'SAR' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setCandleStickTechnicalIndicatorType('SAR')
            setTechnicalIndicatorType('SAR')
          }}>
          SAR
        </button>
      </div>
    </div>
  )
}
