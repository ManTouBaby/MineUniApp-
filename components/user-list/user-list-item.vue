<template>
	<view class="m-border-bottom userItem mf-horizontal-space-between mf-vertical-center animated bounceInUp">
		<!-- <image :src="item1.userPic" mode="aspectFill"></image> -->
		<common-image :imgUrl="item1.userPic"></common-image>
		<view class="userName">
			<view>{{item1.userName}}</view>
			<view class="mf-horizontal-start">
				<tag-sex-age :age="item1.userAge" :sex="item1.userSex"></tag-sex-age>
			</view>
		</view>
		<view class="userType icon iconfont icon-zengjia1" :class="{'icon-xuanze-yixuan':item1.userRelation==0,'icon-zengjia1':item1.userRelation==2,'icon iconfont icon-guanbi1':item1.userRelation==1}"></view>
	</view>
</template>

<script>
	import tagSexAge from '@/components/common/tag-sex-age.vue'
	import commonImage from "@/components/common/common-image.vue"
	export default {
		components: {
			tagSexAge,
			commonImage
		},
		props: {
			item1: Object
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.userItem {
		padding: 24upx 0;
		// border-bottom: solid 1upx #e1e1e1;

		image {
			flex-grow: 0;
			width: 100upx;
			height: 100upx;

			border-radius: 100%;
		}

		.userName {
			flex: 1;
			margin-left: 16upx;

			&>view:first-child {
				font-size: 36upx;
				font-weight: 500;
			}

			&>view:last-child {
				margin-top: 8upx;
			}
		}

		.userType {
			flex-grow: 0;
			margin-right: 16upx;
			font-size: 40upx;
		}
	}
</style>
