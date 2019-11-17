<template>
	<view class="other-login-container">
		<view  class="loginTypeTitle mf-horizontal-center">
			————  第三方登录  ————
		</view>
		<view class="loginTypeContainer mf-row mf-horizontal-space-between">
			<view class="icon iconfont icon-weixin mf-center"/>
			<view class="icon iconfont icon-QQ  mf-center"/>
			<view class="icon iconfont icon-xinlangweibo  mf-center"/>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.loginTypeTitle {
		margin: 32upx 0;
		color: #666666;
	}
	.loginTypeContainer {
		padding: 0 100upx;
		view {
			color: #FFFFFF;
			font-size: 44upx;
			width: 100upx;
			height: 100upx;
			border-radius: 100%;
		}
	
		view:nth-of-type(1) {
			background-color: #2BD19B;
		}
	
		view:nth-of-type(2) {
			background-color: #007AFF;
			margin: 0 100upx;
		}
	
		view:nth-of-type(3) {
			background-color: #FC7729;
		}
	}
</style>
