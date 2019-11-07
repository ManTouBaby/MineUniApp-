<template>
	<view>
		<uni-nav-bar fixed="true" :border="false" class="nav-container" :status-bar="true" @click-left="signCar" @click-right="doPublish">
			<block slot="left">
				<view class="nav-left mf-center">
					<view class="icon iconfont icon-qiandao" />
				</view>
			</block>
			<view class="nav-center mf-center">
				<block v-for="(item,index) in navDates" :key="item.id">
					<view class="nav-center-item mf-horizontal-center" :class="{activity:index==navBartSelect}" @tap="navClick(index)">
						{{item.titleName}}
						<view v-show="index==navBartSelect" />
					</view>
				</block>

			</view>
			<block slot="right">
				<view class="nav-right">
					<view class="icon iconfont icon-bianji1" />
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "../uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {
			uniNavBar
		},
		props: {
			navDates: Array,
			navBartSelect: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				selectPage: this.navBartSelect
			}
		},
		methods: {
			navClick(index) {
				this.$emit("navClick", index);
				this.selectPage = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-container {
		view {
			font-size: 47upx;
		}

		.nav-left {

			view {
				margin-left: 27upx;
				color: #FF961A;
			}
		}

		.nav-center {
			margin-left: -44upx;

			view {
				font-size: 35upx;
				font-weight: bold;
			}

			.nav-center-item {
				padding: 0 16upx;
				position: relative;
				color: #969696;

				view {
					background-color: #FEDE33;
					height: 6upx;
					width: 80upx;
					margin: 0 auto;
					border-radius: 6upx;

					position: absolute;
					bottom: 2upx;
					left: 50%;
					margin-left: -40upx;
				}

				&.activity {
					color: #373737;
				}
			}
		}
	}
</style>
