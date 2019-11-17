<template>
	<view class="login-content">
		<uni-status-bar></uni-status-bar>
		<view class="header-container">
			<image src="../../static/loginhead.png" mode="widthFix" />
			<view class="icon iconfont icon-guanbi" @tap="clickBack" />
		</view>
		<template>
			<view class="email-login">
				<input type="text" placeholder="昵称/手机号/邮箱" v-model="emailVal" />
				<input type="text" placeholder="请输入密码" v-model="password" />
			</view>
		</template>

		<template>
			<view class="phone-login">
				<input type="text" placeholder="输入手机号码" v-model="emailVal" />
				<input type="text" placeholder="请输入验证码" v-model="password" />
			</view>
		</template>

		<button class="default-btn" :loading="loading" :class="disabled?'default-btn-disable':'default-btn-enable'" :disabled="disabled"
		 @tap="onSubmit">登录</button>

		
		<labelEnter @labelEnterClick="accountLogin">账号密码登录</labelEnter>

		<other-login></other-login>
	</view>
</template>

<script>
	import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue"
	import otherLogin from "../../components/common/other-login.vue"
	import labelEnter from "../../components/common/label-enter.vue"
	export default {
		components: {
			uniStatusBar,
			otherLogin,
			labelEnter
		},
		data() {
			return {
				disabled: true,
				loading: false,
				
				emailVal:"",
				password:""
			};
		},
		methods: {
			clickBack: function() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/default-btn.css";

	.login-content {
		.header-container {
			position: relative;

			image {
				width: 100%;

			}

			view {
				position: absolute;
				font-size: 42upx;
				top: 16upx;
				left: 16upx;
			}
		}

		input {
			padding: 24upx 16upx;
			border-bottom: #f1f1f1 1upx solid;
		}

		.email-login,
		.phone-login {
			padding: 0 16upx;
		}
	}
</style>
