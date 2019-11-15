<template>
	<view class="input-container">
		<view class="m-message-input mf-horizontal-start mf-vertical-center">
			<!-- 键盘按钮 -->
			<view class="icon im-icon icon-jianpan mf-center" v-show="isRecord" @tap="recordJPClick" />
			<!-- 录音按钮 -->
			<view class="icon im-icon icon-luyin mf-center" v-show="!isRecord" @tap="recordClick" />
			<!-- 文字输入框 -->
			<input type="text" placeholder="输入消息" @input="onInput" v-show="!isRecord"/>
			<!-- 录音按钮 -->
			<button type="primary" class="mf-center" hover-class="click-bg" v-show="isRecord">按住 说话</button>
			<!-- 表情按钮 -->
			<view class="icon im-icon icon-xiaolian mf-center" v-show="isChoiceExpression" />
			<!-- 键盘按钮 -->
			<view class="icon im-icon icon-jianpan mf-center" v-show="isChoiceExpression" />
			<!-- 加号按钮 用于打开菜单 -->
			<view class="icon im-icon icon-zengjia mf-center" @tap="openMenu" v-show="!isShowSend" />
			<!-- 发送按钮 -->
			<view class="send-message-btn mf-center" v-show="isShowSend" @tap="sendMsg">发送</view>
		</view>
		<view class="menu-container mf-horizontal-space-between " v-show="isOpenMenu">
			<view @tap="pictrueChoice">
				<view class="mf-horizontal-center">
					<view class="mf-center icon im-icon icon-tupian" />
				</view>
				<view class="tag-name mf-horizontal-center">
					相册
				</view>
			</view>
			<view @tap="shootClick">
				<view class="mf-horizontal-center">
					<view class="mf-center icon im-icon icon-xiangji" />
				</view>
				<view class="tag-name mf-horizontal-center">
					拍摄
				</view>
			</view>
			<view @tap="videoCallClick">
				<view class="mf-horizontal-center">
					<view class="mf-center icon im-icon icon-shipingtonghua" />
				</view>
				<view class="tag-name mf-horizontal-center">
					视频通话
				</view>
			</view>
			<view @tap="locationClick">
				<view class="mf-horizontal-center">
					<view class="mf-center icon im-icon icon-weizhi" />
				</view>
				<view class="tag-name mf-horizontal-center">
					位置
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isRecord: false,
				isChoiceExpression: false,
				isShowSend: false,
				isOpenMenu: false,
				
				msgLabel:""
			};
		},
		methods: {
			//发送消息
			sendMsg:function () {
				this.$emit("sendMsg",this.msgLabel);
			},
			//单击键盘按钮，开启键盘输入
			recordJPClick: function() {
				this.isRecord = !this.isRecord;
			},
			//单击语音输入按钮
			recordClick: function() {
				this.isRecord = !this.isRecord;
			},
			//打开菜单
			openMenu: function() {
				this.isOpenMenu = !this.isOpenMenu;
			},
			//监听输入框
			onInput: function(label) {
				this.msgLabel = label.detail.value;
				if (label.detail.value.length > 0) {
					this.isShowSend = true;
				} else {
					this.isShowSend = false;
				}
			},
			//进行图片选择
			pictrueChoice:function () {
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			},
			//进行拍照选择
			shootClick:function () {
				
			},
			//进行视屏录制
			videoCallClick:function () {
				
			},
			//发送当前定位
			locationClick:function () {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	$backgroundColor:#F5F5F5;
	$inputBackGroundColor:#FFFFFF;

	.input-container {
		position: fixed;
		bottom: -4upx;
		left: 0;
		right: 0;

		.m-message-input {
			height: 110upx;
			background-color: $backgroundColor;
			border-top: 1upx #E7E7E7 solid;

			.click-bg {
				background-color: #d1d1d1;
			}

			input {
				flex: 1;
				background-color: $inputBackGroundColor;
				border-radius: 12upx;
				height: 74upx;
				padding: 0 16upx;
			}

			button {
				height: 74upx;
				flex: 1;
				background-color: $inputBackGroundColor;
				border-radius: 8upx;
				color: #404040;
				font-size: 30upx;

				border: none;
			}

			view {
				flex-flow: 0;
				width: 80upx;
				font-size: 50upx;
			}

			view.send-message-btn {
				margin: 0 16upx;
				padding: 6upx 12upx;
				background-color: #1AAD19;
				border-radius: 6upx;
				font-size: 22upx;
				color: #FFFFFF;
			}
		}

		.menu-container {
			border-top: 1upx #E7E7E7 solid;
			padding: 32upx;
			background-color: $backgroundColor;

			&>view {
				width: 25%;

				.mf-center {
					width: 100upx;
					height: 100upx;
					border-radius: 16upx;
					background-color: $inputBackGroundColor;
					font-size: 50upx;
				}
				.tag-name {
					margin-top: 4upx;
					font-size: 24upx;
					color: #989898;
				}
			}


		}
	}
</style>
