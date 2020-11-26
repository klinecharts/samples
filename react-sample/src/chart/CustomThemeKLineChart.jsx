import React, { PureComponent } from 'react'
import { init, dispose } from 'klinecharts'
import generatedKLineDataList from '../utils/generatedKLineDataList'
import Layout from '../Layout'

const textColorDark = '#929AA5'
const gridColorDark = '#292929'
const axisLineColorDark = '#333333'
const crossLineColorDark = '#929AA5'
const crossTextBackgroundColorDark = '#373a40'

const textColorLight = '#76808F'
const gridColorLight = '#ededed'
const axisLineColorLight = '#DDDDDD'
const crossLineColorLight = '#76808F'
const crossTextBackgroundColorLight = '#686d76'

function getChartTheme (theme) {
  const textColor = theme === 'dark' ? textColorDark : textColorLight
  const gridColor = theme === 'dark' ? gridColorDark : gridColorLight
  const axisLineColor = theme === 'dark' ? axisLineColorDark : axisLineColorLight
  const crossLineColor = theme === 'dark' ? crossLineColorDark : crossLineColorLight
  const crossTextBackgroundColor = theme === 'dark' ? crossTextBackgroundColorDark : crossTextBackgroundColorLight
  return {
    grid: {
      horizontal: {
        color: gridColor
      },
      vertical: {
        color: gridColor
      }
    },
    candle: {
      priceMark: {
        high: {
          color: textColor
        },
        low: {
          color: textColor
        }
      },
      tooltip: {
        text: {
          color: textColor
        }
      }
    },
    technicalIndicator: {
      tooltip: {
        text: {
          color: textColor
        }
      }
    },
    xAxis: {
      axisLine: {
        color: axisLineColor
      },
      tickLine: {
        color: axisLineColor
      },
      tickText: {
        color: textColor
      }
    },
    yAxis: {
      axisLine: {
        color: axisLineColor
      },
      tickLine: {
        color: axisLineColor
      },
      tickText: {
        color: textColor
      }
    },
    separator: {
      color: axisLineColor
    },
    crosshair: {
      horizontal: {
        line: {
          color: crossLineColor
        },
        text: {
          backgroundColor: crossTextBackgroundColor
        }
      },
      vertical: {
        line: {
          color: crossLineColor
        },
        text: {
          backgroundColor: crossTextBackgroundColor
        }
      }
    }
  }
}

export default class CustomThemeKLineChart extends PureComponent {
  state = {
    theme: 'dark'
  }

  componentDidMount () {
    this.kLineChart = init('custom-theme-k-line')
    this.kLineChart.applyNewData(generatedKLineDataList())
  }

  componentWillUnmount () {
    dispose('custom-theme-k-line')
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevState.theme !== this.state.theme) {
      this.kLineChart.setStyleOptions(getChartTheme(this.state.theme))
    }
  }

  render () {
    const { theme } = this.state
    return (
      <Layout
        title="自定义主题">
        <div
          id="custom-theme-k-line"
          style={theme === 'light' ? { backgroundColor: '#ffffff' } : {}}
          className="k-line-chart"/>
        <div
          className="k-line-chart-menu-container">
          <button
            onClick={_ => {
              this.setState({
                theme: 'dark'
              })
            }}>
            深色
          </button>
          <button
            onClick={_ => {
              this.setState({
                theme: 'light'
              })
            }}>
            浅色
          </button>
        </div>
      </Layout>
    )
  }
}
