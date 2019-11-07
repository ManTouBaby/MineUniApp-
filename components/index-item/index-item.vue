<template>
	<view class="itemBox">
		<view class="line1 mf-horizontal-space-between">
			<view class="mf-vertical-center ">
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
				{{item.username}}
			</view>

			<view class="mf-horizontal-end mf-vertical-center ">
				<view class="icon iconfont icon-zengjia">
					{{item.isguanzhu?'取消关注':'关注'}}
				</view>

				<view class="mf icon iconfont icon-guanbi"></view>
			</view>
		</view>
		<view class="line2 mf-vertical-center">
			{{item.title}}
		</view>
		<view class="line3">
			<image :src="item.imgurl" mode="aspectFill" lazy-load></image>
			<view class="vedio-box" v-if="item.type=='video'">
				<view class="icon iconfont icon-bofang"></view>
				<view>{{item.playernum}}次播放 {{item.playertime}}</view>
			</view>
		</view>
		<view class="line4 mf-horizontal-space-between">
			<view class="mf-horizontal-start ">
				<view class="icon iconfont icon-icon_xiaolian-mian" :class="{active:item.infonum.type==1}">{{item.infonum.dingnum}}</view>
				<view class="icon iconfont icon-kulian" :class="{active:item.infonum.type==2}">{{item.infonum.cainum}}</view>
			</view>
			<view class="mf-horizontal-end ">
				<view class="icon iconfont icon-pinglun1">
					{{item.comment}}
				</view>
				<view class="icon iconfont icon-zhuanfa">
					{{item.sharenum}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: null
			},
			index: {
				type: Number,
				default: -1
			}
		},

		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	$lineBottomSpace:16upx;

	.active {
		color: #F0AD4E;
	}

	.itemBox {
		padding: 24upx;
		border-bottom: solid #F1F1F1 2upx;

		.line1 {
			margin-bottom: $lineBottomSpace;

			view:first-child {
				color: #AAAAAA;

				image {
					width: 80upx;
					height: 80upx;
					border-radius: 100%;
					margin-right: 16upx;
				}
			}

			view:last-child {
				view:first-child {
					font-size: 22upx;
					color: #333333;
					background-color: #F4F4F4;
					margin-right: 16upx;
					padding: 2upx 10upx;
					border-radius: 8upx;
					&::before{
						margin-right: 6upx;
					}
				}

				view:last-child {
					font-size: 24upx;
					color: #D5D5D5;
				}

			}
		}

		.line2 {
			// padding: 16upx 0;
			margin-bottom: $lineBottomSpace;
		}

		.line3 {
			position: relative;
			top: 0;
			left: 0;
			height: 300upx;
			margin-bottom: $lineBottomSpace;

			image {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;

				border-radius: 16upx;
			}

			.vedio-box {
				view:first-child {
					position: absolute;
					top: 50%;
					left: 50%;
					width: 128upx;
					line-height: 128upx;
					margin-top: -64upx;
					margin-left: -64upx;
					font-size: 128upx;
					color: #FFFFFF;
				}

				view:last-child {
					position: absolute;
					bottom: 0;
					right: 0;
					margin-right: 16upx;
					margin-bottom: 8upx;

					color: #FFFFFF;
					font-size: 20upx;
					line-height: 16upx;
					padding: 12upx 16upx;
					border-radius: 38upx;
					background-color: rgba($color: #333333, $alpha: .7);
				}

			}
		}

		.line4 {
			color: #D5D5D5;

			view {
				font-size: 28upx;
			}

			view:first-child {
				view {
					margin-right: 16upx;
					&::before{
						margin-right: 8upx;
					}
				}
			}

			view:last-child {
				view {
					margin-left: 16upx;
					&::before{
						margin-right: 8upx;
					}
				}
			}
		}
	}
</style>
