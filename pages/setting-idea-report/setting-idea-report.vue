<template>
	<view>
		<view v-for="(item, index) in list" :key="index">
			<uni-collapse ref="add" class="warp" @change="change">
				<uni-collapse-item :open="false" :show-animation="true" :title="item.subName">
					<view class="content">{{ item.content }}</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {

			return {
				list: [{
						subName: '客服什么时候在线',
						content: '亲爱的仿糗友，客服的工作时间为周一到周六10:00~12:00  14:00~19:00 非工作时间的咨询反馈会自动转为留言，客服上班后会第一时间进行回复哦~ \n\n PS.紧急问题可以加官方XXXXXXXXX进行反馈'
					},
					{
						subName: '客服什么时候在线',
						content: '亲爱的仿糗友，客服的工作时间为周一到周六10:00~12:00  14:00~19:00 非工作时间的咨询反馈会自动转为留言，客服上班后会第一时间进行回复哦~ \n\n PS.紧急问题可以加官方XXXXXXXXX进行反馈'
					},
					{
						subName: '客服什么时候在线',
						content: '亲爱的仿糗友，客服的工作时间为周一到周六10:00~12:00  14:00~19:00 非工作时间的咨询反馈会自动转为留言，客服上班后会第一时间进行回复哦~ \n\n PS.紧急问题可以加官方XXXXXXXXX进行反馈'
					}, {
						subName: '客服什么时候在线',
						content: '亲爱的仿糗友，客服的工作时间为周一到周六10:00~12:00  14:00~19:00 非工作时间的咨询反馈会自动转为留言，客服上班后会第一时间进行回复哦~ \n\n PS.紧急问题可以加官方XXXXXXXXX进行反馈'
					}
				],
			};
		},
		methods: {
			change: function(val) {
				console.log(val);
			}
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #FFFFFF;
		padding: 16upx;
	}
</style>
