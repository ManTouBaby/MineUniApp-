<template>
	<view>
		<!-- 标题栏 -->
		<uni-nav-bar :status-bar="true" left-icon="arrowleft" right-text="发布" @click-left="backClick" @click-right="publish">
			<view class="mf-center" @tap="privacyClick">
				{{privacy}}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>

		<!-- 多行输入文本 -->
		<textarea class="uni-textarea" placeholder="请输入您的糗事"></textarea>

		<!-- 图片选择组件 -->
		<img-upload @updataImgList='updataImgList'></img-upload>

		<!-- 内容编辑提示窗口 -->
		<uni-popup ref="popup" type="center" :custom="true">
			<view class="popup-container">
				<image class="popup-img" src="../../static/addinput.png" mode="widthFix" />
				<view class="popup-content">
					<view>1.发布内容不能涉及黄、赌、毒</view>
					<view>2.发布内容不能涉及黄、赌、毒</view>
					<view>3.发布内容不能涉及黄、赌、毒</view>
					<view>4.发布内容不能涉及黄、赌、毒</view>
				</view>
				<button type="primary" class="popup-btn" @click="iKnowClick">朕知道了</button>
			</view>

		</uni-popup>

	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	import imgUpload from '../../components/common/img-upload.vue'
	import uniPopup from '../../components/uni-popup/uni-popup.vue'

	let privacyList = ["仅自己可见", "所有人可见"];

	export default {
		components: {
			uniNavBar,
			imgUpload,
			uniPopup
		},
		data() {
			return {
				privacy: "仅自己可见",
				imageList: [],

				show: true,

				noBack: true
			}
		},
		onLoad() {
			this.openPopup();
		},
		onBackPress: () => {
			console.log("单击返回按钮");
			// if (this.)
			return this.noBack;
		},
		methods: {
			//绑定textrea数据
			bindTextAreaBlur: (e) => {
				console.log(e.detail.value);
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
			updataImgList(imgList) {
				console.log(imgList);
			},
			//打开糗事编辑内容提示框
			openPopup() {
				this.$refs.popup.open()
			},
			//关闭糗事编辑内容提示框
			closePopup() {
				this.$refs.popup.close()
			},
			//提示框关闭按钮
			iKnowClick() {
				this.closePopup();
			},
			//打开保存提示框
			showSaveDialog() {
				uni.showModal({
					title: "提示",
					content: "是否保存已编辑内容",
					confirmText: "保存",
					cancelText: "不保存",
					success: (e) => {
						if (e.confirm) {
							this.imageList = [];
							res(true);
						} else {
							res(false)
						}
					},
					fail: () => {
						res(false)
					}
				})
			}

		}
	}
</script>

<style scoped lang="scss">
	.popup-container {
		width: 500upx;
		border-radius: 5px;
		padding: 32upx;
		overflow: hidden;
		background-color: #FFFFFF;

		.popup-img {
			width: 80%;
			margin-bottom: 24upx;
		}

		.popup-btn {
			color: #121004;
			margin-top: 24upx;
			background-color: #FFE934;
		}
	}
</style>
