import React, { useEffect, useState, useRef } from 'react'
import { init, dispose, Chart } from 'klinecharts'
import generatedDataList from '../generatedDataList'
import Layout from '../Layout'

const themes = [
  { key: 'dark', text: '深色' },
  { key: 'light', text: '浅色' }
]

export default function CustomThemeKLineChart () {
  const chart = useRef<Chart | null>()
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    chart.current = init('style-k-line')
    chart.current?.applyNewData(generatedDataList())
    return () => {
      dispose('style-k-line')
    }
  }, [])

  useEffect(() => {
    chart.current?.setStyles(theme)
  }, [theme])

  return (
    <Layout
      title="主题">
      <div
        id="style-k-line"
        style={theme === 'dark' ? { backgroundColor: '#1f2126' } : {}}
        className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        {
          themes.map(({ key, text }) => {
            return (
              <button
                key={key}
                onClick={_ => { setTheme(key) }}>
                {text}
              </button>
            )
          })
        }
      </div>
    </Layout>
  )
}
