import React from 'react'
import ChartType from './chart/ChartType'
import Indicator from './chart/Indicator'
import Theme from './chart/Theme'
import YAxis from './chart/YAxis'
import Language from './chart/Language'
import Tooltip from './chart/Tooltip'
import Timezone from './chart/Timezone'
import Overlay from './chart/Overlay'
import LoadMore from './chart/LoadMore'
import Update from './chart/Update'

import './app.css'

function App() {
  return (
    <div
      className="app">
      <ChartType/>
      <Theme/>
      <YAxis/>
      <Language/>
      <Tooltip/>
      <Timezone/>
      <Indicator/>
      <Overlay/>
      <LoadMore/>
      <Update/>
    </div>
  )
}

export default App
