<template>
	<view class="content">
		<view class="itemBox">
			<view class="line1 mf-horizontal-space-between">
				<view class="mf-vertical-center ">
					<image src="../../static/pic/demo66.jpg" mode=""></image>
					昵称
				</view>

				<view class="mf-horizontal-end mf-vertical-center ">
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
				<view class="vedio-box">
					<view class="icon iconfont icon-bofang"></view>
					<view>20w次播放 2:47</view>
				</view>
			</view>
			<view class="line4 mf-horizontal-space-between">
				<view class="mf-horizontal-start ">
					<view class="icon iconfont icon-icon_xiaolian-mian"></view>
					<view class="mf-vertical-center">120</view>
					<view class="icon iconfont icon-kulian"></view>
					<view class="mf-vertical-center">9</view>
				</view>
				<view class="mf-horizontal-end ">
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
				listDates:[
					{
						userpic:"../../static/pic/userpic/5.jpg",
						username:"张孝德",
						isguanzhu:false,
						title:"",
						type:"img",//img 图文。 video 视屏
						imgurl:"../../static/datapic/3.jpg",
						infonum:{
							type:0,//0表示没有操作  1表示顶  2表示踩
							dingnum:20,
							cainum:4
						},
						comment:10,
						sharenum:15
					},{
						userpic:"../../static/pic/userpic/11.jpg",
						username:"李亦非",
						isguanzhu:false,
						title:"",
						type:"video",//img 图文。 video 视屏
						imgurl:"../../static/datapic/11.jpg",
						playernum:"20W",
						playertime:"2:48",
						infonum:{
							type:0,//0表示没有操作  1表示顶  2表示踩
							dingnum:20,
							cainum:4
						},
						comment:10,
						sharenum:15
					}
				]
				
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
		padding: 24upx;
		border-bottom: solid #F1F1F1 2upx;

		.line1 {

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
					font-size: 24upx;
					color: #333333;
					background-color: #F4F4F4;
					margin-right: 16upx;
					padding: 4upx 8upx;
					border-radius: 8upx;
				}

				view:last-child {
					font-size: 24upx;
					color: #F4F4F4;
				}

			}
		}

		.line2 {
			padding: 16upx 0;
		}

		.line3 {
			position: relative;
			top: 0;
			left: 0;
			border-radius: 16upx;
			height: 340upx;
			overflow: hidden;
			margin: 16upx 0;

			image {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}

			.vedio-box {
				view:first-child{
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
				view:last-child{
					position: absolute;
					bottom: 0;
					right: 0;
					margin-right: 16upx;
					margin-bottom: 8upx;
					
					color: #FFFFFF;
					font-size: 24upx;
					line-height: 24upx;
					padding: 12upx 16upx;
					border-radius: 38upx;
					background-color: rgba($color: #333333, $alpha: .7);
				}
				
			}
		}

		.line4 {
			color: #D5D5D5;

			view{
				font-size: 28upx;
			}
			view:first-child {
				view {
					margin-right: 16upx;
				}
			}

			view:last-child {
				view {
					margin-left: 16upx;
				}
			}
		}
	}
</style>
