<template>
	<view>
		<!-- 标题栏 -->
		<!-- #ifdef APP-PLUS -->
		<new-nav :navDates="navBarDates" :navBartSelect="selectNav" @navClick="navClick"></new-nav>
		<!-- #endif -->

		<view class="uni-tab-bar">
			<swiper :style="{height:pageHeight+'px'}" @change="pageChange" :current="currentPage">
				<swiper-item>
					<loadAndRefreshLayout :loadMoreStatus="gzDataInfo.loadMoreStatus" @loadMore="loadMoreGZ">
						<block slot="content">
							<block v-for="(item ,index) in gzDataInfo.dateList" :key="index">
								<common-item :item="item"></common-item>
							</block>
						</block>
					</loadAndRefreshLayout>
				</swiper-item>
				<swiper-item>
					<view class="huaTiContainer uni-tab-bar">
						<uni-search-bar class="searchBar" placeholder="搜索内容" @confirm="search" />
						<view class="topicImg">
							<image src="../../static/datapic/16.jpg" mode="widthFix"></image>
						</view>
					</view>
				</swiper-item>
			</swiper>

		</view>

	</view>
</template>

<script>
	// import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import commonItem from "../../components/common/common-item.vue"
	import newNav from "../../components/common/new-nav.vue"
	import uniSearchBar from '../../components/uni-search-bar/uni-search-bar.vue'
	import json from '../../json.js'
	export default {
		components: {
			newNav,
			commonItem,
			uniSearchBar
		},
		data() {
			return {
				navBarDates: [{
						titleName: "关注",
						titleIndex: 0
					},
					{
						titleName: "话题",
						titleIndex: 0
					}
				],
				gzDataInfo: {
					loadMoreStatus: 0,
					total: 5,
					current: 0,
					dateList: []
				},

				selectNav: 0,
				currentPage: 0,
				pageHeight: 0,

				isFirstLoadGZ: true,
				isFirstLoadHT: true
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					// this.pageHeight = res.windowHeight - uni.upx2px(100);
					this.pageHeight = res.windowHeight;

				}
			})
			this.getGZDates();
		},
		methods: {
			//进入发布页面
			doPublish: () => {
				// console.log("进入打卡");
				uni.navigateTo({
					url: '../publish/publish'
				});
			},
			//进入签到打卡页面
			signCar: () => {
				console.log("进入签到");
			},
			//单击导航标题栏
			navClick(index) {
				this.currentPage = index;
			},
			//监听页面滑动
			pageChange(e) {
				let index = e.detail.current;
				// console.log(index);
				this.selectNav = index;
			},

			//获取关注数据
			getGZDates(isLoadMore) {
				if (this.isFirstLoadGZ || isLoadMore) {
					if (isLoadMore) this.gzDataInfo.loadMoreStatus = 1;
					this.isFirstLoadGZ = false;
					let dates = json.dongtaiGZDates;
					let localDates = this.gzDataInfo.dateList;
					setTimeout(function() {
						for (let i = 0; i < 5; i++) {
							let index = parseInt(Math.random() * dates.length);
							let item = dates[index];
							localDates.push(item);
						}
						if (isLoadMore) this.gzDataInfo.loadMoreStatus = 0;
					}, 300)
				}
			},
			loadMoreGZ() {
				if (this.gzDataInfo.current < this.gzDataInfo.total) {
					this.getGZDates(true);
					this.gzDataInfo.current++;
				} else {
					this.gzDataInfo.loadMoreStatus = 2;
				}
			},

			//获取话题数据


		}
	}
</script>

<style lang="scss" scoped>
	.huaTiContainer {
		
		.topicImg {
		padding: 0 16upx;
			image {
				width: 100%;
				height: 100upx;
				border-radius: 16upx;
				

				// border-radius: 16upx;
				// overflow: hidden;
				// height: 120upx;

			}
		}
	}
</style>
