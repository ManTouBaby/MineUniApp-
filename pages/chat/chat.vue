<template>
	<view>
		<view class="im-item">
			<view class="msg-time mf-horizontal-center">
				2019年11月12日 21:48
			</view>
			<view class=" mf-horizontal-start">
				<image class="user-pic" src="../../static/userpic/10.jpg" mode="aspectFill"></image>
				<view class="item-content mf-vertical-center">
					<!-- <view>我是文字消息我是文我是文我是文字消息我是文我是文字消息我是文</view> -->
					<view><image src="../../static/datapic/1.jpg" mode="widthFix"/></view>

				</view>
			</view>

		</view>

		<m-im-input></m-im-input>
	</view>
</template>

<script>
	import mImInput from "../../components/chat/m-im-input.vue"
	export default {
		components: {
			mImInput
		},
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.im-item {
		padding: 32upx;

		.msg-time {
			margin-bottom: 16upx;
		}

		.user-pic {
			width: 100upx;
			height: 100upx;
			border-radius: 100%;

			flex: 0;
		}

		.item-content {
			position: relative;
			flex: 1;
			margin-left: 24upx;
			margin-right: 100upx;

			&::before {
				position: absolute;
				top: 34upx;
				left: -28upx;
				content: "";

				border: 15upx solid;
				border-color: transparent #f1f1f1 transparent transparent;
			}

			view {
				padding: 4upx 16upx;
				background-color: #f1f1f1;
				border-radius: 8upx;
			}

			// height: 30upx;
		}
	}
</style>
