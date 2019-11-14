<template>
	<view>
		<input type="text" placeholder="输入你要绑定的邮箱" />
		<input type="text" placeholder="请输入密码" />
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
input{
	padding: 24upx 16upx;
	border-bottom: #f1f1f1 1upx solid;
}
button{
	margin: 36upx 16upx 0;
	background-color: #F4F4F4;
}
</style>
