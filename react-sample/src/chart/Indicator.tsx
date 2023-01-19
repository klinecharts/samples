import React, { useEffect, useRef } from 'react'
import { init, dispose, registerIndicator, Chart } from 'klinecharts'
import generatedDataList from '../generatedDataList'
import Layout from '../Layout'

const fruits = [
  '🍏', '🍎', '🍐', '🍊', '🍋', '🍌',
  '🍉', '🍇', '🍓', '🍈', '🍒', '🍑',
  '🍍', '🥥', '🥝', '🥭', '🥑', '🍏'
]

interface EmojiEntity {
  emoji: number
  text: string
}

// 自定义指标
registerIndicator<EmojiEntity>({
  name: 'EMOJI',
  figures: [
    { key: 'emoji' }
  ],
  calc: (kLineDataList) => {
    return kLineDataList.map(kLineData => ({ emoji: kLineData.close, text: fruits[Math.floor(Math.random() * 17)] }))
  },
  draw: ({
    ctx,
    barSpace,
    visibleRange,
    indicator,
    xAxis,
    yAxis
  }) => {
    const { from, to } = visibleRange

    ctx.font = `${barSpace.gapBar}px Helvetica Neue`
    ctx.textAlign = 'center'
    const result = indicator.result
    for (let i = from; i < to; i++) {
      const data = result[i]
      const x = xAxis.convertToPixel(i)
      const y = yAxis.convertToPixel(data.emoji)
      ctx.fillText(data.text, x, y)
    }
    return false
  }
})

const mainIndicators = ['MA', 'EMA', 'SAR']
const subIndicators = ['VOL', 'MACD', 'KDJ']

export default function Indicator () {
  const chart = useRef<Chart | null>()
  const paneId = useRef<string>('')
  useEffect(() => {
    chart.current = init('indicator-k-line')
    paneId.current = chart.current?.createIndicator('VOL', false) as string
    chart.current?.applyNewData(generatedDataList())
    return () => {
      dispose('indicator-k-line')
    }
  }, [])
  return (
    <Layout
      title="技术指标">
      <div id="indicator-k-line" className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        <span style={{ paddingRight: 10 }}>主图指标</span>
        {
          mainIndicators.map(type => {
            return (
              <button
                key={type}
                onClick={_ => {
                  chart.current?.createIndicator(type, false, { id: 'candle_pane' })
                }}>
                {type}
              </button>
            )
          })
        }
        <button
          onClick={_ => {
            chart.current?.createIndicator('EMOJI', true, { id: 'candle_pane' })
          }}>
          自定义
        </button>
        <span style={{ paddingRight: 10, paddingLeft: 12 }}>副图指标</span>
        {
          subIndicators.map(type => {
            return (
              <button
                key={type}
                onClick={_ => {
                  chart.current?.createIndicator(type, false, { id: paneId.current })
                }}>
                {type}
              </button>
            )
          })
        }
        <button
          onClick={_ => {
            chart.current?.createIndicator('EMOJI', false, { id: paneId.current })
          }}>
          自定义
        </button>
      </div>
    </Layout>
  )
}
