<template>
	<view>
		<input class="m-border-bottom" type="text" placeholder="输入旧密码" v-model="oldPS" />
		<input class="m-border-bottom" type="text" placeholder="输入新密码" v-model="newPW" />
		<input class="m-border-bottom" type="text" placeholder="输入确认新密码" v-model="makesureNewPS" />

		<button class="default-btn" :loading="loading" :class="disabled?'default-btn-disable':'default-btn-enable'" :disabled="disabled"
		 @tap="onSubmit">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPS: "",
				newPW: "",
				makesureNewPS: "",

				disabled: true,
				loading: false
			};
		},
		methods: {
			checkSubmit: function() {
				let oldIsEmpty = true;
				let newIsEmpty = true;
				let makesureNewIsEmpty = true;
				if (this.oldPS.length > 0) {
					oldIsEmpty = false;
				}
				if (this.newPW.length>0) {
					newIsEmpty = false;
				}
				if (this.makesureNewPS.length>0) {
					makesureNewIsEmpty = false;
				}
				if (!oldIsEmpty && !newIsEmpty && !makesureNewIsEmpty) {
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
						title: '密码修改成功',
						duration: 1000
					});
					this.loading = false;
				}, 2000);
			}
		},
		watch: {
			oldPS: function(val) {
				console.log("文字输入监听");
				this.checkSubmit();
			},
			newPW: function(val) {
				this.checkSubmit();
			},
			makesureNewPS: function(val) {
				this.checkSubmit();
			}
		}

	}
</script>

<style lang="scss" scoped>
	@import "../../common/default-btn.css";

	input {
		padding: 30upx 16upx;
	}
</style>
