<template>
	<view>
		<navBar :navBarDates='navBarDates' :navBartSelect="navBartSelect" @navBarClick="navBarClick"></navBar>

		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:pageHeight+'px'}" @change="pageChange" :current="currentPage">
				<swiper-item v-for="(item,index) in pageDates" :key="index">
					<loadAndRefreshLayout :loadMoreStatus="item.loadMoreStatus" @loadMore="loadMore">
						<!-- 展示内容 -->
						<block slot="content">
							<block v-for="(item1,index1) in item.pageDataList" :key='index1'>
								<topicItem :topicItem="item1"></topicItem>
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

	import topicItem from "../../components/topic/topicItem.vue"
	export default {
		components:{
			topicItem
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
			uni.getSystemInfo({
				success: (res) => {
					// this.pageHeight = res.windowHeight - uni.upx2px(100)
					this.pageHeight = res.windowHeight
				}
			})

			this.navBarDates = json.indexNavBarDates;
			this.navBarDates.forEach(item => {
				this.pageDates.push({
					pageId: item.index,
					loadMoreStatus: 0,
					total: 5,
					current: 0,
					pageDataList: []
				})
			})
			this.getPageByIndex(0, false);
			this.navBartSelectStr = 'id0'

		},
		methods: {
			getPageByIndex(index) {
				let indexDates = json.dongtaiHTDates;
				let pageData = this.pageDates[index];
				if (pageData.pageDataList.length > 0) {
					if (pageData.current == pageData.total) {
						pageData.loadMoreStatus = 2;
						return;
					}
					pageData.loadMoreStatus = 1;
				}
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						let index = Math.random() * indexDates.length;
						pageData.pageDataList.push(indexDates[parseInt(index)]);
					}
					pageData.current++;
					pageData.loadMoreStatus = 0;
				}, 500)
			},

			pageChange(e) {
				console.log(e.detail.current)
				let index = e.detail.current;
				if (this.pageDates[index].pageDataList.length < 1) this.getPageByIndex(index, false);
				this.navBartSelect = index;
				this.currentPage = index;
				// console.log(this.navBartSelectStr);
			},
			navBarClick(index) {
				console.log(index);
				if (this.pageDates[index].pageDataList.length < 1) this.getPageByIndex(index, false);
				this.currentPage = index;
			},
			loadMore() {
				this.getPageByIndex(this.currentPage);
			}

		}
	}
</script>

<style scoped lang="scss">
.swiper-box{
	padding: 0 16upx;
}
</style>
