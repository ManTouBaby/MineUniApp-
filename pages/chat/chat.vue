<template>
	<view class="content">
		<scroll-view :style="{height:contentHeight+'px'}" id="scrollView" scroll-y="true" :scroll-top="scrollTop">
			<block v-for="(item,index) in chatListDates" :key="index">
				<m-im-item :msgType="item.msgType" :msgHolderPicUrl="item.msgHolderPicUrl" :isShowLeft="item.msgHolderType==1"
				 :msgLabel="item.msgLabel" :msgTime="item.msgCreateTime" :msgFilePath="item.msgFilePath" />
			</block>
		</scroll-view>
		<m-im-input @sendMsg="sendMsg"></m-im-input>
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
				contentHeight: 0,
				scrollTop: 0,
				chatListDates: [{
					msgId: 0,
					msgType: 0,
					msgHolderPicUrl: "../../static/userpic/3.jpg",

					msgLabel: "你在干嘛呢？思念是什么",
					msgFilePath: "",
					msgCreateTime: "",
					msgPlayTime: "",
					msgHolderType: 1 //0:自己  1:对方
				}, {
					msgId: 1,
					msgType: 2,
					msgHolderPicUrl: "../../static/userpic/3.jpg",

					msgLabel: "",
					msgFilePath: "../../static/datapic/5.jpg",
					msgCreateTime: "",
					msgPlayTime: "",
					msgHolderType: 1 //0:自己  1:对方
				}, {
					msgId: 2,
					msgType: 3,
					msgHolderPicUrl: "../../static/userpic/3.jpg",

					msgLabel: "",
					msgFilePath: "../../static/datapic/6.jpg",
					msgCreateTime: "",
					msgPlayTime: "",
					msgHolderType: 1 //0:自己  1:对方
				}, {
					msgId: 3,
					msgType: 0,
					msgHolderPicUrl: "../../static/userpic/1.jpg",

					msgLabel: "我在看你发什么信息",
					msgFilePath: "",
					msgCreateTime: "",
					msgPlayTime: "",
					msgHolderType: 0 //0:自己  1:对方
				}, {
					msgId: 4,
					msgType: 2,
					msgHolderPicUrl: "../../static/userpic/1.jpg",

					msgLabel: "",
					msgFilePath: "../../static/datapic/6.jpg",
					msgCreateTime: "",
					msgPlayTime: "",
					msgHolderType: 0 //0:自己  1:对方
				}]
			};
		},
		onLoad() {
			this.initScroll();
			
		},
		onReady() {
			
		},
		mounted() {
			this.getAllItemHeight();
		},
		methods: {
			sendMsg: function(label) {
				console.log(label);
				this.chatListDates.push({
					msgId: 3,
					msgType: 0,
					msgHolderPicUrl: "../../static/userpic/1.jpg",

					msgLabel: label,
					msgFilePath: "",
					msgCreateTime: "",
					msgPlayTime: "",
					msgHolderType: 0 //0:自己  1:对方
				});
				this.getAllItemHeight();
			},
			/* 获取所有Item所占的总高度 */
			getAllItemHeight: function() {
				let query = uni.createSelectorQuery();
				query.select("#scrollView").boundingClientRect();
				query.selectAll(".im-item").boundingClientRect();
				let that = this;
				query.exec(function(res) {
					console.log(res[1]);
					let allItemHeight = 0;
					res[1].forEach(function(item, index) {
						allItemHeight += item.height
						console.log(allItemHeight + "----" + item.height);
					})
					// console.log(allItemHeight + "----" + that.contentHeight);
					if (allItemHeight > that.contentHeight) {
						that.scrollTop = allItemHeight;
					}
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
