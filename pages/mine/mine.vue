<template>
	<view class="mine-container">
		<view v-if="!islogin">
			<other-login></other-login>
			
			<labelEnter @labelEnterClick="accountLogin">账号密码登录</labelEnter>
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
	import otherLogin from "../../components/common/other-login.vue"
	import labelEnter from "../../components/common/label-enter.vue"
	export default {
		components: {
			mSettingItem,
			commonMenuItem,
			otherLogin,
			labelEnter
		},
		data() {
			return {
				islogin: false,
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
			
			},
			accountLogin:function () {
				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.mine-container {
		padding: 0 16upx;



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
