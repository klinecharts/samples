import React, { useEffect } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'

export default function CustomCandleStickLabelKLineChart () {
  let kLineChart
  useEffect(() => {
    kLineChart = init('custom-candlestick-label-k-line')
    kLineChart.setStyleOptions({
      floatLayer: {
        prompt: {
          candleStick: {
            labels: ['开', '收', '涨幅'],
            values: kLineData => {
              return [
                {
                  value: kLineData.open.toFixed(2)
                }, {
                  value: kLineData.close.toFixed(2)
                }, {
                  value: `${((kLineData.close - kLineData.open) / kLineData.open * 100).toFixed(2)}%`,
                  color: kLineData.close - kLineData.open > 0 ? '#26A69A' : '#EF5350'
                }
              ]
            }
          }
        }
      }
    })
    kLineChart.applyNewData(generatedKLineDataList())
    return () => {
      dispose('custom-candlestick-label-k-line')
    }
  })
  return (
    <div className="k-line-chart-container">
      <p className="k-line-chart-title">自定义蜡烛图数据提示</p>
      <div id="custom-candlestick-label-k-line" className="k-line-chart"/>
    </div>
  )
}
