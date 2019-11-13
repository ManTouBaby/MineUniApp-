<template>
	<view class="content">
		<view class="chat-list-container">
			<m-im-item :msgType="0" :msgHolderPicUrl="'../../static/userpic/3.jpg'">你在干嘛呢？思念是什么</m-im-item>
			<m-im-item :msgType="2" :msgHolderPicUrl="'../../static/userpic/3.jpg'" :msgFilePath="'../../static/datapic/5.jpg'"></m-im-item>
			<m-im-item :msgType="3" :msgHolderPicUrl="'../../static/userpic/3.jpg'" :msgFilePath="'../../static/datapic/5.jpg'"></m-im-item>
			<m-im-item :isShowLeft="false" :msgType="0" :msgHolderPicUrl="'../../static/userpic/1.jpg'">我在看你发什么信息</m-im-item>
			<m-im-item :isShowLeft="false" :msgType="2" :msgHolderPicUrl="'../../static/datapic/1.jpg'" :msgFilePath="'../../static/datapic/5.jpg'"></m-im-item>
		</view>


		<m-im-input></m-im-input>

		<view v-show="isTakePhoto" class="takePhoto">
			<input type="button" title="开启摄像头" value="开启摄像头" onclick="getMedia()" />
			<video id="video" width="500px" height="500px" autoplay="autoplay" />
			<canvas id="canvas" width="500px" height="500px" />
			<button id="snap" onclick="takePhoto()">拍照</button>
		</view>
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
		props: {
			msgTime: String, //消息发送时间
			msgType: { //消息类型  0:文字消息  1:语音消息  2:图片消息  3:视屏消息
				type: Number,
				default: 0
			},
			msgLabel: String, //文字消息内容
			msgFilePath: String, //语音、图片、视屏路径
			playTime: String //语音或者视屏播放时间
		},
		data() {
			return {
				isShowLeft: false,
				isTakePhoto:false
			};
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	// .content {
	// 	position: relative;
	// }
	.takePhoto{
		position: fixed;
		top: 0;
		bottom:0;
		left: 0;
		right: 0;
		
		background-color: #222222;
	}
	
	.chat-list-container {
		margin-bottom: 100upx;
	}
</style>
