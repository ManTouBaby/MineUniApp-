<template>
	<view class="imageContainer"  :style="{height:imgHeight,width:imgWidth}" @tap="openPersonSpace">
		<image :src="imgUrl" :mode="imgMode" lazy-load />
	</view>
</template>

<script>
	export default {
		props: {
			imgHeight:String,
			imgWidth:String,
			imgUrl: String,
			imgMode: {
				type: String,
				default: 'widthFix'
			}
		},
		methods:{
			openPersonSpace:function () {
				uni.navigateTo({
					url: '../../pages/person-space/person-space'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.imageContainer {
		width: 100upx;
		height: 100upx;
	
		border-radius: 100%;
		overflow: hidden;
		flex-grow: 0;
		
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>
