<template>
	<view class="viewBox">
		<scroll-view scroll-y="true" class="list" @scrolltolower="loadMore" @scrolltoupper="refresh">
			<!-- 展示内容 -->
			<slot name="content"></slot>

			<!-- 加载跟多 -->
			<load-more :loadMoreStatus="loadMoreStatus"></load-more>

		</scroll-view>
	</view>
</template>

<script>
	import loadMore from "@/components/base/load-more.vue"
	export default {
		components:{
			loadMore
		},
		props: {
			loadMoreStatus: {
				type: Number,
				default: 0
			}, //0:加载更多数据  1:数据加载中...  2:没有更多数据可加载
			refreshStatus: Number
		},
		data() {
			return {
				
			};
		},
		methods: {
			loadMore() {
				this.$emit("loadMore");
			},
			refresh() {
				this.$emit("refresh")
			}
		}
	}
</script>

<style lang="scss" scoped>
.viewBox{
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	height: 100%;
	.view-load-more {
		text-align: center;
		padding: 32upx 0;
		color: #333333;
	}
}
</style>
