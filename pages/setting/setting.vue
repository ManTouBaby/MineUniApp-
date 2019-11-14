<template>
	<view>
		<block v-for="(item,index) in settingDates" :key="index">
			<m-setting-item :itemIndex="item.settingIndex" :itemName="item.settingName" @onItemClick="onItemClick"
			 :isShowRightArrow="true" />
		</block>

		<button class="loginOut" type="primary" @tap="loginOutClick">退出登录</button>
	</view>
</template>

<script>
	import mSettingItem from "@/components/base/m-setting-item.vue"
	export default {
		components: {
			mSettingItem
		},
		data() {
			return {
				settingDates: [{
					settingName: "账号与安全",
					settingIndex: 0
				}, {
					settingName: "绑定邮箱",
					settingIndex: 1
				}, {
					settingName: "资料编辑",
					settingIndex: 2
				}, {
					settingName: "小纸条",
					settingIndex: 3
				}, {
					settingName: "清除缓存",
					settingIndex: 4
				}, {
					settingName: "意见反馈",
					settingIndex: 5
				}, {
					settingName: "关于糗百",
					settingIndex: 6
				}]
			};
		},
		methods: {
			onItemClick: function(index) {
				// console.log("当前单击条数:" + index);
				switch (index) {
					case 0:
					uni.navigateTo({
						url: '../setting-change-ps/setting-change-ps'
					});
						break;
					case 1:
						uni.navigateTo({
							url: '../setting-email/setting-email'
						});
						break;
					case 2:
					uni.navigateTo({
						url: '../setting-edit-msg/setting-edit-msg'
					});
						break;
					case 3:
						break;
					case 4:
						break;
					case 5:
					uni.navigateTo({
						url: '../setting-idea-report/setting-idea-report'
					});
						break;
					case 6:
						uni.navigateTo({
							url: '../setting-about/setting-about'
						});
						break;

				}
			},
			loginOutClick: function() {
				console.log("单击退出登录按钮");
			}
		}
	}
</script>

<style lang="scss">
	.loginOut {
		margin: 100upx 32upx 0;
		background-color: #FFE933;
		// color: #181605;
	}
</style>
