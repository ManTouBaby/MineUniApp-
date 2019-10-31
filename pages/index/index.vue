<template>
	<view class="content">
		<view class="itemBox">
			<view class="line1 mf-horizontal-space-between">
				<view class="mf-vertical-center linel">
					<image src="../../static/pic/demo66.jpg" mode=""></image>
					张德来
				</view>
				<view class="mf-horizontal-end liner">
					<view class="icon iconfont icon-zengjia">
						关注
					</view>
					<view class="mf icon iconfont icon-guanbi"></view>
				</view>
			</view>
			<view class="line2 mf-vertical-center">
				我是第一行文字的内容
			</view>
			<view class="line3">
				<image src="../../static/pic/datapic/22.jpg" mode="widthFix"></image>
			</view>
			<view class="line4 mf-horizontal-space-between">
				<view class="mf-horizontal-start linel">
					<view class="icon iconfont icon-icon_xiaolian-mian"></view>
					<view class="mf-vertical-center">120</view>
					<view class="icon iconfont icon-kulian"></view>
					<view class="mf-vertical-center">9</view>
				</view>
				<view class="mf-horizontal-end liner">
					<view class="icon iconfont icon-pinglun1"></view>
					<view class="mf-vertical-center">67</view>
					<view class="icon iconfont icon-zhuanfa"></view>
					<view class="mf-vertical-center">29</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.itemBox {
		padding: 32upx;
		border-bottom:solid #F1F1F1 2upx;

		.line1 {

			.linel {
				color: #AAAAAA;

				image {
					width: 80upx;
					height: 80upx;
					border-radius: 100%;
					margin-right: 16upx;
				}
			}

			.liner {
				font-size: 20upx;
				&:first-child{
					color: #333333;
					background-color: #F4F4F4;
				}
				&:last-child{
					
				}
			}
			
		}

		.line2 {
			padding: 16upx 0;
		}

		.line3 {
			border-radius: 16upx;
			height: 340upx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.line4 {
			color: #D5D5D5;
			
			.linel {
				view {
					margin-right: 16upx;
					font-size: 28upx;
				}
			}

			.liner {
				view {
					margin-left: 16upx;
					font-size: 28upx;
				}
			}
		}
	}
</style>
