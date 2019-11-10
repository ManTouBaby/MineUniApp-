<template>
	<view>
		<!-- 标题栏 -->
		<new-nav :navDates="navBarDates" :navBartSelect="selectNav" @navClick="navClick" @clickLeft="signCar" @clickRight="doPublish"></new-nav>

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
					<view class="huaTiContainer">
						<loadAndRefreshLayout :loadMoreStatus="htDataInfo.topicList.loadMoreStatus" @loadMore="loadMoreHT">
							<block slot="content">
								<!-- 搜索栏 -->
								<view class="searchBar">
									<input type="text" placeholder="搜索内容" placeholder-class="mf-center icon iconfont icon-sousuo" />
								</view>
								<!-- 广告栏 -->
								<view class="bannerContainer">
									<swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000">
										<swiper-item v-for="(item,index) in htDataInfo.bannerDates" :key="index">
											<view class="swiper-item">
												<view>
													<image lazy-load :src="item.imgUrl" mode="aspectFill"></image>
												</view>
											</view>
										</swiper-item>
									</swiper>
								</view>

								<!-- 标签栏 -->
								<view class="topicTypeContainer">
									<view class="topicMore mf-horizontal-space-between">
										<view class="mf-vertical-center">热门分类</view>
										<view class="mf-vertical-center" @tap="openTopic">
											更多
											<view class="icon iconfont icon-jinru" />
										</view>
									</view>
									<view class="topicTypeList mf-horizontal-start">
										<block v-for="(item,index) in htDataInfo.hotTopic" :key="index">
											<view class="topicTypeItem mf-center">{{item.topicName}}</view>
										</block>
									</view>
								</view>

								<!-- 最近更新 -->
								<view class="new-update">
									<view class="updateTitle">
										最近更新
									</view>

									<block v-for="(topicItem,index) in htDataInfo.topicList.topicListDates" :key="index">
										<topicItem :topicItem="topicItem"></topicItem>
									</block>

								</view>
							</block>
						</loadAndRefreshLayout>


					</view>
				</swiper-item>
			</swiper>

		</view>

	</view>
</template>

<script>
	// import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import commonItem from "../../components/common/common-item.vue"
	import newNav from "../../components/topic/new-nav.vue"
	import topicItem from "../../components/topic/topicItem.vue"
	import json from '../../json.js'
	export default {
		components: {
			newNav,
			commonItem,
			topicItem
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
				htDataInfo: {
					bannerDates: [{
							imgUrl: '../../static/datapic/44.jpg'
						},
						{
							imgUrl: '../../static/datapic/45.jpg'
						},
						{
							imgUrl: '../../static/datapic/46.jpg'
						},
						{
							imgUrl: '../../static/datapic/47.jpg'
						}
					],
					hotTopic: [{
							topicName: "最新"
						},
						{
							topicName: "游戏"
						},
						{
							topicName: "打卡"
						},
						{
							topicName: "情感"
						},
						{
							topicName: "故事"
						},
						{
							topicName: "喜爱"
						}
					],
					topicList: {
						current: 0,
						total: 3,
						loadMoreStatus: 0,
						topicListDates: []
					}
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
			openTopic() {
				uni.navigateTo({
					url: '../topic/topic'
				});
			},
			//进入发布页面
			doPublish() {
				// console.log("进入打卡");
				uni.navigateTo({
					url: '../publish/publish'
				});
			},
			//进入签到打卡页面
			signCar() {
				console.log("进入签到" + this.selectNav);
			},
			//单击导航标题栏
			navClick(index) {
				this.currentPage = index;
				if (this.isFirstLoadHT) this.getHTDates();
			},
			//监听页面滑动
			pageChange(e) {
				let index = e.detail.current;
				// console.log(index);
				this.selectNav = index;
				if (this.isFirstLoadHT) this.getHTDates();

			},


			loadMoreGZ() {
				if (this.gzDataInfo.current < this.gzDataInfo.total) {
					this.getGZDates(true);
					this.gzDataInfo.current++;
				} else {
					this.gzDataInfo.loadMoreStatus = 2;
				}
			},
			loadMoreHT() {
				if (this.htDataInfo.topicList.current < this.htDataInfo.topicList.total) {
					this.getHTDates(true);
					this.htDataInfo.topicList.current++;
				} else {
					this.htDataInfo.topicList.loadMoreStatus = 2;
				}
			},

			//获取话题数据
			getHTDates(isLoadMore) {
				if (this.isFirstLoadHT || isLoadMore) {
					if (isLoadMore) this.htDataInfo.topicList.loadMoreStatus = 1;
					this.isFirstLoadHT = false;
					let dates = json.dongtaiHTDates;
					let localDates = this.htDataInfo.topicList.topicListDates;
					setTimeout(() => {
						for (let i = 0; i < 5; i++) {
							let index = parseInt(Math.random() * dates.length);
							let item = dates[index];
							localDates.push(item);
						}
						if (isLoadMore) this.htDataInfo.topicList.loadMoreStatus = 0;
					}, 300)
				}
			},
			//获取关注数据
			getGZDates(isLoadMore) {
				if (this.isFirstLoadGZ || isLoadMore) {
					if (isLoadMore) this.gzDataInfo.loadMoreStatus = 1;
					this.isFirstLoadGZ = false;
					let dates = json.dongtaiGZDates;
					let localDates = this.gzDataInfo.dateList;
					setTimeout(() => {
						for (let i = 0; i < 5; i++) {
							let index = parseInt(Math.random() * dates.length);
							let item = dates[index];
							localDates.push(item);
						}
						if (isLoadMore) this.gzDataInfo.loadMoreStatus = 0;
					}, 300)
				}
			},


		}
	}
</script>

<style lang="scss" scoped>
	.huaTiContainer {
		height: 100%;
		.searchBar {
			margin-top: 16upx;
			padding: 0 16upx;

			input {
				background-color: #F4F4F4;
				height: 56upx;
				border-radius: 8upx;
				padding: 8upx 0;
				font-size: 28upx;
				placeholder-color: #B4B4B4;
			}
		}


		.bannerContainer {

			// height: 100%;
			.swiper-item {
				padding: 16upx;
				height: 100%;

				image {
					width: 100%;
					height: 270upx;
					border-radius: 16upx;
				}
			}
		}

		.topicTypeContainer {
			padding: 16upx 16upx 32upx;
			border-top: #e1e1e1 1upx solid;
			border-bottom: #e1e1e1 1upx solid;

			.topicMore {
				view:first-child {
					font-size: 36upx;
				}

				view:last-child {
					color: #AAAAAA;
					font-size: 34upx;

					view {
						margin-left: 4upx;
					}
				}
			}

			.topicTypeList {
				margin-top: 16upx;

				.topicTypeItem {
					flex: 1;
					background-color: #F7F7F7;
					color: #ACACAC;
					border-radius: 8upx;
					margin-right: 8upx;
				}
			}
		}

		.new-update {
			padding: 16upx;

			.updateTitle {
				margin-bottom: 16upx;
			}


		}
	}
</style>
