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
		<uni-popup ref="popup" type="center">
			<view class="popup-container">
				<image class="popup-img" src="../../static/addinput.png" mode="widthFix"/>
				<view class="popup-content">
						<view>1.发布内容不能涉及黄、赌、毒</view>
						<view>2.发布内容不能涉及黄、赌、毒</view>
						<view>3.发布内容不能涉及黄、赌、毒</view>
						<view>4.发布内容不能涉及黄、赌、毒</view>
				</view>
				<button type="primary" class="popup-btn">朕知道了</button>
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

				show: true
			}
		},
		onUnload() {
			this.imageList = [],
				this.sourceTypeIndex = 2,
				this.sourceType = ['拍照', '相册', '拍照或相册'],
				this.sizeTypeIndex = 2,
				this.sizeType = ['压缩', '原图', '压缩或原图'],
				this.countIndex = 8;
		},
		onLoad() {
			this.openPopup();
		},
		methods: {
			backClick() {
				uni.navigateBack({
					delta: 1
				});
			},
			publish() {
				console.log("单击发布按钮");
			},
			privacyClick() {
				uni.showActionSheet({
					itemList: privacyList,
					success: res => {
						this.privacy = privacyList[res.tapIndex];
					}
				});
			},
			updataImgList(imgList) {
				console.log(imgList);
			},
			openPopup() {
				this.$refs.popup.open()
			},
			closePopup() {
				this.$refs.popup.close()
			}

		}
	}
</script>

<style scoped lang="scss">
.popup-container{
	width: 500upx;
	
	overflow: hidden;
	.popup-img{
		width: 80%;
		border-radius: 5px;
		margin-bottom: 24upx;
	}
	.popup-btn{
		color: #121004;
		margin-top: 24upx;
		background-color: #FFE934;
	}
}


</style>
