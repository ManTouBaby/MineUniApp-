<template>
	<view>
		<input class="m-border-bottom" type="text" placeholder="输入旧密码" v-model="oldPS" />
		<input class="m-border-bottom" type="text" placeholder="输入新密码" v-model="newPW" />
		<input class="m-border-bottom" type="text" placeholder="输入确认新密码" v-model="makesureNewPS" />

		<button class="default-btn" :class="[disabled?'default-btn-disable':'default-btn-enable']" :disabled="disabled" type="primary"
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

				disabled: true
			};
		},
		methods:{
			check:function () {
				if(this.oldPS||this.oldPS==""){
					uni.showToast({
						
					})
				}
			},
			onSubmit:function () {
				
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
