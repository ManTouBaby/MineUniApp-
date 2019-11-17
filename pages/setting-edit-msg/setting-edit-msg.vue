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
				<view class="userPic mf-vertical-center" @tap="showSheet('sex',sexList)">
					{{userSex}}
				</view>
				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>
		<view class="edit-pic-item mf-horizontal-space-between m-border-bottom">
			<view class="mf-vertical-center">生日</view>
			<view class="mf-vertical-center">
				<view class="uni-list-cell-db">
					<picker mode="date" :value="birthDay" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="userPic mf-vertical-center">
							{{birthDay}}
						</view>
					</picker>
				</view>

				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>
		<view class="edit-pic-item mf-horizontal-space-between m-border-bottom">
			<view class="mf-vertical-center">情感</view>
			<view class="mf-vertical-center">
				<view class="userPic mf-vertical-center" @tap="showSheet('emotion',emotionList)">
					{{emotion}}
				</view>
				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>
		<view class="edit-pic-item mf-horizontal-space-between m-border-bottom">
			<view class="mf-vertical-center">职业</view>
			<view class="mf-vertical-center">
				<view class="userPic mf-vertical-center" @tap="showSheet('profession',professionList)">
					{{profession}}
				</view>
				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>
		<view class="edit-pic-item mf-horizontal-space-between m-border-bottom">
			<view class="mf-vertical-center">家乡</view>
			<view class="mf-vertical-center">
				<view class="userPic mf-vertical-center" @tap="showPlaceSelect">
					{{userPlace}}
				</view>

				<view class="icon iconfont icon-bianji1" />
			</view>
		</view>

		<button class="default-btn default-btn-enable" type="primary" @tap="onSubmit">确定</button>

		<w-picker 
		mode="region" 
		:defaultVal="['广东省','广州市','荔湾区']" 
		:areaCode="['44','4401','440103']" 
		:hideArea="false"
		@confirm="onPlaceSelectResult" 
		ref="placeSelect"></w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components: {
			wPicker
		},
		data() {
			return {
				sexList: ["不限", "男", "女"],
				emotionList: ["已婚", "未婚"],
				professionList: ["IT", "金融", "销售", "服务"],

				userName: "妳名",
				userSex: "不限",
				birthDay: "1991-01-01",
				emotion: "已婚",
				profession: "IT",
				userPlace: "广东省广州市荔湾区"
			};
		},
		methods: {
			showSheet: function(type, val) {
				console.log("弹出框");
				let list = val;
				let that = this;
				uni.showActionSheet({
					itemList: list,
					success: function(res) {
						console.log(res);
						if (type === 'sex') {
							that.userSex = list[res.tapIndex];
						} else if (type === 'emotion') {
							that.emotion = list[res.tapIndex];
						} else if (type === 'profession') {
							that.profession = list[res.tapIndex];
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			bindDateChange: function(e) {
				this.birthDay = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			//打开地址多级选择器
			showPlaceSelect: function() {
				this.$refs['placeSelect'].show();
			},
			//地址多级选择器选择结果
			onPlaceSelectResult(val) {
				console.log(val);
				this.userPlace = val.result;
			}

		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
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

				input {
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
