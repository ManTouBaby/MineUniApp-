<template>
	<view class="paperItem mf-vertical-center animated fadeInLeft">
		<view>
			<image :src="item.userpic" mode="aspectFill" lazy-load></image>
		</view>
		<view>
			<view class="mf-horizontal-space-between">
				<view class="userName">{{item.userName}}</view>
				<view class="updateTime">{{item.updateTime}}</view>
			</view>
			<view class="newMSG mf-vertical-center mf-horizontal-space-between">
				<view class="label-breviary-1">{{item.content}}</view>
				<uniBadge v-if="item.noReadCount!=0" :text="item.noReadCount+''" type="error"></uniBadge>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue'
	export default{
		components:{
			uniBadge
		},
		props:{
			item:Object
		},
		data() {
			return {
			}
		},
	}
</script>

<style lang="scss" scoped>
	.paperItem {
		padding: 16upx 0;
		border-bottom: #e1e1e1 1upx solid;
	
		&>view:first-child {
			image {
				width: 100upx;
				height: 100upx;
	
				border-radius: 100%;
				margin-right: 12upx;
				flex-grow: 0;
			}
		}
	
		&>view:last-child {
			flex: 1;
	
			.userName {
				color: #262626;
				font-size: 30upx;
			}
	
			.updateTime {
				color: #DBDBDB;
				font-size: 28upx;
			}
	
			.newMSG {
				color: #A5a5a5;
				font-size: 28upx;
	
				uniBadge {
					flex-grow: 0;
				}
			}
		}
	}
</style>
