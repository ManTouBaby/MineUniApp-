<template>
	<view class="content uni-tab-bar">
		<!-- 图片背景 -->
		<view class="imgBg">
			<image src="../../static/topicpic/13.jpeg" mode="aspectFill" lazy-load></image>
		</view>
		<!-- 话题内容 -->
		<view class="topicContent">
			<!-- 标题 -->
			<view class="topicTitle mf-horizontal-start">
				<image src="../../static/topicpic/13.jpeg" mode="aspectFill" lazy-load=""></image>
				<view class="">
					话题标题
				</view>
			</view>
			<!-- 动态  今日 -->
			<view class="dynamicCount mf-horizontal-start">
				<view class="">
					动态12313
				</view>
				<view class="">
					动态12313
				</view>
			</view>
			<!-- 内容描述 -->
			<view class="topicContentDetail">
				面试官:在电梯中巧遇马云你会怎么应对？90后女孩的回答当场被录用
			</view>
		</view>

		<view class="recomment">
			<navBar :isShowBottomBorder="false" :navBarDates='navBarDates' :navBartSelect="navBartSelect" @navBarClick="navBarClick"></navBar>


			<block v-for="(item,index) in pageDates" :key="index">
				<view v-show="currentPage==index">
					<!-- 展示内容 -->
					<block v-for="(item1,index1) in item.pageDataList" :key='index1'>
						<common-item :id="'id-'+currentPage+index1" :item="item1"></common-item>
					</block>
					<loadMore :loadMoreStatus="item.loadMoreStatus"></loadMore>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import json from "../../json.js"
	import commonItem from "../../components/common/common-item.vue"
	// import topicItem from "../../components/topic/topicItem.vue"
	export default {
		components: {
			commonItem
		},
		data() {
			return {
				pageDates: [],
				navBarDates: [],
				navBartSelect: 0,

				pageHeight: Number,
				currentPage: 0
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:'话题标题'
			})
			this.navBarDates = json.topicRecommentNav;
			this.navBarDates.forEach(item => {
				this.pageDates.push({
					pageId: item.index,
					loadMoreStatus: 0,
					total: 5,
					current: 0,
					pageDataList: []
				})
			})
			this.getPageByIndex();

		},
		onReachBottom() {
			this.getPageByIndex();
		},
		onPullDownRefresh() {
			this.onRefreshDate();
		},
		methods: {
			onRefreshDate() {
				let indexDates = json.dongtaiGZDates;
				let pageData = this.pageDates[this.currentPage];
				setTimeout(() => {
					let date = [];
					for (let i = 0; i < 4; i++) {
						let index = Math.random() * indexDates.length;
						date.push(indexDates[parseInt(index)]);
					}
					pageData.current++;
					pageData.loadMoreStatus = 0;
					pageData.pageDataList = date;
					
					uni.stopPullDownRefresh();
				}, 2000);
			},
			getPageByIndex() {
				let indexDates = json.dongtaiGZDates;
				let pageData = this.pageDates[this.currentPage];
				if (pageData.pageDataList.length > 0) {
					if (pageData.current == pageData.total) {
						pageData.loadMoreStatus = 2;
						return;
					}
					pageData.loadMoreStatus = 1;
				}
				setTimeout(() => {
					for (let i = 0; i < 4; i++) {
						let index = Math.random() * indexDates.length;
						pageData.pageDataList.push(indexDates[parseInt(index)]);
					}
					pageData.current++;
					pageData.loadMoreStatus = 0;
				}, 500)
			},
			navBarClick(index) {
				console.log(index);
				this.currentPage = index;
				if (this.pageDates[index].pageDataList.length < 1) this.getPageByIndex(index, false);
			},
			loadMore() {
				this.getPageByIndex(this.currentPage);
			}

		}
	}
</script>

<style scoped lang="scss">
	.swiper-item {
		height: 100%;
	}

	.content {

		// flex: 1;
		// flex-flow: ;
		// height: 100%;
		.imgBg {
			width: 100%;
			height: 300upx;
			position: relative;
			overflow: hidden;

			image {
				width: 100%;
				height: 300upx;
				filter: blur(10upx);

				position: absolute;
				top: 0;
				left: 0;
			}
		}

		.topicContent {
			padding: 0 16upx;

			.topicTitle {
				position: relative;

				image {
					width: 160upx;
					height: 160upx;
					border-radius: 18upx;

					position: absolute;
					top: -90upx;
				}

				view {
					font-size: 34upx;
					font-weight: bold;
					margin-left: 176upx;

				}
			}

			.dynamicCount {
				margin-top: 28upx;

				view {
					font-size: 28upx;
					color: #D3D3D3;
				}
			}

			.topicContentDetail {
				margin-top: 20upx;
				font-size: 32upx;
				color: #B1B1B1;
			}
		}

		.recomment {
			height: 100%;
		}
	}
</style>
