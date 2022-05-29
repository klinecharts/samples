import React, { useRef, useState, useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

function getTooltipOptions (candleShowType, candleShowRule, technicalIndicatorShowRule) {
  return {
    candle: {
      tooltip: {
        showType: candleShowType,
        showRule: candleShowRule,
        labels: ['开盘价：', '收盘价：', '涨跌幅：'],
        values: kLineData => {
          const change = (kLineData.close - kLineData.open) / kLineData.open * 100
          return [
            { value: kLineData.open.toFixed(2) },
            { value: kLineData.close.toFixed(2) },
            {
              value: `${change.toFixed(2)}%`,
              color: change < 0 ? '#EF5350' : '#26A69A'
            }
          ]
        }
      }
    },
    technicalIndicator: {
      tooltip: {
        showRule: technicalIndicatorShowRule
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
  const chart = useRef()
  const [candleShowType, setCandleShowType] = useState('standard')
  const [candleShowRule, setCandleShowRule] = useState('always')
  const [technicalIndicatorShowRule, setTechnicalIndicatorShowRule] = useState('always')

  useEffect(() => {
    chart.current = init('tooltip-k-line')
    chart.current.createTechnicalIndicator('MA', false, { id: 'candle_pane' })
    chart.current.createTechnicalIndicator('KDJ', false, { height: 80 })
    chart.current.applyNewData(generatedKLineDataList())
    return () => { dispose('tooltip-k-line') }
  }, [])

  useEffect(() => {
    chart.current && chart.current.setStyleOptions(getTooltipOptions(
      candleShowType, candleShowRule, technicalIndicatorShowRule
    ))
  }, [candleShowType, candleShowRule, technicalIndicatorShowRule])

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
                onClick={_ => { setCandleShowRule(key) }}>
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
                onClick={_ => { setTechnicalIndicatorShowRule(key) }}>
                {text}
              </button>
            )
          })
        }
      </div>
    </Layout>
  )
}
