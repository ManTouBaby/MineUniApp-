<template>
	<!-- 加载跟多 -->
	<view class="view-load-more">
		{{loadMoreLable}}
	</view>
</template>

<script>
	export default {
		props: {
			loadMoreStatus: {
				type: Number,
				default: 0
			} //0:加载更多数据  1:数据加载中...  2:没有更多数据可加载
		},
		data() {
			return {
				loadMoreLable: "上拉加载更多"
			};
		},
		methods: {
			loadMore() {
				this.$emit("loadMore");
			}
		},
		watch: {
			loadMoreStatus() {
				switch (this.loadMoreStatus) {
					case 0:
					this.loadMoreLable ="加载更多数据"
						break;
					case 1:
					this.loadMoreLable ="数据加载中.."
						break
					case 2:
					this.loadMoreLable ="没有更多数据可加载"
						break

				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.view-load-more {
		text-align: center;
		padding: 32upx 0;
		color: #333333;
	}
</style>

