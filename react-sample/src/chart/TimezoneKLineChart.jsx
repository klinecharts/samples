import React, { useEffect, useState } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function TimezoneKLineChart () {
  let kLineChart
  const [timezone, setTimezone] = useState('')

  useEffect(() => {
    kLineChart = init('timezone-k-line')
  })

  useEffect(() => {
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('timezone-k-line')
    }
  }, [])

  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">时区设置</p>
      <div id="timezone-k-line" className="k-line-chart"/>
      <div className="k-line-chart-setting-container">
        <button
          className={`k-line-chart-setting-button ${timezone === 'Asia/Shanghai' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setTimezone('Asia/Shanghai')
            setTimezone('Asia/Shanghai')
          }}>
          上海
        </button>
        <button
          className={`k-line-chart-setting-button ${timezone === 'Europe/Berlin' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setTimezone('Europe/Berlin')
            setTimezone('Europe/Berlin')
          }}>
          Berlin
        </button>
        <button
          className={`k-line-chart-setting-button ${timezone === 'America/Chicago' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setTimezone('America/Chicago')
            setTimezone('America/Chicago')
          }}>
          Chicago
        </button>
      </div>
    </div>
  )
}
