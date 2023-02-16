import React, { useEffect, useRef } from 'react'
import { init, dispose, Chart, CandleType, LineType } from 'klinecharts'
import generatedDataList from '../generatedDataList'
import Layout from '../Layout'

const types = [
  { key: 'candle_solid', text: '蜡烛实心' },
  { key: 'candle_stroke', text: '蜡烛空心' },
  { key: 'candle_up_stroke', text: '蜡烛涨空心' },
  { key: 'candle_down_stroke', text: '蜡烛跌空心' },
  { key: 'ohlc', text: 'OHLC' },
  { key: 'area', text: '面积图' }
]

export default function ChartType () {
  const chart = useRef<Chart | null>()

  useEffect(() => {
    chart.current = init('real-time-k-line', {
    styles: { grid: { horizontal: { style: LineType.Dashed } } }
    })
    chart.current?.applyNewData(generatedDataList())
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
                  chart.current && chart.current.setStyles({
                    candle: {
                      type: key as CandleType
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
