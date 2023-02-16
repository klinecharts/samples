import React, { useRef, useState, useEffect } from 'react'
import { init, dispose, Chart, TooltipShowRule, TooltipShowType, CandleTooltipCustomCallbackData } from 'klinecharts'
import generatedDataList from '../generatedDataList'
import Layout from '../Layout'

function getTooltipOptions (candleShowType: TooltipShowType, candleShowRule: TooltipShowRule, indicatorShowRule: TooltipShowRule) {
  return {
    candle: {
      tooltip: {
        showType: candleShowType,
        showRule: candleShowRule,
        custom: (data: CandleTooltipCustomCallbackData) => {
          const { prev, current } = data
          const prevClose = (prev?.close ?? current.open)
          const change = (current.close - prevClose) / prevClose * 100
          return [
            { title: 'open', value: current.open.toFixed(2) },
            { title: 'close', value: current.close.toFixed(2) },
            {
              title: 'Change: ',
              value: {
                text: `${change.toFixed(2)}%`,
                color: change < 0 ? '#EF5350' : '#26A69A'
              }
            }
          ]
        }
      }
    },
    indicator: {
      tooltip: {
        showRule: indicatorShowRule
      }
    }
  }
}

const rules = [
  { key: 'always', text: '总是显示' },
  { key: 'follow_cross', text: '跟随十字光标' },
  { key: 'none', text: '不显示' }
]

export default function TooltipKLineChart () {
  const chart = useRef<Chart | null>()
  const [candleShowType, setCandleShowType] = useState('standard')
  const [candleShowRule, setCandleShowRule] = useState('always')
  const [indicatorShowRule, setIndicatorShowRule] = useState('always')

  useEffect(() => {
    chart.current = init('tooltip-k-line')
    chart.current?.createIndicator('MA', false, { id: 'candle_pane' })
    chart.current?.createIndicator('KDJ', false, { height: 80 })
    chart.current?.applyNewData(generatedDataList())
    return () => { dispose('tooltip-k-line') }
  }, [])

  useEffect(() => {
    chart.current?.setStyles(getTooltipOptions(
      candleShowType as TooltipShowType, candleShowRule as TooltipShowRule, indicatorShowRule as TooltipShowRule
    ))
  }, [candleShowType, candleShowRule, indicatorShowRule])

  return (
    <Layout
      title="十字光标文字提示">
      <div id="tooltip-k-line" className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        <span style={{ paddingRight: 10 }}>主图显示类型</span>
        <button
          onClick={_ => { setCandleShowType('standard') }}>
          默认
        </button>
        <button
          onClick={_ => { setCandleShowType('rect') }}>
          矩形框
        </button>
      </div>
      <div
        className="k-line-chart-menu-container">
        <span style={{ paddingRight: 10 }}>k线提示显示规则</span>
        {
          rules.map(({ key, text }) => {
            return (
              <button
                key={key}
                onClick={_ => { setCandleShowRule(key as TooltipShowRule) }}>
                {text}
              </button>
            )
          })
        }
      </div>
      <div
        className="k-line-chart-menu-container">
        <span style={{ paddingRight: 10 }}>指标提示显示规则</span>
        {
          rules.map(({ key, text }) => {
            return (
              <button
                key={key}
                onClick={_ => { setIndicatorShowRule(key as TooltipShowRule) }}>
                {text}
              </button>
            )
          })
        }
      </div>
    </Layout>
  )
}
