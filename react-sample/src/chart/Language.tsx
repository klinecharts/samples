import React, { useState, useRef, useEffect } from 'react'
import { init, dispose, Chart, registerLocale } from 'klinecharts'
import generatedDataList from '../generatedDataList'
import Layout from '../Layout'

registerLocale('zh-HK', {
  time: '時間：',
  open: '開：',
  high: '高：',
  low: '低：',
  close: '收：',
  volume: '成交量：'
})

const locals = [
  { key: 'zh-CN', text: '简体中文' },
  { key: 'zh-HK', text: '繁体中文' },
  { key: 'en-US', text: 'English' }
]

export default function Language () {
  const chart = useRef<Chart | null>()
  const [language, setLanguage] = useState('zh-CN')

  useEffect(() => {
    chart.current = init('language-k-line')
    chart.current?.applyNewData(generatedDataList())
    return () => { dispose('language-k-line') }
  }, [])

  useEffect(() => {
    chart.current && chart.current.setLocale(language)
  }, [language])

  return (
    <Layout
      title="多语言">
      <div id="language-k-line" className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        {
          locals.map(({ key, text }) => {
            return (
              <button
                key={key}
                onClick={_ => { setLanguage(key) }}>
                {text}
              </button>
            )
          })
        }
      </div>
    </Layout>
  )
}
