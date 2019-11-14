<template>
	<view>
		<navBar fixed="true" :isShowBottomBorder="false" :navBarDates='navBarDates' :navBartSelect="navBartSelect" @navBarClick="navBarClick"></navBar>

		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:pageHeight+'px'}" @change="pageChange" :current="currentPage">
				<swiper-item v-for="(item,index) in pageDates" :key="index">
					<loadAndRefreshLayout :loadMoreStatus="item.loadMoreStatus" @loadMore="loadMore">
						<!-- 展示内容 -->
						<block slot="content">
							<block v-for="(item1,index1) in item.pageDataList" :key='index1'>
								<user-list-item :item1="item1"></user-list-item>
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
	import userListItem from '../../components/user-list/user-list-item.vue'
	export default {
		components: {
			userListItem
		},
		data() {
			return {
				pageDates: [],
				navBarDates: [],
				navBartSelect: 0,

				pageHeight: Number,
				currentPage: 0,

			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					// this.pageHeight = res.windowHeight - uni.upx2px(100)
					this.pageHeight = res.windowHeight
				}
			})

			this.navBarDates = json.userListNav;
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
		methods: {
			getPageByIndex() {
				let pageData = this.pageDates[this.currentPage];
				if (pageData.pageDataList.length > 0) {
					if (pageData.current == pageData.total) {
						pageData.loadMoreStatus = 2;
						return;
					}
					pageData.loadMoreStatus = 1;
				}
				setTimeout(() => {
					pageData.pageDataList = pageData.pageDataList.concat(this.getDates());
					pageData.current++;
					pageData.loadMoreStatus = 0;

					console.log(this.pageDates);
				}, 500)
			},
			 getDates  () {
				let jsonDates = json.userList;
				let result = [];
				 for (let i = 0; i < 15; i++) {
					let index = parseInt(Math.random() * jsonDates.length);
					let item = jsonDates[index];
					result.push(item);
				}
				return result;
			},
			navBarClick(index) {
				console.log(index);
				this.currentPage = index;
				if (this.pageDates[index].pageDataList.length < 1) this.getPageByIndex();
			},
			pageChange(e) {
				console.log(e.detail.current)
				let index = e.detail.current;
				this.navBartSelect = index;
				this.currentPage = index;
				if (this.pageDates[index].pageDataList.length < 1) this.getPageByIndex();
				// console.log(this.navBartSelectStr);
			},
			loadMore() {
				this.getPageByIndex();
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
