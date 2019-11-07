<template>
	<view>
		<!-- 标题栏 -->
		<!-- #ifdef APP-PLUS -->
		<new-nav :navDates="navBarDates" :navBartSelect="selectNav"  @navClick="navClick"></new-nav>
		<!-- #endif -->

	
				<swiper :style="{height:pageHeight+'px'}"  @change="pageChange" :current="currentPage">
					<swiper-item>
						<loadAndRefreshLayout :loadMoreStatus="gzDataInfo.loadMoreStatus" @loadMore="loadMore">
							<block v-for="(item ,index) in gzDataInfo.dateList" :key="index">
								<common-item :item="item"></common-item>
							</block>
						</loadAndRefreshLayout>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">话题</view>
					</swiper-item>
				</swiper>
		

	</view>
</template>

<script>
	// import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import commonItem from "../../components/common/common-item.vue"
		import newNav from "../../components/common/new-nav.vue"
	import json from '../../json.js'
	export default {
		components: {
			newNav,
			commonItem
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
					loadMoreStatus:0,
					total:5,
					current:0,
					dateList:[]
				},
				
				selectNav:0,
				currentPage:0,
				pageHeight:0
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.pageHeight = res.windowHeight - uni.upx2px(100)
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
			//获取关注数据
			getGZDates() {
				let dates = json.dongtaiGZDates;
				let localDates = this.gzDataInfo.dateList;
				setTimeout(function() {
					for (let i = 0; i < 5; i++) {
						let index = parseInt(Math.random() * dates.length);
						let item = dates[index];
						localDates.push(item);
					}
				}, 300)

			},
			//单击导航标题栏
			navClick(index){
				this.currentPage = index;
			},
			pageChange(e){
				let index = e.detail.current;
				// console.log(index);
				this.selectNav = index;
			}

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
