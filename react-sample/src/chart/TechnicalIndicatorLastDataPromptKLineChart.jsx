import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function TechnicalIndicatorLastDataPromptKLineChart () {
  useEffect(() => {
    const kLineChart = init('technical-indicator-last-data-prompt-k-line')
    kLineChart.setStyleOptions({
      technicalIndicator: {
        lastValueMark: {
          display: true
        }
      }
    })
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('technical-indicator-last-data-prompt-k-line')
    }
  }, [])
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">技术指标最后值提示</p>
      <div id="technical-indicator-last-data-prompt-k-line" className="k-line-chart"/>
    </div>
  )
}
