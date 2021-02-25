import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

const fruits = [
  '🍏', '🍎', '🍐', '🍊', '🍋', '🍌',
  '🍉', '🍇', '🍓', '🍈', '🍒', '🍑',
  '🍍', '🥥', '🥝', '🥭', '🥑', '🍏'
]

// 自定义指标
const emojiTechnicalIndicator = {
  name: 'EMOJI',
  plots: [
    { key: 'emoji' }
  ],
  calcTechnicalIndicator: (kLineDataList) => {
    const result = []
    kLineDataList.forEach(kLineData => {
      result.push({ emoji: kLineData.close, text: fruits[Math.floor(Math.random() * 17)] })
    })
    return result
  },
  render: (
    ctx,
    { from, to, kLineDataList, technicalIndicatorDataList },
    { barSpace },
    options, xAxis, yAxis
  ) => {
    ctx.font = `${barSpace}px Helvetica Neue`
    ctx.textAlign = 'center'
    for (let i = from; i < to; i++) {
      const data = technicalIndicatorDataList[i]
      const x = xAxis.convertToPixel(i)
      const y = yAxis.convertToPixel(data.emoji)
      ctx.fillText(data.text, x, y)
    }
  }
}

const mainTechnicalIndicatorTypes = ['MA', 'EMA', 'SAR']
const subTechnicalIndicatorTypes = ['VOL', 'MACD', 'KDJ']

export default function TechnicalIndicatorKLineChart () {
  let kLineChart
  let paneId
  useEffect(() => {
    kLineChart = init('technical-indicator-k-line')
    // 将自定义技术指标添加到图表
    kLineChart.addCustomTechnicalIndicator(emojiTechnicalIndicator)
    paneId = kLineChart.createTechnicalIndicator('VOL', false)
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('technical-indicator-k-line')
    }
  }, [])
  return (
    <Layout
      title="技术指标">
      <div id="technical-indicator-k-line" className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        <span style={{ paddingRight: 10 }}>主图指标</span>
        {
          mainTechnicalIndicatorTypes.map(type => {
            return (
              <button
                key={type}
                onClick={_ => {
                  kLineChart.createTechnicalIndicator(type, false, { id: 'candle_pane' })
                }}>
                {type}
              </button>
            )
          })
        }
        <button
          onClick={_ => {
            kLineChart.createTechnicalIndicator('EMOJI', true, { id: 'candle_pane' })
          }}>
          自定义
        </button>
        <span style={{ paddingRight: 10, paddingLeft: 12 }}>副图指标</span>
        {
          subTechnicalIndicatorTypes.map(type => {
            return (
              <button
                key={type}
                onClick={_ => {
                  kLineChart.createTechnicalIndicator(type, false, { id: paneId })
                }}>
                {type}
              </button>
            )
          })
        }
        <button
          onClick={_ => {
            kLineChart.createTechnicalIndicator('EMOJI', false, { id: paneId })
          }}>
          自定义
        </button>
      </div>
    </Layout>
  )
}
