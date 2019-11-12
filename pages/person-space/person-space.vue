<template>
	<view>
		<!-- 个人信息 -->
		<view class="person-header">
			<image class="header-bg" src="../../static/datapic/20.jpg" mode="aspectFill"></image>
			<view class="header-container">
				<view>
					<view class="mf-horizontal-center">
						<image class="user-pic" src="../../static/userpic/6.jpg" mode="aspectFill" />
					</view>
					<view class="header-name mf-center">昵称
						<view class="tagSexAge">
							<tag-sex-age :age="12" :sex="1"></tag-sex-age>
						</view>
					</view>
					<view class="mf-horizontal-center">
						<view class="is-guang-zhu mf-center">关注</view>
					</view>

					<view class="header-menu mf-horizontal-start" v-if="true">
						<block v-for="(item,index) in menuDates">
							<common-menu-item :itemName="item.menuName" :itemValue="item.menuValue"></common-menu-item>
						</block>
					</view>
				</view>

			</view>
		</view>

		<!-- 隔断线 -->
		<view class="space-line" />

		<!--主页、糗事、动态-->
		<view class="qiushi-container">
			<navBar :isShowBottomBorder="false" :navBarDates='navBarDates' @navBarClick="navBarClick"></navBar>

			<view v-show="navBartSelect==0" class="home-page-container">
				<view class="accountContainer">
					账号信息
					<view>糗龄:1年8月6日</view>
					<view>糗百ID:d2d232d23</view>
				</view>
				<view class="m-line-space"></view>

				<view class="personalContainer">
					个人信息
					<view>星座:1年8月6日</view>
					<view>职业:IT</view>
					<view>故乡:广西贺州</view>
					<view>情感状态:已婚</view>
				</view>
				<view class="m-line-space"></view>
			</view>

			<view v-show="navBartSelect==1" class="qiushi-container">
				<block v-for="(item ,index) in qiushiDates" :key="index">
					<common-item :item="item"></common-item>
				</block>
			</view>
			<view v-show="navBartSelect==2" class="dynamic-container">
				<block v-for="(item ,index) in dynamicDates" :key="index">
					<common-item :item="item"></common-item>
				</block>
			</view>
		</view>

		<m-popup :isShow="isShow" :showType="'rightTop'" @onPopupOutsideClick="onPopupOutsideClick">
			<block>
				<view class="popup-item icon iconfont icon-sousuo" hover-class="activity" @tap="addBlack">
					拉黑
				</view>
				<view class="popup-item icon iconfont icon-qingchu" hover-class="activity" @tap="addRemark">
					备注
				</view>
			</block>
		</m-popup>
	</view>
</template>

<script>
	import mPopup from '../../components/base/m-popup.nvue'
	import tagSexAge from '../../components/common/tag-sex-age.vue'
	import commonMenuItem from '../../components/common/common-menu-item.vue'
	import commonItem from "../../components/common/common-item.vue"
	import json from '../../json.js'
	export default {

		components: {
			tagSexAge,
			commonMenuItem,
			commonItem,
			mPopup
		},
		data() {
			return {
				isShow: false,
				navBartSelect: 0,
				menuDates: [{
						menuName: '主页',
						menuValue: '12K'
					},
					{
						menuName: '糗事',
						menuValue: 1342
					},
					{
						menuName: '动态',
						menuValue: 897
					}
				],
				navBarDates: [],
				qiushiDates: [],
				dynamicDates: []
			};
		},
		onLoad() {
			this.navBarDates = json.userSpaceNav;
		},
		onNavigationBarButtonTap(res) {
			// console.log("单击菜单" + JSON.stringify(res));
			if (res.index == 0) {
				this.isShow = true;
			}
		},
		methods: {
			addBlack: function() {
				this.isShow = false;
			},
			addRemark: function() {
				this.isShow = false;
			},
			onPopupOutsideClick: function() {
				this.isShow = false;
			},
			navBarClick: function(index) {
				this.navBartSelect = index;
				console.log(this.navBartSelect);
				switch (index) {
					case 1:
						this.getQiuShiDates();
						break;
					case 2:
						this.getDynamicDates();
						break;
				}
			},
			getQiuShiDates: function() {
				setTimeout(() => {
					this.qiushiDates = this.getRandomDates();
				}, 1000)
			},
			getDynamicDates: function() {
				setTimeout(() => {
					this.dynamicDates = this.getRandomDates();
				}, 1000)
			},
			getRandomDates: function() {
				let jsonDates = json.dongtaiGZDates;
				let resultDates = [];
				for (let i = 0; i < 5; i++) {
					let item = jsonDates[parseInt(Math.random() * jsonDates.length)];
					resultDates.push(item);
				}
				return resultDates;
			}

		}
	}
</script>

<style lang="scss" scoped>
	
	.person-header {
		position: relative;

		.header-bg {
			position: absolute;
			top: 0;
			left: 0;

			width: 100%;
			height: 500upx;

		}

		.header-container {
			position: relative;
			width: 100%;
			height: 500upx;

			.user-pic {
				width: 160upx;
				height: 160upx;
				border-radius: 100%;

				margin-top: 100upx;
			}

			.header-name {
				color: #FFFFFF;

				.tagSexAge {
					margin-left: 8upx;
				}
			}

			.is-guang-zhu {
				display: inline-flex;
				margin-top: 16upx;
				padding: 0 20upx;
				border-radius: 8upx;
				background-color: #FFE933;
			}
		}

		.header-menu {
			position: absolute;
			bottom: -2upx;
			left: 0;

			background-color: #FFFFFF;
			width: 100%;
			border-radius: 16upx 16upx 0 0;
			padding: 16upx 0;
		}
	}

	.space-line {
		height: 24upx;
		background-color: #f1f1f1;
	}

	.home-page-container {
		padding: 0 32upx;

		.accountContainer,
		.personalContainer {
			margin-top: 24upx;
			margin-bottom: 24upx;

			view {
				color: #AAAAAA;
				font-size: 24upx;
			}

		}
	}
</style>
