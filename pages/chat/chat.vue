<template>
	<view class="content">
		<scroll-view :style="{height:contentHeight+'px'}" id="scrollView" scroll-y="true">
			<view class="chat-list-container">
				<m-im-item :msgType="0" :msgHolderPicUrl="'../../static/userpic/3.jpg'">你在干嘛呢？思念是什么</m-im-item>
				<m-im-item :msgType="2" :msgHolderPicUrl="'../../static/userpic/3.jpg'" :msgFilePath="'../../static/datapic/5.jpg'"></m-im-item>
				<m-im-item :msgType="3" :msgHolderPicUrl="'../../static/userpic/3.jpg'" :msgFilePath="'../../static/datapic/5.jpg'"></m-im-item>
				<m-im-item :isShowLeft="false" :msgType="0" :msgHolderPicUrl="'../../static/userpic/1.jpg'">我在看你发什么信息</m-im-item>
				<m-im-item :isShowLeft="false" :msgType="2" :msgHolderPicUrl="'../../static/datapic/1.jpg'" :msgFilePath="'../../static/datapic/5.jpg'"></m-im-item>
			</view>

		</scroll-view>
		<m-im-input></m-im-input>
	</view>
</template>

<script>
	import mImInput from "../../components/chat/m-im-input.vue"
	import mImItem from "../../components/chat/m-im-item.vue"
	export default {
		components: {
			mImInput,
			mImItem
		},
		props: {},
		data() {
			return {
				contentHeight: 0
			};
		},
		onLoad() {
			this.initScroll();
		},
		onReady() {
			this.getAllItemHeight();
		},
		methods: {
			/* 获取所有Item所占的总高度 */
			getAllItemHeight: function() {
				let query = uni.createSelectorQuery();
				query.select("#scrollView").boundingClientRect();
				query.exec(function(res) {
					console.log(JSON.stringify(res));
				})
			},
			//初始化ScrollView 高度
			initScroll: function() {
				let system = uni.getSystemInfoSync();
				this.contentHeight = system.windowHeight - uni.upx2px(110);
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
