<template>
	<view>
		<input type="text" placeholder="输入你要绑定的邮箱" v-model="emailVal" />
		<input type="text" placeholder="请输入密码" v-model="password" />
		<button class="default-btn" :loading="loading" :class="disabled?'default-btn-disable':'default-btn-enable'" :disabled="disabled"
		 @tap="onSubmit">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				emailVal: "",
				password: "",

				disabled: true,
				loading: false
			};
		},
		methods:{
			checkSubmit: function() {
				let emailValEmpty = true;
				let passwordEmpty = true;
				if (this.emailVal.length > 0) {
					emailValEmpty = false;
				}
				if (this.password.length>0) {
					passwordEmpty = false;
				}
				if (!emailValEmpty && !passwordEmpty ) {
					this.disabled = false;
				} else {
					this.disabled = true;
				}
			
			},
			onSubmit: function() {
				if (this.loading) return
				this.loading = true;
				setTimeout(() => {
					uni.showToast({
						title: '邮箱绑定成',
						duration: 1000
					});
					this.loading = false;
				}, 2000);
			}
		},
		watch: {
			emailVal: function(val) {
				this.checkSubmit();
			},
			password: function(val) {
				this.checkSubmit();
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/default-btn.css";

	input {
		padding: 24upx 16upx;
		border-bottom: #f1f1f1 1upx solid;
	}
</style>
