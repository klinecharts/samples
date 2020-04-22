import React, { useEffect, useState } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

function getChartFontOptions (fontFamily, fontSize) {
  return {
    candleStick: {
      priceMark: {
        high: {
          textSize: fontSize,
          textFamily: fontFamily
        },
        low: {
          textSize: fontSize,
          textFamily: fontFamily
        },
        last: {
          text: {
            size: fontSize,
            family: fontFamily
          }
        }
      }
    },
    xAxis: {
      tickText: {
        size: fontSize,
        family: fontFamily
      }
    },
    yAxis: {
      tickText: {
        size: fontSize,
        family: fontFamily
      }
    },
    floatLayer: {
      crossHair: {
        horizontal: {
          text: {
            size: fontSize,
            family: fontFamily
          }
        },
        vertical: {
          text: {
            size: fontSize,
            family: fontFamily
          }
        }
      },
      prompt: {
        candleStick: {
          text: {
            size: fontSize,
            family: fontFamily
          }
        },
        technicalIndicator: {
          text: {
            size: fontSize,
            family: fontFamily
          }
        }
      }
    }
  }
}

export default function CustomFontKLineChart () {
  let kLineChart
  const [fontType, setFontType] = useState(0)

  useEffect(() => {
    kLineChart = init('custom-font-k-line')
  })

  useEffect(() => {
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('custom-font-k-line')
    }
  }, [])

  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">自定义字体字号</p>
      <div id="custom-font-k-line" className="k-line-chart"/>
      <div className="k-line-chart-setting-container">
        <button
          className={`k-line-chart-setting-button ${fontType === 0 && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setStyleOptions(getChartFontOptions('Arial', 12))
            setFontType(0)
          }}>
          Arial 12
        </button>
        <button
          className={`k-line-chart-setting-button ${fontType === 1 && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setStyleOptions(getChartFontOptions('Arial', 14))
            setFontType(1)
          }}>
          Arial 14
        </button>
        <button
          className={`k-line-chart-setting-button ${fontType === 2 && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setStyleOptions(getChartFontOptions('Courier New', 12))
            setFontType(2)
          }}>
          Courier New 12
        </button>
        <button
          className={`k-line-chart-setting-button ${fontType === 3 && 'k-line-chart-setting-button-selected'}`}
          onClick={() => {
            kLineChart.setStyleOptions(getChartFontOptions('Times New Roman', 14))
            setFontType(3)
          }}>
          Times New Roman 14
        </button>
      </div>
    </div>
  )
}
