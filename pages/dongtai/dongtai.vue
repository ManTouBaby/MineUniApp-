<template>
	<view>
		<!-- 标题栏 -->
		<uni-nav-bar fixed="true" class="nav-container" :status-bar="true" @click-left="signCar" @click-right="doPublish">
			<block slot="left">
				<view class="nav-left mf-center">
					<view class="icon iconfont icon-qiandao" />
				</view>
			</block>
			<view class="nav-center mf-center">
				<block v-for="(item,index) in navBarDates" :key="item.id">
					<view class="nav-center-item mf-horizontal-center" :class="{activity:index==selectPage}">
						{{item.titleName}}
						<view v-show="index==selectPage" />
					</view>
				</block>

			</view>
			<block slot="right">
				<view class="nav-right">
					<view class="icon iconfont icon-bianji1" />
				</view>
			</block>
		</uni-nav-bar>

		<view class="comment-list-box mf-horizontal-space-between">
			<view class="box-left">
				<image src="../../static/pic/demo5.jpg" mode="widthFix"></image>
			</view>
			<view class="box-right">
				<view class="line1 mf-horizontal-space-between">
					<view class="mf-horizontal-start mf-vertical-center">
						<view>
							昵称
						</view>
						<view class="icon iconfont icon-nan">
							25
						</view>
					</view>
					<view class="mf-horizontal-end mf-vertical-center">
						<view class="icon iconfont icon-zengjia">
						关注
						</view>
						<view class="icon iconfont icon-guanbi">
							
						</view>
					</view>
				</view>
				<view class="line2 mf">
					六道快手家庭菜，好吃又下饭，家人都喜欢
				</view>
				<view class="line3">
					<image src="../../static/datapic/1.jpg" mode="widthFix"></image>
				</view>
				<view class="line4 mf-horizontal-space-between">
						<view class="mf-horizontal-start mf-vertical-center">
							深圳 龙岗
						</view>
						<view class="mf-horizontal-end mf-vertical-center">
							<view class="icon iconfont icon-zhuanfa">
								352
							</view>
							<view class="icon iconfont icon-pinglun1">
								24
							</view>
							<view class="icon iconfont icon-ccdbaa">
								45321
							</view>
						</view>
				</view>
			</view>
		</view>

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
				navBarDates: [{
						titleName: "关注",
						titleIndex: 0
					},
					{
						titleName: "话题",
						titleIndex: 0
					}
				],

				selectPage: 0
			}
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment-list-box {
		padding: 16upx;
		border-bottom: solid #F1F1F1 2upx;
		.box-left {
			// display: flex;
			flex: 0;
			image {
				width: 140upx;
				height: 140upx;
				border-radius: 100%;
			}
		}

		.box-right {
			// display: flex;
			flex: 1;
			margin-left: 8upx;
			
			.line3{
				width: 100%;
				image{
					height: 300upx;
					width: 100%;
					border-radius: 16upx;
				}
			}
		}
	}

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
