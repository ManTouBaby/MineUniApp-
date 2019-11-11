<template>
	<view class="itemBox icon iconfont mf-center" :class="{'icon-nan showBoy':sex==0,'icon-nv showGirl':sex==1}">{{age}}</view>
</template>

<script>
	export default {
		props:{
			sex:Number, //0 女性  1 男
			age:Number
		}
	}
</script>

<style lang="scss" scoped>
	//性别年龄
	.itemBox {
		// margin-left: 8upx;
		padding: 0 8upx;
		font-size: 6upx;
		line-height: 24upx;
		border-radius: 18upx;
		color: #FFFFFF;
		
		&.showBoy{
			background-color: #44B3FF;
		}
		&.showGirl{
			background-color: #DD4A68;
		}
	}
</style>
