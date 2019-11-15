<template>
	<view class="im-item">
		<view class="msg-time mf-horizontal-center">
			{{msgTime}}
		</view>
		<view class="chat-content" :class="{'chart-show-left':isShowLeft,'chart-show-right':!isShowLeft}">
			<image class="user-pic" :src="msgHolderPicUrl" mode="aspectFill" lazy-load/>
			<view class="item-content mf-vertical-center" :class="{'item-content-left':isShowLeft,'item-content-right':!isShowLeft}">
				<view v-if="msgType==0" class="type-text">{{msgLabel}} <slot></slot></view>
				<view v-if="msgType==1" class="type-voice mf-horizontal-start mf-vertical-center"><view class="icon im-icon icon-zuobofang" /> {{playTime}}</view>
				<view v-if="msgType==2" class="type-image mf-center">
					<image :src="msgFilePath" mode="widthFix" lazy-load/>
				</view>
				<view v-if="msgType==3" class="type-image type-video mf-center">
					<image :src="msgFilePath" mode="widthFix" lazy-load/>
					<view class="video-tag mf-center icon im-icon icon-icon-" />
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		props:{
			msgHolderPicUrl:String,//消息拥有者头像路径
			msgId:String,//消息Id
			isShowLeft:{
				type:Boolean,
				default:true
			},
			
			msgTime:String,//消息发送时间
			msgType:{//消息类型  0:文字消息  1:语音消息  2:图片消息  3:视屏消息
				type:Number,
				default:0
			},
			msgLabel:String,//文字消息内容
			msgFilePath:String,//语音、图片、视屏路径
			playTime:String//语音或者视屏播放时间
		},
		data() {
			return {
			};
		},
	}
</script>

<style lang="scss" scoped>
	
	.im-item {
		padding: 32upx;
	
		.msg-time {
			margin-bottom: 16upx;
		}
	
		.chat-content {
	
			&.chart-show-left {
				display: flex;
				justify-content: flex-start;
				flex-direction: row;
			}
	
			&.chart-show-right {
				display: flex;
				justify-content: flex-end;
				flex-direction: row-reverse;
			}
	
			.user-pic {
				width: 100upx;
				height: 100upx;
				border-radius: 100%;
	
				flex-grow: 0;
			}
	
			.item-content {
				position: relative;
				flex: 1;
	
				&.item-content-left {
					justify-content: flex-start;
					margin-left: 24upx;
					margin-right: 100upx;
	
					/* 三角图标 */
					&::before {
						position: absolute;
						top: 34upx;
						left: -28upx;
						content: "";
	
						border: 15upx solid;
						border-color: transparent #f1f1f1 transparent transparent;
					}
				}
	
				&.item-content-right {
					justify-content: flex-end;
					margin-right: 24upx;
					margin-left: 100upx;
	
					/* 三角图标 */
					&::before {
						position: absolute;
						top: 34upx;
						right: -28upx;
						content: "";
	
						border: 15upx solid;
						border-color: transparent transparent transparent #f1f1f1;
					}
				}
	
				.type-text,
				.type-voice {
					padding: 8upx 16upx;
					background-color: #f1f1f1;
					border-radius: 8upx;
				}
	
				.type-image {
					padding: 8upx;
					background-color: #f1f1f1;
					border-radius: 8upx;
	
					image {
						width: 300upx;
						height: 300upx;
					}
				}
	
				.type-video {
					position: relative;
	
					.video-tag {
						color: #CCCCCC;
						font-size: 108upx;
						line-height: 1;
						margin-left: -54upx;
						margin-top: -54upx;
						
						position: absolute;
						top: 50%;
						left: 50%;
					}
				}
	
				// height: 30upx;
			}
		}
	
	}
</style>
