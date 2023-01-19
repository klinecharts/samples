import React, { useEffect, useState, useRef } from 'react'
import { init, dispose, Chart, YAxisType } from 'klinecharts'
import generatedDataList from '../generatedDataList'
import Layout from '../Layout'

const types = [
  { key: 'normal', text: '线性轴' },
  { key: 'percentage', text: '百分比轴' },
  { key: 'log', text: '对数轴' }
]

export default function CustomThemeKLineChart () {
  const chart = useRef<Chart | null>()
  const [type, setType] = useState('normal')

  useEffect(() => {
    chart.current = init('y-axis-k-line')
    chart.current?.applyNewData(generatedDataList())
    return () => {
      dispose('y-axis-k-line')
    }
  }, [])

  useEffect(() => {
    chart.current?.setStyles({
      yAxis: { type: type as YAxisType }
    })
  }, [type])

  return (
    <Layout
      title="Y轴">
      <div
        id="y-axis-k-line"
        className="k-line-chart"/>
      <div
        className="k-line-chart-menu-container">
        {
          types.map(({ key, text }) => {
            return (
              <button
                key={key}
                onClick={_ => { setType(key) }}>
                {text}
              </button>
            )
          })
        }
      </div>
    </Layout>
  )
}
