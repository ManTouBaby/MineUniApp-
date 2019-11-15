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
		<view v-if="islogin" class="user-info-container mf-horizontal-start" @tap="gotoSpace" hover-class="m-click-bg">
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
			<block v-for="(item,index) in menuList" :key="index">
				<common-menu-item :itemName="item.menuName" :itemValue="item.menuValue"></common-menu-item>
			</block>
		</view>
		<view class="ads-container">
			<image src="../../static/datapic/13.jpg" mode="aspectFill" />
		</view>
		<view class="setting-list">
			<m-setting-item iconClass="icon iconfont icon-huiyuanvip" :itemName="'糗百认证'" :isShowRightArrow="true"/>
			<m-setting-item v-if="islogin" iconClass="icon iconfont icon-icon_im_keyboard" :itemName="'审核糗事'" :isShowRightArrow="true"/>
			<m-setting-item iconClass="icon iconfont icon-liulan" :itemName="'浏览历史'" :isShowRightArrow="true"/>
		</view>
	</view>
</template>

<script>
	import mSettingItem from "@/components/base/m-setting-item.vue"
	import commonMenuItem from '../../components/common/common-menu-item.vue'
	export default {
		components: {
			mSettingItem,
			commonMenuItem
		},
		data() {
			return {
				islogin: true,
				menuList: [{
						menuName: '糗事',
						menuValue: 87,
						menuIndex: 0
					},
					{
						menuName: '动态',
						menuValue: 10165,
						menuIndex: 0
					},
					{
						menuName: '评论',
						menuValue: 223,
						menuIndex: 0
					},
					{
						menuName: '收藏',
						menuValue: 45,
						menuIndex: 0
					}
				]
			}
		},
		onNavigationBarButtonTap(res) {
			uni.navigateTo({
				url:'../setting/setting'
			});
		},
		methods: {
			gotoSpace() {
			
			}
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
		}

		.ads-container {
			height: 220upx;
			padding: 16upx 0 24upx;
			border-bottom: solid 1upx #F1F1F1;

			image {
				width: 100%;
				height: 220upx;
				border-radius: 16upx;
			}
		}

	}
</style>
