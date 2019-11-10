<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x="true" class="uni-swiper-tab" :style="{'border-bottom':isShowBottomBorder?'':'none'}"
		 scroll-with-animation :scroll-left="scrollLeft">
			<block v-for="(item,index) in navBarDates" :key="index">
				<view class="swiper-tab-list nav-item" v-bind:id="'tabNum'+'index'" :style="{width:getNavItemWidth+'%'}" :class="{activit:index==navBartClick}"
				 @tap="navBarClick(index)">
					{{item.name}}
					<view class="navbarUnderLine" v-show="index==navBartClick"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			isShowBottomBorder: {
				type: Boolean,
				default: true
			},
			navBarDates: Array,
			navBartSelect: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				scrollLeft: 0,
				navBartClick: 0,

				windowWidth: 0,
				navItemWidth: 0
			}
		},
		mounted() {
			uni.getSystemInfo({
				success: (res) => {
					this.windowWidth = res.windowWidth
					console.log("屏幕宽度:" + this.windowWidth);
				}
			})
		},
		onLoad() {

		},
		methods: {
			navBarClick(index) {
				this.$emit("navBarClick", index);
				this.navBartClick = index;
			},
			setScrollLeft: async function() {
				let leftWidthSum = this.navItemWidth * this.navBartSelect;
				console.log("当前滑动距离:" + leftWidthSum);
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft = leftWidthSum >= winWidth ? (leftWidthSum - winWidth + this.navItemWidth) : 0
				console.log("当前左边距离:" + this.scrollLeft);
			},
			getWidth: function(id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			}
		},
		watch: {
			navBartSelect(index) {
				// console.log("页面发生变化:" + index);
				this.navBartClick = index;
				if (this.navBarDates.length >= 5) {
					this.navItemWidth = this.windowWidth / 5;
					console.log(this.navItemWidth);
				}
				this.setScrollLeft();
			}
		},
		computed: {
			getNavItemWidth() {
				if (this.navBarDates.length >= 5) {
					return 100 / 5;
				} else {
					return 100 / this.navBarDates.length;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-item.activit {
		color: #373737;
	}

	.nav-item {
		font-weight: bold;
		color: #969696;
	}

	.navbarUnderLine {
		background-color: #FEDE33;
		height: 6upx;
		width: 80upx;
		margin: 0 auto;
		border-radius: 6upx;
	}
</style>
