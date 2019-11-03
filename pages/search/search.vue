<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarSearchInputChanged() {
			console.log("监听输入框文字变化");
		},
		onNavigationBarSearchInputConfirmed() {
			console.log("点击输入键盘中的搜索按钮，进行搜索操作");
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				uni.navigateBack({
					delta: 1
				});
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
