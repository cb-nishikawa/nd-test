<template lang="pug">
	.c-topBottomBlock01_canvas01
		canvas#topBottomBlock01CanvasBg.canvas
</template>

<script>
	let _g;
	let canvas, context, centerX, centerY, maskPattern, pattern, bgImg, _t;

	export default {
		name: 'c-topBottomBlock01_canvas01',
		mounted() {
			_g = window.GLOBAL;

			canvas = document.getElementById('topBottomBlock01CanvasBg')
			context = canvas.getContext('2d');

			this.setCanvas()
			this.resizeCanvas();

			_t = this
		},
		methods: {
			setCanvas() {
				bgImg = new Image();
				bgImg.onload = function () {
					pattern = context.createPattern(bgImg, 'repeat');
					_t.drawMask();
				};
				bgImg.src = '/images/common/common_topBottomBlock_bg01.png';
				
			},
			drawMask() {
				let maskImg = new Image();
					maskImg.onload = function () {
						canvas.width = _g.GLOBAL_WIDTH;
						canvas.height = canvas.parentNode.clientHeight;
						
						context.fillStyle = pattern;
						context.fillRect(0, 0, canvas.width, maskImg.height);


						context.globalCompositeOperation = 'destination-in';
						maskPattern = context.createPattern(maskImg, 'repeat');
						context.fillStyle = maskPattern;
						context.fillRect(0, 0, canvas.width, maskImg.height);

						
						context.globalCompositeOperation = 'source-over';
						context.fillStyle = pattern;
						context.fillRect(0, maskImg.height, canvas.width, canvas.height);
					};
					maskImg.src = '/images/common/common_topBottomBlock_bg01_mask01.png';
			},
			resizeCanvas() {
				_g.resize(function(){
					context.clearRect(0, 0, canvas.width, canvas.height);
					_t.drawMask()
				})
			}
		}
	}
</script>

<style lang="stylus">
	.c-topBottomBlock01_canvas01
		position absolute
		top 0
		left 0
		width 100%
		height 100%
		z-index 0

		&:after
			content ""
			display block
			position absolute
			bottom 0
			left 0
			width 100%
			height 1.5vw
			max-height 20px
			background-image url('~/assets/images/common/common_topBottomBlock_bg02.png')
		
		canvas
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			z-index 0
</style>

