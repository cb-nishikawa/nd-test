<template lang="pug">
	.c-topBottomBlock01
		.componentWrapper
			.block.is-text
				.area.is-text
					p.text
						span.moduleWrapper
							img(src="~/assets/images/contents/top_topBottomBlock01_text01.png" alt="遊びたいゲームをクリックしてね")
				.area.is-image
					.parts.chara01
					.parts.block01
					.parts.chara02
					.parts.block02
			.block.is-bg
				c-topBottomBlock01Canvas01
</template>

<script>
	export default {
		name: 'c-topBottomBlock01',
	}
</script>
<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"
	.c-topBottomBlock01
		display flex
		align-items center
		position absolute
		width 100%
		height 15vw
		max-height 150px
		bottom 0
		left 0
		

		&>.componentWrapper
			display flex
			justify-content center
			width 50%
			max-width 500px
			margin 0 auto

			&>.block.is-text
				position relative
				z-index 100
				
				&>.area.is-text
					position relative
					background-color #f5c209
					box-shadow inset 0 0.5vw 0 rgba(255, 255, 255, 0.5);
					border-radius 6px
					box-shadow 0 0.5vw 1vw rgba(0, 0, 0, 0.1);

					&:after
						content ""
						display block
						position absolute
						top 0
						left 0
						width 100%
						height 100%
						background-image url('~/assets/images/common/common_stripe_pattern01.png')
						background-size 2%
						opacity 0.08

					.text
						position relative
						
						padding 5% 10%
						z-index 1000

						&:before, &:after, .moduleWrapper:before, .moduleWrapper:after
							content ""
							display block
							position absolute
							width 1vw
							height 1vw
							background-image url('~/assets/images/contents/top_topBottomBlock01_bolt01.png')
							background-repeat no-repeat
							background-size contain
							background-position center
							z-index 500

						&:before, &:after
							left 8px
						.moduleWrapper:before, .moduleWrapper:after
							right 8px
						&:before, .moduleWrapper:before
							top 8px
						&:after, .moduleWrapper:after
							bottom 8px
						.moduleWrapper
							display block
							img
								width 100%
								height auto

				.area.is-image
					.parts
						position absolute
						background-repeat no-repeat
						background-size contain

					.chara01
						top 0
						left 0
						width 15%
						padding-top 15%
						background-image url('~/assets/images/contents/top_topBottomBlock01_chara01.png')
						transform translate3d(-110px, 15px, 0)

					.block01
						top 0
						left 0
						width 22%
						padding-top 8%
						background-image url('~/assets/images/contents/top_topBottomBlock01_block01.png')
						transform translate3d(-220px, -10px, 0)
					
					.chara02
						top 0
						right 0
						width 20%
						padding-top 20%
						background-image url('~/assets/images/contents/top_topBottomBlock01_chara02.png')
						transform translate3d(110px, 15px, 0)
					
					.block02
						top 0
						right 0
						width 31%
						padding-top 6%
						background-image url('~/assets/images/contents/top_topBottomBlock01_block02.png')
						transform translate3d(250px, 0, 0)
							
				
</style>

