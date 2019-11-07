<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x="true" class="uni-swiper-tab" scroll-with-animation :scroll-into-view="navBartSelectStr">
			<block v-for="(item,index) in navBarDates" :key="index">
				<view class="swiper-tab-list nav-item" :class="{activit:index==navBartSelect}" @tap="navBarClick(index)">
					{{item.name+item.index}}
					<view class="navbarUnderLine" v-show="index==navBartSelect"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			navBarDates: Array,
			navBartSelect: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				navBartSelectStr: "id"+this.navBartSelect,
			}
		},
		methods: {
			navBarClick(index) {
				this.$emit("navBarClick", index);
				this.navBartSelectStr = `id${index}`;
				// console.log();
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
