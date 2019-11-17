<template>
	<view class="accountLogin mf-row mf-center" @tap="labelEnter">
		<slot></slot>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			labelEnter:function () {
				this.$emit("labelEnterClick")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.accountLogin {
		color: #777777;
		margin-top: 36upx;

		view {
			// margin-left: 8upx;
			color: #C6C6C6;
			font-size: 36upx;
			line-height: 36upx;
		}
	}
</style>
