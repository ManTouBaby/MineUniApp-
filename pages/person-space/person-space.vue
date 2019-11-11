<template>
	<view>
		<view class="person-header">
			<image class="header-bg" src="../../static/datapic/27.jpg" mode="aspectFill"></image>
			<view class="header-container mf-center">
				<view>
					<image class="user-pic" src="../../static/userpic/6.jpg" mode="aspectFill" />
					<view class="header-name mf-center">昵称
						<view class="tagSexAge">
							<tag-sex-age :age="12" :sex="1"></tag-sex-age>
						</view>
					</view>
					<view class="mf-horizontal-center">
						<view class="is-guang-zhu mf-center">关注</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import tagSexAge from '../../components/common/tag-sex-age.vue'
	export default {
		components: {
			tagSexAge
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.person-header {
		position: relative;

		.header-bg {
			position: absolute;
			top: 0;
			left: 0;

			width: 100%;
			height: 420upx;

		}



		.header-container {
			position: relative;
			width: 100%;
			height: 420upx;

			.user-pic {
				width: 160upx;
				height: 160upx;
				border-radius: 100%;

				margin-top: 46upx;
			}

			.header-name {
				color: #FFFFFF;

				.tagSexAge {
					margin-left: 8upx;
				}
			}

			.is-guang-zhu {
				display: inline-flex;
				margin-top: 16upx;
				padding: 0 20upx;
				border-radius: 8upx;
				background-color: #FFE933;
			}
		}
	}
</style>
