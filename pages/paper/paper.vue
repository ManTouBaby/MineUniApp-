<template>
	<view class="paperContent">
		<m-popup :isShow="isShow" :showType="'rightTop'" @onPopupOutsideClick="onPopupOutsideClick">
			<block>
				<view class="popup-item icon iconfont icon-sousuo" hover-class="activity" @tap="addFriend">
					加糗友
				</view>
				<view class="popup-item icon iconfont icon-qingchu" hover-class="activity" @tap="clearNoRead">
					清除未读
				</view>
			</block>
		</m-popup>


		<block v-for="(item,index) in paperList.dates" :key="index">
			<paperItem :item="item"></paperItem>
		</block>
		<loadMore :loadMoreStatus="paperList.loadMoreStatus"></loadMore>
	</view>
</template>

<script>
	import mPopup from '../../components/base/m-popup.nvue'
	import paperItem from '../../components/paper/paperItem.vue'
	import json from '../../json.js'
	export default {
		components: {
			paperItem,
			mPopup
		},
		data() {
			return {
				paperList: {
					loadMoreStatus: 0,
					total: 3,
					current: 0,
					dates: []
				},
				isShow: false
			}
		},
		onLoad() {
			this.loadDates();
		},
		onNavigationBarButtonTap(res) {
			switch (res.index) {
				case 0: //糗友列表
					console.log(res.index+'糗友列表');
					uni.navigateTo({
						url: '../user-list/user-list'
					});
					break;
				case 1: //添加糗友
					this.isShow = true;
					console.log(res.index+'添加糗友');
					break;
			}
		},
		onReachBottom() {
			this.loadDates();
		},
		onPullDownRefresh() {
			setTimeout(() => {
				this.onRefreshDates();
				uni.stopPullDownRefresh();
			}, 2000)
		},
		methods: {
			onRefreshDates() {
				this.paperList.current = 0;
				this.paperList.dates = this.getDates();
			},
			loadDates() {
				if (this.paperList.current == 0) {
					this.paperList.dates = this.getDates();
				} else if (this.paperList.current <= 3) {
					this.paperList.loadMoreStatus = 1
					setTimeout(() => {
						this.paperList.dates = this.paperList.dates.concat(this.getDates());
						this.paperList.loadMoreStatus = 0
					}, 2000);
				} else {
					this.paperList.loadMoreStatus = 2
				}
				this.paperList.current++;
			},
			getDates() {
				let jsonDates = json.paperList;
				let result = [];
				for (let i = 0; i < 15; i++) {
					let index = parseInt(Math.random() * jsonDates.length);
					let item = jsonDates[index];
					result.push(item);
				}
				return result;
			},
			onPopupOutsideClick(){
				this.isShow = false;
			},
			addFriend(){
				console.log("添加糗友");
				this.isShow = false;
			},
			clearNoRead(){
				console.log("清除未读");
					this.isShow = false;
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.paperContent {
		padding: 0 16upx;
	}


	.popup-item {
		padding: 14px 24upx;
		width: 300upx;

		&:before {
			margin-right: 8upx;
		}
	}

	.activity {
		background: #e1e1e1;
	}
</style>
