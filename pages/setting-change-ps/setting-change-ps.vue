<template>
	<view>
		<input type="text" placeholder="输入旧密码" />
		<input type="text" placeholder="输入新密码" />
		<input type="text" placeholder="输入确认新密码" />

		<button type="primary">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	input {
		padding: 24upx 16upx;
		border-bottom: #f1f1f1 1upx solid;
	}

	button {
		margin: 36upx 16upx 0;
		background-color: #F4F4F4;
	}
</style>
