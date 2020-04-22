import React, { useEffect, useState } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

const textColorDark = '#D9D9D9'
const gridColorDark = '#393939'
const axisLineColorDark = '#888888'

const textColorLight = '#7F7F7F'
const gridColorLight = '#EEEEEE'
const axisLineColorLight = '#999999'

function getChartTheme (theme) {
  const textColor = theme === 'dark' ? textColorDark : textColorLight
  const gridColor = theme === 'dark' ? gridColorDark : gridColorLight
  const axisLineColor = theme === 'dark' ? axisLineColorDark : axisLineColorLight
  return {
    grid: {
      horizontal: {
        display: true,
        color: gridColor
      }
    },
    candleStick: {
      priceMark: {
        high: {
          color: textColor
        },
        low: {
          color: textColor
        }
      }
    },
    technicalIndicator: {
      line: {
        colors: [textColor, '#F5A623', '#F601FF', '#1587DD', '#1e88e5']
      }
    },
    xAxis: {
      axisLine: {
        color: axisLineColor
      },
      tickLine: {
        color: axisLineColor
      },
      tickText: {
        color: textColor
      }
    },
    yAxis: {
      axisLine: {
        color: axisLineColor
      },
      tickLine: {
        color: axisLineColor
      },
      tickText: {
        color: textColor
      }
    },
    floatLayer: {
      crossHair: {
        horizontal: {
          line: {
            color: axisLineColor
          }
        },
        vertical: {
          line: {
            color: axisLineColor
          }
        }
      },
      prompt: {
        candleStick: {
          text: {
            color: textColor
          }
        },
        technicalIndicator: {
          text: {
            color: textColor
          }
        }
      }
    }
  }
}

export default function CustomThemeKLineChart () {
  let kLineChart
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    kLineChart = init('custom-theme-k-line')
  })

  useEffect(() => {
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('custom-theme-k-line')
    }
  }, [])

  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">自定义主题</p>
      <div
        id="custom-theme-k-line"
        style={theme === 'light' ? { backgroundColor: '#ffffff' } : {}}
        className="k-line-chart"/>
      <div className="k-line-chart-setting-container">
        <button
          className={`k-line-chart-setting-button ${theme === 'dark' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setStyleOptions(getChartTheme('dark'))
            setTheme('dark')
          }}>
          深色
        </button>
        <button
          className={`k-line-chart-setting-button ${theme === 'light' && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setStyleOptions(getChartTheme('light'))
            setTheme('light')
          }}>
          浅色
        </button>
      </div>
    </div>
  )
}
