<template>
	<view>


		<!-- 标题栏 -->
		<uni-nav-bar fixed="true" :status-bar="true" left-icon="arrowleft" right-text="发布" @click-left="backClick"
		 @click-right="publish">
			<view class="privacyContainer mf-center" @tap="privacyClick">
				{{privacy}}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>

		<scroll-view scroll-y="true">
			<view>
				<!-- 多行输入文本 -->
				<view class="textareaContainer">
					<textarea class="uni-textarea" placeholder="请输入您的糗事" @blur="bindTextAreaBlur"></textarea>
				</view>

				<!-- 图片选择组件 -->
				<img-upload @updateImgList="updateImgList"></img-upload>
			</view>
		</scroll-view>


	<uni-popup ref="popup" :show="isShow" :type="'center'" :custom="true" :mask-click="false">
		<view class="popup-container">
			<view class="mf-center">
				<image class="popup-img" src="../../static/addinput.png" mode="widthFix" />
			</view>
			<view class="popup-content">
				<view class="mf-horizontal-center">1.发布内容不能涉及黄、赌、毒</view>
				<view class="mf-horizontal-center">2.发布内容不能涉及黄、赌、毒</view>
				<view class="mf-horizontal-center">3.发布内容不能涉及黄、赌、毒</view>
				<view class="mf-horizontal-center">4.发布内容不能涉及黄、赌、毒</view>
			</view>
			<button type="primary" class="popup-btn" @tap="iKnowClick">朕知道了</button>
		</view>
	</uni-popup>

	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import imgUpload from '../../components/base/img-upload.vue'
	import mPopup from '../../components/base/m-popup.nvue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'

	let privacyList = ["仅自己可见", "所有人可见"];

	export default {
		components: {
			uniNavBar,
			imgUpload,
			mPopup,
			uniPopup
		},
		data() {
			return {
				privacy: "仅自己可见",
				imageList: [],
				textareaLable: "",

				isShow: false,
				noback: true
			}
		},
		mounted() {
			console.log(this.$refs);
			this.isShow = true;
		},
		onBackPress() {
			console.log("捕捉返回按钮");
			if (this.imageList.length < 1 && this.textareaLable.length < 1) {
				return;
			} else {
				if (this.noback) this.showSaveDialog();
				return this.noback;
			}
		},
		methods: {
			//绑定textrea数据
			bindTextAreaBlur(e) {
				this.textareaLable = e.detail.value;
			},
			//单击返回按钮
			backClick() {
				uni.navigateBack({
					delta: 1
				});
			},
			//单击发布按钮
			publish() {
				console.log("单击发布按钮");
				
				
			},
			//单击隐私按钮
			privacyClick() {
				uni.showActionSheet({
					itemList: privacyList,
					success: res => {
						this.privacy = privacyList[res.tapIndex];
					}
				});
			},
			//图片选择监听
			updateImgList(imgList) {
				// console.log(imgList);
				this.imageList = imgList;
			},

			//打开糗事编辑内容提示框
			openPopup() {
				console.log(this);
				this.isShow = true
			},
			//关闭糗事编辑内容提示框
			onPopupOutsideClick() {
				this.isShow = false
			},
			//提示框关闭按钮
			iKnowClick() {
				this.isShow = false
			},

			//打开保存提示框
			showSaveDialog() {
				uni.showModal({
					title: "提示",
					content: "是否保存已编辑内容",
					confirmText: "保存",
					cancelText: "不保存",
					success: (e) => {
						console.log("执行保存草稿操作");
						this.noback = false;
						this.backClick();
					},
					fail: () => {
						console.log("取消保存草稿操作");
						this.noback = false;
						this.backClick();
					}
				})
			}

		}
	}
</script>

<style scoped lang="scss">
	.textareaContainer {
		padding: 16upx;
	}

	.privacyContainer {
		flex: 1;
		margin-left: -64upx;
	}

	.contentClass {
		margin-left: -250upx;
	}

	.popup-container {
		background-color: #FFFFFF;
		width: 500upx;
		padding: 32upx;
		border-radius: 16upx;

		.popup-img {
			width: 80%;
			height: 200upx;
			margin-top: 24upx;
			margin-bottom: 24upx;
		}

		.popup-btn {
			color: #121004;
			margin-top: 24upx;
			background-color: #FFE934;
		}
	}


	/* 提示窗口 */
	.uni-tip {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		width: 300px;
		background-color: #fff;
		border-radius: 10px;
	}

	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #333;
	}

	.uni-tip-content {
		/* padding: 15px;
 */
		font-size: 14px;
		color: #666;
	}

	.uni-tip-group-button {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		margin-top: 20px;
	}

	.uni-tip-button {
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #3b4144;
	}
</style>
