<template>
	<view class="updateItem mf-horizontal-space-between  animated fadeInLeft m-border-bottom" @tap="topicItemClick">
		<view class="updateItemImg">
			<image :src="topicItem.imgUrl" mode="aspectFill" lazy-load></image>
		</view>
		<view class="updateItemContent">
			<view class="">
				{{topicItem.title}}
			</view>
			<view class="">
				{{topicItem.content}}
			</view>
			<view class="">
				动态 {{topicItem.dynamicCount}}  今日 {{topicItem.todayCount}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			topicItem:Object
		},
		data() {
			return {

			};
		},
		methods:{
			topicItemClick(){
				uni.navigateTo({
					url: '../../pages/topic-detail/topic-detail'
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.updateItem {
		padding: 16upx 16upx 16upx 0;
		// border-bottom: #e1e1e1 1upx solid;
		.updateItemImg {
			width: 180upx;
			height: 180upx;

			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
				border-radius: 8upx;
			}
		}

		.updateItemContent {
			flex: 1;
			margin-left: 16upx;

			view {
				font-size: 28upx;
				color: #B4B4B4;
			}

			view:nth-of-type(1) {
				font-size: 36upx;
				color: #373737;
			}

		}
	}
</style>
