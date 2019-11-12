<template>
	<view>
		<view class="mf-center">{{itemValue}}</view>
		<view class="mf-center">{{itemName}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			itemName:String,
			itemValue:[String,Number],
		}
	}
</script>

<style lang="scss" scoped>
	view {
		flex: 1;
		line-height: 1.2;
	
		view:first-child {
			color: #383838;
			font-size: 34upx;
		}
	
		view:last-child {
			color: #9F9F9F;
			font-size: 24upx;
		}
	}
</style>
