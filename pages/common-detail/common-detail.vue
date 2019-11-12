<template>
	<view>
		<common-item class="content m-border-bottom" :item="itemData" :isShowBoder="false"></common-item>

		<view class="commentContainer">
			<view>最新评论</view>

			<comment-item>
				<view>
					<comment-item></comment-item>
					<comment-item></comment-item>
					<comment-item></comment-item>
				</view>
			</comment-item>
		</view>


	<view>
		
	</view>
	</view>
</template>

<script>
	import commonItem from "@/components/common/common-item.vue"
	import commentItem from "@/components/common/comment-item.vue"
	export default {
		components: {
			commonItem,
			commentItem
		},
		onLoad(res) {
			this.itemData = JSON.parse(decodeURIComponent(res.item));
			uni.setNavigationBarTitle({
				title: this.itemData.title
			})
			// console.log(this.itemData);
		},
		data() {
			return {
				itemData: Object
			};
		}
	}
</script>

<style lang="scss" scoped>
	.commentContainer {
		padding: 0 16upx;

		&>view:first-child {
			padding: 16upx 0;
			font-size: 26upx;
			font-weight: bold;
		}

		
	}
</style>
