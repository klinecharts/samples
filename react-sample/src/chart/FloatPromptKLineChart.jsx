import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function FloatPromptKLineChart () {
  useEffect(() => {
    const kLineChart = init('float-prompt-k-line')
    kLineChart.setStyleOptions({
      floatLayer: {
        prompt: {
          candleStick: {
            showType: 'rect'
          }
        }
      }
    })
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('float-prompt-k-line')
    }
  }, [])
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">浮动提示框</p>
      <div id="float-prompt-k-line" className="k-line-chart"/>
    </div>
  )
}
