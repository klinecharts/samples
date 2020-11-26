import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

const types = [
  { key: 'candle_solid', text: '蜡烛实心' },
  { key: 'candle_stroke', text: '蜡烛空心' },
  { key: 'candle_up_stroke', text: '蜡烛涨空心' },
  { key: 'candle_down_stroke', text: '蜡烛跌空心' },
  { key: 'ohlc', text: 'OHLC' },
  { key: 'area', text: '面积图' }
]

export default function ChartTypeKLineChart () {
  let kLineChart
  useEffect(() => {
    kLineChart = init('real-time-k-line')
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('real-time-k-line')
    }
  }, [])

  return (
    <Layout
      title="图表类型">
      <div id="real-time-k-line" className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        {
          types.map(({ key, text }) => {
            return (
              <button
                key={key}
                onClick={_ => {
                  kLineChart.setStyleOptions({
                    candle: {
                      type: key
                    }
                  })
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
