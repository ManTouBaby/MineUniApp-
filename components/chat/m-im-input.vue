<template>
	<view class="input-container">
		<view class="m-message-input mf-horizontal-start mf-vertical-center">
			<!-- 键盘按钮 -->
			<view class="icon im-icon icon-jianpan mf-center" v-show="isRecord" @tap="recordJPClick" />
			<!-- 录音按钮 -->
			<view class="icon im-icon icon-luyin mf-center" v-show="!isRecord" @tap="recordClick" />
			<!-- 文字输入框 -->
			<input type="text" placeholder="输入消息" @input="onInput" v-show="!isRecord" />
			<!-- 录音按钮 -->
			<button type="primary" class="mf-center" hover-class="click-bg" v-show="isRecord">按住 说话</button>
			<!-- 表情按钮 -->
			<view class="icon im-icon icon-xiaolian mf-center" v-show="isChoiceExpression" />
			<!-- 键盘按钮 -->
			<view class="icon im-icon icon-jianpan mf-center" v-show="isChoiceExpression" />
			<!-- 加号按钮 用于打开菜单 -->
			<view class="icon im-icon icon-zengjia mf-center" @tap="openMenu" v-show="!isShowSend" />
			<!-- 发送按钮 -->
			<view class="send-message-btn mf-center" v-show="isShowSend">发送</view>
		</view>
		<view class="menu-container mf-horizontal-space-between " v-show="isOpenMenu">
			<view class="mf-center icon im-icon icon-tupian"></view>
			<view class="mf-center icon im-icon icon-xiangji"></view>
			<view class="mf-center icon im-icon icon-shipingtonghua"></view>
			<view class="mf-center icon im-icon icon-weizhi"></view>
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
				isOpenMenu: false
			};
		},
		methods: {
			recordJPClick: function() {
				this.isRecord = !this.isRecord;
			},
			recordClick: function() {
				this.isRecord = !this.isRecord;
			},
			onInput: function(label) {
				if (label.detail.value.length > 0) {
					this.isShowSend = true;
				} else {
					this.isShowSend = false;
				}
				// console.log(label.detail);
			},
			openMenu: function() {
				console.log("单击按钮");
				this.isOpenMenu = !this.isOpenMenu;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input-container {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;

		.m-message-input {
			height: 110upx;
			background-color: #FFFFFF;
			border-top: 1upx #F1F1F1 solid;

			.click-bg {
				background-color: #d1d1d1;
			}

			input {
				flex: 1;
				background-color: #F7F7F7;
				border-radius: 12upx;
				height: 74upx;
				padding: 0 16upx;
			}

			button {
				height: 64upx;
				flex: 1;
				background-color: #F7F7F7;
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
				font-size: 24upx;
				color: #FFFFFF;
			}
		}

		.menu-container {
			border-top: 1upx #F1F1F1 solid;
			padding: 32upx;

			view {
				width: 100upx;
				height: 100upx;
				border-radius: 16upx;
				background-color: #F1F1F1;
				font-size: 50upx;
			}
		}
	}
</style>
