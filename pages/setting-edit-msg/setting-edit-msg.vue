<template>
	<view>
		<view class="edit-pic-item mf-horizontal-space-between m-border-bottom m-border-top">
			<view class="mf-vertical-center">头像</view>
			<view class="mf-vertical-center">
				<view class="userPic mf-vertical-center">
					<image src="../../static/userpic/1.jpg" mode="widthFix" />
				</view>
				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>
		
		<view class="edit-pic-item mf-horizontal-space-between m-border-bottom">
			<view class="mf-vertical-center">昵称</view>
			<view class="mf-vertical-center">
				<view class="userPic mf-vertical-center">
					<input type="text" v-model="userName" />
				</view>
				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>
		
		<view class="edit-pic-item mf-horizontal-space-between m-border-bottom">
			<view class="mf-vertical-center">性别</view>
			<view class="mf-vertical-center">
				<view class="userPic mf-vertical-center">
					{{userSex}}
				</view>
				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>
		<view class="edit-pic-item mf-horizontal-space-between m-border-bottom">
			<view class="mf-vertical-center">生日</view>
			<view class="mf-vertical-center">
				<view class="userPic mf-vertical-center">
					{{birthDay}}
				</view>
				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>
		<view class="edit-pic-item mf-horizontal-space-between m-border-bottom">
			<view class="mf-vertical-center">情感</view>
			<view class="mf-vertical-center">
				<view class="userPic mf-vertical-center">
						{{qinGang}}
				</view>
				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>
		<view class="edit-pic-item mf-horizontal-space-between m-border-bottom">
			<view class="mf-vertical-center">职业</view>
			<view class="mf-vertical-center">
				<view class="userPic mf-vertical-center">
					{{userWorker}}
				</view>
				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>
		<view class="edit-pic-item mf-horizontal-space-between m-border-bottom">
			<view class="mf-vertical-center">家乡</view>
			<view class="mf-vertical-center">
				<view class="userPic mf-vertical-center">
					{{userPlace}}
				</view>
				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>
		
		<button class="default-btn default-btn-enable"  type="primary" @tap="onSubmit">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:"妳名",
				userSex:"不限",
				birthDay:"1991-01-01",
				qinGang:"已婚",
				userWorker:"IT",
				userPlace:"广东、广州"
			};
		}
	}
</script>

<style lang="scss">
	@import "../../common/default-btn.css";
	.edit-pic-item {
		padding: 16upx;

		&>view:first-child {
			color: #9B9B9B;
			font-weight: bold;
			font-size: 32upx;
		}

		&>view:last-child {
			.userPic {
				margin-right: 16upx;
				color: #545454;
				image {
					width: 100upx;
					height: 100upx;
					border-radius: 100%;
					overflow: hidden;
				}
				input{
					font-size: 30upx;
					text-align: right;
				}
			}
			
			&>view:last-child {
				font-size: 46upx;
				color: #AEAEAE;
			}
		}
	}
</style>
