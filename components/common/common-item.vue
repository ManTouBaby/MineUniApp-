<template>
	<view class="comment-list-box mf-horizontal-space-between animated bounceInUp" @tap="openDetail">
		<!-- 左边部分 -->
		<view class="box-left">
			<!-- <image :src="item.userpic" mode="widthFix" lazy-load></image> -->
			<common-image :imgUrl="item.userpic"></common-image>
		</view>

		<!-- 右边部分 -->
		<view class="box-right" :class="{'m-border-bottom':isShowBoder}">
			<!--  -->
			<view class="line1 mf-horizontal-space-between">
				<view class="mf-horizontal-start mf-vertical-center">
					<view>{{item.username}}</view>
					<tag-sex-age :age="item.age" :sex="item.sex"></tag-sex-age>
				</view>
				<view class="mf-horizontal-end mf-vertical-center">
					<view class="icon iconfont icon-zengjia">{{item.isguanzhu?'取消关注':'关注'}}</view>
					<view class="icon iconfont icon-guanbi" />
				</view>
			</view>
			<!-- 标题部分 -->
			<view class="line2 mf">{{item.title}}</view>
			<!-- 图文部分 -->
			<view class="line3" v-if="item.typeInfo.type==1||item.typeInfo.type==2">
				<image :src="item.typeInfo.imgurl" mode="widthFix" lazy-load></image>
				<view class="vedio-box" v-if="item.typeInfo.type==2">
					<view class="icon iconfont icon-bofang"></view>
					<view>{{item.typeInfo.playerNum}}次播放 {{item.typeInfo.playerTime}}</view>
				</view>
			</view>
			<!--  -->
			<view class="line3-type-share mf" v-if="item.typeInfo.type==3">
				<image :src="item.typeInfo.imgurl" mode="widthFix" lazy-load></image>
				<view class="mf-vertical-center">{{item.typeInfo.content}}</view>
			</view>

			<view class="line4 mf-horizontal-space-between">
				<view class="mf-horizontal-start mf-vertical-center">{{item.lcation}}</view>
				<view class="mf-horizontal-end mf-vertical-center">
					<view class="icon iconfont icon-zhuanfa">{{item.shearNum}}</view>
					<view class="icon iconfont icon-pinglun1">{{item.commentNum}}</view>
					<view class="icon iconfont icon-ccdbaa">{{item.dingNum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "@/components/common/tag-sex-age.vue"
	import commonImage from "@/components/common/common-image.vue"
	export default {
		components: {
			tagSexAge,
			commonImage
		},
		props: {
			item: Object,
			isShowBoder: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				isGuangZhu: false,
				isDing: 0 //0表示没有操作  1表示点赞
			}
		},
		methods: {
			openDetail() {
				uni.navigateTo({
					url: '../../pages/common-detail/common-detail?item=' + encodeURI(JSON.stringify(this.item))
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	$lineBottomSpace:16upx;

	.comment-list-box {
		padding: 24upx;

		.box-left {
			image {
				width: 100upx;
				height: 100upx;
				border-radius: 100upx;
			}
		}

		.box-right {
			flex: 1;
			margin-left: 16upx;

			.line1 {
				margin-bottom: $lineBottomSpace;

				view:first-child {

					//昵称
					view:first-child {
						font-size: 24upx;
						color: #AAAAAA;
						margin-right: 8upx;
					}
				}

				//关注
				view:last-child {
					view:first-child {
						font-size: 18upx;
						color: #333333;
						background-color: #F4F4F4;
						margin-right: 16upx;
						padding: 2upx 8upx;
						border-radius: 8upx;
						line-height: 34upx;

						&::before {
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
				margin-bottom: $lineBottomSpace;
				font-size: 32upx;
				line-height: 48upx;
				color: #121212;
			}

			.line3 {
				position: relative;
				top: 0;
				left: 0;
				margin-bottom: $lineBottomSpace;
				width: 100%;
				height: 300upx;
				overflow: hidden;
				border-radius: 16upx;

				image {
					height: 100%;
					width: 100%;

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

			.line3-type-share {
				// width: 100%;
				border-radius: 16upx;
				background-color: #F7F7F7;
				margin-bottom: $lineBottomSpace;

				// padding: 8upx;
				image {
					// flex: 2;
					height: 100upx;
					width: 160upx;
					border-radius: 16upx;
					;
				}

				view {
					margin-left: 8upx;
					flex: 1;
					font-size: 26upx;
					color: #454545;
				}
			}

			.line4 {
				margin-bottom: 8upx;

				view {
					color: #D5D5D5;
					font-size: 26upx;
				}

				view:last-child {
					view {
						margin-left: 16upx;

						&::before {
							margin-right: 8upx;
						}
					}
				}

			}
		}
	}
</style>
