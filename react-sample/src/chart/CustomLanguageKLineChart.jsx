import React, { useEffect, useState } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

function getChartLanguage (language) {
  return {
    floatLayer: {
      prompt: {
        candleStick: {
          labels: language === 'zh-CN'
            ? ['时间', '开', '收', '高', '低', '成交量']
            : language === 'zh-HK'
              ? ['時間', '開', '收', '高', '低', '成交量']
              : ['T', 'O', 'C', 'H', 'L', 'V']
        }
      }
    }
  }
}

export default function CustomLanguageKLineChart () {
  let kLineChart
  const [language, setLanguage] = useState('zh-CN')

  useEffect(() => {
    kLineChart = init('custom-language-k-line')
  })

  useEffect(() => {
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('custom-language-k-line')
    }
  }, [])

  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">自定义语言</p>
      <div id="custom-language-k-line" className="k-line-chart"/>
      <div className="k-line-chart-setting-container">
        <button
          className={`k-line-chart-setting-button ${language === 'zh-CN' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setStyleOptions(getChartLanguage('zh-CN'))
            setLanguage('zh-CN')
          }}>
          简体中文
        </button>
        <button
          className={`k-line-chart-setting-button ${language === 'zh-HK' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setStyleOptions(getChartLanguage('zh-HK'))
            setLanguage('zh-HK')
          }}>
          繁體中文
        </button>
        <button
          className={`k-line-chart-setting-button ${language === 'en' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setStyleOptions(getChartLanguage('en'))
            setLanguage('en')
          }}>
          English
        </button>
      </div>
    </div>
  )
}
