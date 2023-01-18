import { KLineData } from "klinecharts"

function generatedDataList (baseTimestamp?: number, basePrice?: number, dataSize?: number) {

  const dataList: KLineData[] = []
  let timestamp = Math.floor((baseTimestamp ?? Date.now()) / 60 / 1000) * 60 * 1000
  let baseValue = basePrice ?? 5000
  const length = dataSize ?? 800
  const prices = []
  for (let i = 0; i < length; i++) {
    baseValue = baseValue + Math.random() * 20 - 10
    for (let j = 0; j < 4; j++) {
      prices[j] = (Math.random() - 0.5) * 12 + baseValue
    }
    prices.sort()
    const openIdx = +Math.round(Math.random() * 3).toFixed(0)
    let closeIdx = +Math.round(Math.random() * 2).toFixed(0)
    if (closeIdx === openIdx) {
      closeIdx++
    }
    const volume = Math.random() * 50 + 10
    const kLineData: KLineData = {
      open: prices[openIdx],
      low: prices[0],
      high: prices[3],
      close: prices[closeIdx],
      volume: volume,
      timestamp
    }
    timestamp -= 60 * 1000
    kLineData.turnover = (kLineData.open + kLineData.close + kLineData.high + kLineData.low) / 4 * volume
    dataList.unshift(kLineData)
  }
  return dataList
}

export default generatedDataList
