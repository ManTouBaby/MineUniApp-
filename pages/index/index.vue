<template>
	<view class="content">
		<navBar :navBarDates='navBarDates' :navBartSelect="navBartSelect" @navBarClick="navBarClick"></navBar>

		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:pageHeight+'px'}" @change="pageChange" :current="currentPage">
				<swiper-item v-for="(item,index) in pageDates" :key="index">
					<loadAndRefreshLayout :loadMoreStatus="item.loadMoreStatus" @loadMore="loadMore">
						<!-- 展示内容 -->
						<block slot="content">
							<block v-for="(item1,index1) in item.pageDataList" :key='index1'>
								<indexItem :item='item1' :index='index1'></indexItem>
							</block>
						</block>
					</loadAndRefreshLayout>
				</swiper-item>
			</swiper>

		</view>

	</view>
</template>

<script>
	import json from "../../json.js"

	export default {
		data() {
			return {
				pageDates: [],
				navBarDates: [],


				navBartSelect: 0,

				pageHeight: Number,
				currentPage: 0,
				
				// loadMoreStatus:0
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.pageHeight = res.windowHeight - uni.upx2px(100)
				}
			})

			this.navBarDates = json.indexNavBarDates;
			this.navBarDates.forEach(item => {
				this.pageDates.push({
					pageId: item.index,
					loadMoreStatus:0,
					total:5,
					current:0,
					pageDataList: []
				})
			})
			this.getPageByIndex(0,false);
			this.navBartSelectStr = 'id0'

		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search'
			});
		},
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0:
				console.log("单击签到按钮");
					break;
				case 1:
				// console.log("单击发布按钮");
				uni.navigateTo({
					url: '../publish/publish'
				});
					break;
			}
		},
		methods: {
			getPageByIndex(index,isLoadMore) {
				let indexDates = json.indexDatas;
				let pageData = this.pageDates[index];
				if (pageData.pageDataList.length > 0) {
					if(pageData.current==pageData.total){
						pageData.loadMoreStatus=2;
						return;
					}
					pageData.loadMoreStatus =1;
				}
				setTimeout(() => {
					for (var i = 0; i < 5; i++) {
						let index = Math.random() * indexDates.length;
						pageData.pageDataList.push(indexDates[parseInt(index)]);
					}
					// console.log(indexDates);
					// console.log(pageData);
					pageData.current++;
					pageData.loadMoreStatus =0;
				}, 500)
			},

			pageChange(e) {
				console.log(e.detail.current)
				let index = e.detail.current;
				this.getPageByIndex(index,false);
				this.navBartSelect = index;
				this.currentPage = index;
				// console.log(this.navBartSelectStr);
			},
			navBarClick(index) {
				console.log(index);
				this.getPageByIndex(index,false);
				this.currentPage = index;
			},
			loadMore() {
				this.getPageByIndex(this.currentPage,true);
			}

		}
	}
</script>

<style lang="scss">

</style>
