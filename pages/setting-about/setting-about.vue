<template>
	<view class="about-content mf-column mf-vertical-center">
		<image class="imgTag" src="../../static/logo.png" mode="widthFix"></image>
		<view class="version-name mf-horizontal-center">verison 1.0.0</view>
		<block v-for="(item,index) in settingDates" :key="index">
			<m-setting-item 
			:itemIndex="item.settingIndex" 
			:itemName="item.settingName" 
			@onItemClick="onItemClick"
			:isShowRightArrow="true" />
		</block>
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
					settingName: "新版本检查",
					settingIndex: 0
				}, {
					settingName: "糗事百科用户协议",
					settingIndex: 1
				}]
			};
		},methods:{
			onItemClick: function(index) {
				console.log("当前单击条数:" + index);
				switch (index) {
					case 0:
						break;
					case 1:
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.about-content{
	.imgTag{
		margin-top: 40upx;
	}
	.version-name{
		margin-top: 40upx;
		margin-bottom: 32upx;
	}
}
</style>
