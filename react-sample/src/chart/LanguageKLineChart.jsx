import React, { PureComponent } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

function getLanguageOptions (language) {
  return {
    candle: {
      tooltip: {
        labels: language === 'zh-CN'
          ? ['时间', '开', '收', '高', '低', '成交量']
          : language === 'zh-HK'
            ? ['時間', '開', '收', '高', '低', '成交量']
            : ['T', 'O', 'C', 'H', 'L', 'V']
      }
    }
  }
}

const locals = [
  { key: 'zh-CN', text: '简体中文' },
  { key: 'zh-HK', text: '繁体中文' },
  { key: 'en-US', text: 'English' }
]

export default class LanguageKLineChart extends PureComponent {
  state = {
    language: 'zh-CN'
  }

  componentDidMount () {
    this.kLineChart = init('language-k-line')
    this.kLineChart.applyNewData(generatedKLineDataList())
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevState.language !== this.state.language) {
      this.kLineChart.setStyleOptions(getLanguageOptions(this.state.language))
    }
  }

  componentWillUnmount () {
    dispose('language-k-line')
  }

  render () {
    return (
      <Layout
        title="多语言">
        <div id="language-k-line" className="k-line-chart"/>
        <div
          className="k-line-chart-menu-container">
          {
            locals.map(({ key, text }) => {
              return (
                <button
                  key={key}
                  onClick={_ => {
                    this.setState({
                      language: key
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
}
