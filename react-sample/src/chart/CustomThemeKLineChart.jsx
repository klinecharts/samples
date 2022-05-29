import React, { useEffect, useState, useRef } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

const textColorDark = '#929AA5'
const gridColorDark = '#292929'
const axisLineColorDark = '#333333'
const crossTextBackgroundColorDark = '#373a40'

const textColorLight = '#76808F'
const gridColorLight = '#ededed'
const axisLineColorLight = '#DDDDDD'
const crossTextBackgroundColorLight = '#686d76'

function getThemeOptions (theme) {
  const textColor = theme === 'dark' ? textColorDark : textColorLight
  const gridColor = theme === 'dark' ? gridColorDark : gridColorLight
  const axisLineColor = theme === 'dark' ? axisLineColorDark : axisLineColorLight
  const crossLineColor = theme === 'dark' ? axisLineColorDark : axisLineColorLight
  const crossTextBackgroundColor = theme === 'dark' ? crossTextBackgroundColorDark : crossTextBackgroundColorLight
  return {
    grid: {
      horizontal: {
        color: gridColor
      },
      vertical: {
        color: gridColor
      }
    },
    candle: {
      priceMark: {
        high: {
          color: textColor
        },
        low: {
          color: textColor
        }
      },
      tooltip: {
        text: {
          color: textColor
        }
      }
    },
    technicalIndicator: {
      tooltip: {
        text: {
          color: textColor
        }
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
    separator: {
      color: axisLineColor
    },
    crosshair: {
      horizontal: {
        line: {
          color: crossLineColor
        },
        text: {
          backgroundColor: crossTextBackgroundColor
        }
      },
      vertical: {
        line: {
          color: crossLineColor
        },
        text: {
          backgroundColor: crossTextBackgroundColor
        }
      }
    }
  }
}

const themes = [
  { key: 'dark', text: '深色' },
  { key: 'light', text: '浅色' }
]

export default function CustomThemeKLineChart () {
  const chart = useRef()
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    chart.current = init('custom-style-k-line')
    chart.current.applyNewData(generatedKLineDataList())
    return () => {
      dispose('custom-style-k-line')
    }
  }, [])

  useEffect(() => {
    chart.current.setStyleOptions(getThemeOptions(theme))
  }, [theme])

  return (
    <Layout
      title="自定义主题">
      <div
        id="custom-style-k-line"
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
