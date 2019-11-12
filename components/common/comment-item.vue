<template>
	<view class="comment-item mf-horizontal-start">
		<image src="../../static/userpic/1.jpg" mode="aspectFill"></image>
		<view class="first-comment">
			<view>匿名</view>
			<view>评论内容评论内容评论内容评论内容</view>
			<view class="mf-horizontal-space-between">
				<view class="mf-vertical-center">昨天</view>
				<view class="mf-vertical-center">回复</view>
			</view>

			<view class="second-commont">
				<slot></slot>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.comment-item {
		image {
			width: 80upx;
			height: 80upx;

			border-radius: 100%;
			flex-grow: 0;
		}

		.first-comment {
			flex: 1;
			padding: 0 16upx;

			view {
				font-size: 24upx;
				line-height: 1.5;
			}

			&>view:nth-of-type(1) {
				color: #32A9DC;
			}

			&>view:nth-of-type(2) {
				font-size: 26upx;
				color: #2B2B2B;
			}

			&>view:nth-of-type(3) {
				color: #939393;
				margin-top: 12upx;

				&>view:last-child {
					background-color: #BBBBBB;
					padding: 0 14upx;
					font-size: 10upx;
					color: #FFFFFF;
					border-radius: 60upx;
				}
			}
		}

		.second-commont {
			margin-top: 16upx;
			padding: 16upx;
			background-color: #F4F4F4;
		}
	}
</style>
