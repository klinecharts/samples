import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

const timezones = [
  { key: 'Asia/Shanghai', text: '上海' },
  { key: 'Europe/Berlin', text: '柏林' },
  { key: 'America/Chicago', text: '芝加哥' }
]

export default function TimezoneKLineChart () {
  let kLineChart
  useEffect(() => {
    kLineChart = init('timezone-k-line')
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('timezone-k-line')
    }
  }, [])

  return (
    <Layout
      title="时区设置">
      <div
        id="timezone-k-line" className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        {
          timezones.map(({ key, text }) => {
            return (
              <button
                key={key}
                onClick={_ => {
                  kLineChart.setTimezone(key)
                }}>
                {text}
              </button>
            )
          })
        }
      </div>
    </Layout>
  )
}
