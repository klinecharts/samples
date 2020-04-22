import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function FollowCrosshairPromptKLineChart () {
  useEffect(() => {
    const kLineChart = init('follow-crosshair-prompt-k-line')
    kLineChart.setStyleOptions({
      floatLayer: {
        prompt: {
          displayRule: 'follow_cross'
        }
      }
    })
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('follow-crosshair-prompt-k-line')
    }
  }, [])
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">跟随十字光标提示</p>
      <div id="follow-crosshair-prompt-k-line" className="k-line-chart"/>
    </div>
  )
}
