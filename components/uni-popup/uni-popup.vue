<template>
	<view v-if="showPopup" class="uni-popup">
		<view :class="[ani, animation ? 'ani' : '', !custom ? 'uni-custom' : '']" class="uni-popup-mask" @click="close(true)" />
		<view :class="[type, ani, animation ? 'ani' : '', !custom ? 'uni-custom' : '']" class="uni-popup-wrapper" @click="close(true)">
			<view class="uni-popup-wrapper-box" @click.stop="clear">
				<slot />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniPopup',
		props: {
			// 开启动画
			animation: {
				type: Boolean,
				default: true
			},
			// 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
			type: {
				type: String,
				default: 'center'
			},
			// 是否开启自定义
			custom: {
				type: Boolean,
				default: false
			},
			// maskClick
			maskClick: {
				type: Boolean,
				default: true
			},
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				ani: '',
				showPopup: false
			}
		},
		watch: {
			show(newValue) {
				console.log("显示测试--------");
				if (newValue) {
					this.open();
				} else {
					this.close();
				}
			}
		},
		created() {},
		methods: {
			clear() {},
			open() {
				this.$emit('change', {
					show: true
				})
				this.showPopup = true
				this.$nextTick(() => {
					setTimeout(() => {
						this.ani = 'uni-' + this.type
					}, 30)
				})
			},
			close(type) {
				if (!this.maskClick && type) return
				this.$emit('change', {
					show: false
				})
				this.ani = ''
				this.$nextTick(() => {
					setTimeout(() => {
						this.showPopup = false
					}, 300)
				})
			}
		}
	}
</script>
<style>
	@charset "UTF-8";

	.uni-popup {
		position: fixed;
		top: 0;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 998;
		overflow: hidden
	}

	.uni-popup-mask {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 998;
		background: rgba(0, 0, 0, .4);
		opacity: 0
	}

	.uni-popup-mask.ani {
		transition: all .3s
	}

	.uni-popup-mask.uni-bottom,
	.uni-popup-mask.uni-center,
	.uni-popup-mask.uni-top {
		opacity: 1
	}

	.uni-popup-wrapper {
		position: absolute;
		z-index: 999;
		box-sizing: border-box
	}

	.uni-popup-wrapper.ani {
		transition: all .3s
	}

	.uni-popup-wrapper.top {
		top: 0;
		left: 0;
		width: 100%;
		transform: translateY(-100%)
	}

	.uni-popup-wrapper.bottom {
		bottom: 0;
		left: 0;
		width: 100%;
		transform: translateY(100%)
	}

	.uni-popup-wrapper.center {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: scale(1.2);
		opacity: 0
	}

	.uni-popup-wrapper-box {
		position: relative;
		box-sizing: border-box
	}

	.uni-popup-wrapper.uni-custom .uni-popup-wrapper-box {
		padding: 30upx;
		background: #fff
	}

	.uni-popup-wrapper.uni-custom.center .uni-popup-wrapper-box {
		position: relative;
		max-width: 80%;
		max-height: 80%;
		overflow-y: scroll
	}

	.uni-popup-wrapper.uni-custom.bottom .uni-popup-wrapper-box,
	.uni-popup-wrapper.uni-custom.top .uni-popup-wrapper-box {
		width: 100%;
		max-height: 500px;
		overflow-y: scroll
	}

	.uni-popup-wrapper.uni-bottom,
	.uni-popup-wrapper.uni-top {
		transform: translateY(0)
	}

	.uni-popup-wrapper.uni-center {
		transform: scale(1);
		opacity: 1
	}
</style>
