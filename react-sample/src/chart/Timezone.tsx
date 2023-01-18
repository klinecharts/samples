import React, { useEffect, useRef } from 'react'
import { init, dispose, Chart } from 'klinecharts'
import generatedDataList from '../generatedDataList'
import Layout from '../Layout'

const timezones = [
  { key: 'Asia/Shanghai', text: '上海' },
  { key: 'Europe/Berlin', text: '柏林' },
  { key: 'America/Chicago', text: '芝加哥' }
]

export default function Timezone () {
  const chart = useRef<Chart | null>()
  useEffect(() => {
    chart.current = init('timezone-k-line')
    chart.current?.applyNewData(generatedDataList())
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
                  chart.current && chart.current.setTimezone(key)
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
