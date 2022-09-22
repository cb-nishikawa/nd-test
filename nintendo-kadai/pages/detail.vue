<template lang="pug">
	div.l-detailPage01
		.c-detailPageBlock01
			.componentWrapper
				.block.is-left
					c-detailExplanationSection
				.block.is-right
					.area.is-contents
						c-detailContentsSection
		.c-detailBackBtn01
			.componentWrapper
				.block.is-btn
					p.btn
						nuxt-link(to="/")
							span.is-icon
								img(src="~/assets/images/common/common_back_btn_icon01.png" alt="")
							span.is-text
								img(src="~/assets/images/common/common_back_btn_text01.png" alt="")
</template>

<script>
	export default {
		name: 'DetailPage',
		layout: "l-mainWrapper01"
	}
</script>

<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"
	.c-detailPageBlock01
		position fixed
		top 0
		left 0
		width 100%
		height 100%
		@media (max-width: 800px) {
			overflow-y scroll
			overflow-x hidden
		}

		&>.componentWrapper	
			&>.block
				position absolute
				top 0
				width 50%
				height 100%

				@media (max-width: 800px) {
					position static
					width 100%
				}
			&>.block.is-left
				// overflow-y auto
				// overflow-x hidden
				left 0
				z-index 0

			&>.block.is-right
				overflow-y auto
				overflow-x hidden
				right 0
				background-color #FFF
				z-index 1000

				// @media (max-width: 800px) {
				// 	transform translate3d(0, 100%, 0)
				// }

				&>.area.is-contents	
					height 100%
	.c-detailBackBtn01
		position fixed
		right 0
		bottom 0
		width 11%
		padding-top 5%
		z-index 9000
		&>.componentWrapper
			&>.block.is-btn
				a
					overflow hidden
					display flex
					justify-content center
					align-items center
					flex-wrap wrap
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					text-decoration none
					background-color #d31616
					border-top-left-radius 20px

					&:before
						content ""
						display block
						position absolute
						top 0
						left 0
						width 100%
						height 100%
						background-image url('~/assets/images/common/common_stripe_pattern01.png')
						background-size 5%
						opacity 0.08
					span
						display block
						position relative
						z-index 100
						&.is-icon
							width 28%
							margin-right 3%
						&.is-text
							width 40%
						
						img
							width 100%
							height auto
					
		// 		position fixed
		// 		right 0
		// 		bottom 0
		// 		z-index 9000
</style>