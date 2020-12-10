<template>
	<view
	 id="k-line-chart"
	 class="content">
	</view>
</template>

<script module="klinecharts" lang="renderjs">
	import { init } from 'klinecharts'
	import generatedKLineDataList from './generatedKLineDataList.js'
	export default {
		mounted: function () {
		    const chart = init('k-line-chart')
			chart.setStyleOptions({
				candle: {
					tooltip: {
						labels: ['开', '收', '高', '低'],
						values: function (kLineData) {
							return [
								kLineData.open.toFixed(2),
								kLineData.close.toFixed(2),
								kLineData.high.toFixed(2),
								kLineData.low.toFixed(2),
							]
						}
					}
				},
				technicalIndicator: {
					tooltip: {
						showName: false,
						showParams: false
					}
				},
				yAxis: {
					inside: true,
					axisLine: {
						show: false
					}
				}
			})
			chart.setTechnicalIndicatorParams('MA', [5, 10, 30])
			chart.setTechnicalIndicatorType('MA')
			chart.createPane('technicalIndicator', { technicalIndicatorType: 'VOL', height: 120, dragEnabled: false })
			chart.createPane('technicalIndicator', { technicalIndicatorType: 'MACD', height: 120, dragEnabled: false })
			chart.applyNewData(generatedKLineDataList())
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		height: calc(100% - 60rpx);
	}
</style>
