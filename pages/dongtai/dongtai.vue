<template>
	<view>
		<!-- 标题栏 -->
		<uni-nav-bar class="nav-container" :status-bar="true" @click-left="backClick" @click-right="publish">
			<block slot="left">
				<view class="nav-left mf-center">
					<view class="icon iconfont icon-qiandao" />
				</view>
			</block>
			<view class="nav-center">
				ssdsdsd
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
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.nav-container {
		view{
			font-size: 47upx;
		}
		.nav-left {
			view {
				margin-left: 27upx;
				color: #FF961A;
			}
		}

		.nav-right {
			view {
				// font-size: 35upx;
				
			}
		}

		.nav-center {
			
		}
	}
</style>
