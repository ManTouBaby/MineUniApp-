<template>
	<view class="mine-container">
		<view v-if="!islogin" class="loginContainer">
			<view v-if="false" class="loginTypeTitle mf-horizontal-center">
				选择登录方式
			</view>
			<view class="loginTypeContainer mf-horizontal-space-between">
				<view class="icon iconfont icon-weixin mf-horizontal-center mf-vertical-center"></view>
				<view class="icon iconfont icon-QQ  mf-horizontal-center mf-vertical-center"></view>
				<view class="icon iconfont icon-xinlangweibo  mf-horizontal-center mf-vertical-center"></view>
			</view>

			<view class="accountLogin mf-horizontal-center">
				账号密码登录
				<view class="icon iconfont icon-jinru mf-vertical-center"></view>
			</view>
		</view>
		<view v-if="islogin" class="user-info-container mf-horizontal-start">
			<image src="../../static/userpic/10.jpg" mode="widthFix" />
			<view class="user-content mf-vertical-center">
				<view>
					昵称
					<view class="mf-horizontal-start">
						<view>总访客 0</view>
						<view>今日 0</view>
					</view>
				</view>

			</view>
			<view class="icon iconfont icon-jinru mf-vertical-center"></view>
		</view>
		<view class="mine-menu-container mf-horizontal-center">
			<view>
				<view class="mf-center">0</view>
				<view class="mf-center">糗事</view>
			</view>
			<view>
				<view class="mf-center">0</view>
				<view class="mf-center">动态</view>
			</view>
			<view>
				<view class="mf-center">0</view>
				<view class="mf-center">评论</view>
			</view>
			<view>
				<view class="mf-center">0</view>
				<view class="mf-center">收藏</view>
			</view>
		</view>
		<view class="ads-container">
			<image src="../../static/datapic/13.jpg" mode="aspectFill" />
		</view>
		<view class="setting-list">
			<view class="setting-item mf-horizontal-space-between">
				<view class="icon iconfont icon-liulan">
					浏览历史
				</view>
				<view class="icon iconfont icon-jinru mf-vertical-center"></view>
			</view>
			<view class="setting-item mf-horizontal-space-between">
				<view class="icon iconfont icon-huiyuanvip">
					糗百认证
				</view>
				<view class="icon iconfont icon-jinru mf-vertical-center"></view>
			</view>
			<view  v-if="islogin" class="setting-item mf-horizontal-space-between">
				<view class="icon iconfont icon-icon_im_keyboard">
					审核糗事
				</view>
				<view class="icon iconfont icon-jinru mf-vertical-center"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				islogin: false
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.mine-container {
		padding: 0 16upx;

		.loginContainer {
			padding: 0 100upx;

			.loginTypeTitle {
				margin: 16upx 0;
			}

			.loginTypeContainer {
				view {
					color: #FFFFFF;
					font-size: 44upx;
					width: 100upx;
					height: 100upx;
					border-radius: 100%;
				}

				view:nth-of-type(1) {
					background-color: #2BD19B;
				}

				view:nth-of-type(2) {
					background-color: #007AFF;
				}

				view:nth-of-type(3) {
					background-color: #FC7729;
				}
			}

			.accountLogin {
				color: #474747;
				margin-top: 36upx;

				view {
					margin-left: 8upx;
					color: #C6C6C6;
				}
			}
		}

		.user-info-container {
			padding: 12upx 20upx 12upx 16upx;

			image {
				width: 120upx;
				height: 120upx;
				flex-grow: 0;
				border-radius: 100%;
			}

			.user-content {
				flex: 1;
				margin-left: 24upx;

				&>view {
					font-size: 34upx;
					color: #242424;

					&>view {
						margin-top: 8upx;
						font-size: 20upx;
						color: #BCBCBC;
					}
				}
			}
		}

		.mine-menu-container {
			padding: 24upx 0;

			&>view {
				width: 24%;
				line-height: 1.2;

				view:first-child {
					color: #383838;
					font-size: 34upx;
				}

				view:last-child {
					color: #9F9F9F;
					font-size: 24upx;
				}
			}
		}

		.ads-container {
			height: 220upx;
			padding: 16upx 0 24upx;
			border-bottom: solid 1upx #F7F7F7;

			image {
				width: 100%;
				height: 220upx;
				border-radius: 16upx;
			}
		}

		.setting-list {
			.setting-item {
				padding:20upx 24upx;
				border-bottom: solid 1upx #F7F7F7;

				view:first-child {
					color: #343434;
					font-size: 28upx;
					&:before {
						font-size: 40upx;
						color: #57BBFF;
						margin-right: 8upx;
					}
				}

				view:last-child {
					color: #C6C6C6;
				}
			}

		}
	}
</style>
