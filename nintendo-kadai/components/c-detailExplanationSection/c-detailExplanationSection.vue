<template lang="pug">
	.c-detailExplanationSection(:class='`is-${$route.query.id}`')
		.componentWrapper
			.block.is-title
				.area.is-title
					h1.title
						span.is-left
							span
							span
							span
						span.is-right
							span
							span
							span
			.block.is-contents
				.area.is-first
					.box.is-title
						h2.title
							span(v-if="$route.query.id === 'action'")
								img(src="~/assets/images/contents/detail_type01_title01.png" alt="")
							span(v-else-if="$route.query.id === 'battle'")
								img(src="~/assets/images/contents/detail_type02_title01.png" alt="")
							span(v-else-if="$route.query.id === 'rpg'")
								img(src="~/assets/images/contents/detail_type03_title01.png" alt="")
							span(v-else-if="$route.query.id === 'simulation'")
								img(src="~/assets/images/contents/detail_type04_title01.png" alt="")
							span(v-else-if="$route.query.id === 'party'")
								img(src="~/assets/images/contents/detail_type05_title01.png" alt="")
							span(v-else-if="$route.query.id === 'activity'")
								img(src="~/assets/images/contents/detail_type06_title01.png" alt="")
					.box.is-movie
						.movie
							img(src="https://placehold.jp/640x340.png")
						.movie
							img(src="https://placehold.jp/640x340.png")
					.box.is-chara
						span
						span
				.area.is-second
					.box.is-title
						h2.title
							.text(v-if="$route.query.id === 'action'")
								img(src="~/assets/images/contents/detail_type01_title02.png" alt="")
							.text(v-else-if="$route.query.id === 'battle'")
								img(src="~/assets/images/contents/detail_type02_title02.png" alt="")
							.text(v-else-if="$route.query.id === 'rpg'")
								img(src="~/assets/images/contents/detail_type03_title02.png" alt="")
							.text(v-else-if="$route.query.id === 'simulation'")
								img(src="~/assets/images/contents/detail_type04_title02.png" alt="")
							.text(v-else-if="$route.query.id === 'party'")
								img(src="~/assets/images/contents/detail_type05_title02.png" alt="")
							.text(v-else-if="$route.query.id === 'activity'")
								img(src="~/assets/images/contents/detail_type06_title02.png" alt="")
					.box.is-movie
						.movie
							img(src="https://placehold.jp/640x340.png")
						.movie
							img(src="https://placehold.jp/640x340.png")
					.box.is-chara
						span
						span
</template>

<script>
	export default {
		name: 'c-detailExplanationSection',
		
	}
</script>

<style lang="stylus">
	.c-detailExplanationSection
		position relative
		width 100%
		height 100%

		@media (max-width: 800px) {
			padding-bottom 10%
		}

		&.is-action
			.componentWrapper
				.block.is-title
					.area.is-title
						.title
							background-color #fccb18
							span.is-left
								span:nth-of-type(1)
									top 17%
									left 3%
									width 19%
									padding-top 13%
									background-image url('~/assets/images/contents/detail_title01_text01.png')
								span:nth-of-type(2)
									top 15%
									left 21%
									width 18%
									padding-top 14%
									background-image url('~/assets/images/contents/detail_title01_text02.png')
								span:nth-of-type(3)
									top 16%
									left 38%
									width 12%
									padding-top 13%
									background-image url('~/assets/images/contents/detail_title01_text03.png')
							span.is-right
								span:nth-of-type(1)
									top 11%
									left 51%
									width 17%
									padding-top 14%
									background-image url('~/assets/images/contents/detail_title01_text04.png')
								span:nth-of-type(2)
									top 13%
									left 66%
									width 16%
									padding-top 14%
									background-image url('~/assets/images/contents/detail_title01_text05.png')
								span:nth-of-type(3)
									top 12%
									left 82%
									width 14%
									padding-top 14%
									background-image url('~/assets/images/contents/detail_title01_text06.png')
				&>.block.is-contents
					&>.area.is-first
						&>.box.is-chara
							span
								&:nth-of-type(1)
									top 2%
									right 3%
									width 20%
									padding-top 17%
									background-image url('~/assets/images/contents/detail_type01_chara01.png')
								&:nth-of-type(2)
									bottom: 0%
									left: -1%
									width: 24%
									padding-top: 31%
									background-image url('~/assets/images/contents/detail_type01_chara02.png')
									
					&>.area.is-second
						&>.box.is-chara
							span
								&:nth-of-type(1)
									bottom 5%
									left 3%
									width 20%
									padding-top 19%
									background-image url('~/assets/images/contents/detail_type01_chara03.png')
								&:nth-of-type(2)
									bottom 5%
									right 3%
									width 17%
									padding-top 16%
									background-image url('~/assets/images/contents/detail_type01_chara04.png')
		&.is-battle
			.componentWrapper
				.block.is-title
					.area.is-title
						.title
							background-color #f34794
							span.is-left
								span:nth-of-type(1)
									top 10%
									left 3%
									width 17%
									padding-top 16%
									background-image url('~/assets/images/contents/detail_title02_text01.png')
								span:nth-of-type(2)
									top 10%
									left 19%
									width 17%
									padding-top 16%
									background-image url('~/assets/images/contents/detail_title02_text02.png')
								span:nth-of-type(3)
									top 12%
									left 34%
									width 17%
									padding-top 15%
									background-image url('~/assets/images/contents/detail_title02_text03.png')
							span.is-right
								span:nth-of-type(1)
									top 13%
									left 50%
									width 31%
									padding-top 15%
									background-image url('~/assets/images/contents/detail_title02_text04.png')
								span:nth-of-type(2)
									top 41%
									left 74%
									width 9%
									padding-top 9%
									background-image url('~/assets/images/contents/detail_title02_text05.png')
								span:nth-of-type(3)
									top 12%
									left 81%
									width 16%
									padding-top 15%
									background-image url('~/assets/images/contents/detail_title02_text06.png')
					&>.block.is-contents
						&>.area.is-first
							&>.box.is-chara
								span
									&:nth-of-type(1)
										top 2%
										right -4%
										width 30%
										padding-top 27%
										background-image url('~/assets/images/contents/detail_type02_chara01.png')
									&:nth-of-type(2)
										top 44%
										left 0%
										width 62%
										padding-top 38%
										background-image url('~/assets/images/contents/detail_type02_chara02.png')
						&>.area.is-second
							&>.box.is-chara
								span
									&:nth-of-type(1)
										bottom 0%
										left 3%
										width 25%
										padding-top 30%
										background-image url('~/assets/images/contents/detail_type02_chara03.png')
									&:nth-of-type(2)
										bottom -8%
										right -3%
										width 25%
										padding-top 26%
										background-image url('~/assets/images/contents/detail_type02_chara04.png')
		&.is-rpg
			.componentWrapper
				.block.is-title
					.area.is-title
						.title
							background-color #2ebcaa
							span.is-left
								span:nth-of-type(1)
									top 4%
									left 5%
									width 16%
									padding-top 17%
									background-image url('~/assets/images/contents/detail_title03_text01.png')
								span:nth-of-type(2)
									top 7%
									left 19%
									width 15%
									padding-top 16%
									background-image url('~/assets/images/contents/detail_title03_text02.png')
								span:nth-of-type(3)
									top 3%
									left 31%
									width 19%
									padding-top 18%
									background-image url('~/assets/images/contents/detail_title03_text03.png')
							span.is-right
								span:nth-of-type(1)
									top 4%
									left 49%
									width 15%
									padding-top 16%
									background-image url('~/assets/images/contents/detail_title03_text04.png')
								span:nth-of-type(2)
									top 7%
									left 62%
									width 15%
									padding-top 15%
									background-image url('~/assets/images/contents/detail_title03_text05.png')
								span:nth-of-type(3)
									top 9%
									left 74%
									width 17%
									padding-top 15%
									background-image url('~/assets/images/contents/detail_title03_text06.png')
				&>.block.is-contents
					&>.area.is-first
						&>.box.is-chara
							span
								&:nth-of-type(1)
									top 2%
									right 3%
									width 27%
									padding-top 32%
									background-image url('~/assets/images/contents/detail_type03_chara01.png')
								&:nth-of-type(2)
									top 51%
									left -2%
									width 46%
									padding-top 37%
									background-image url('~/assets/images/contents/detail_type03_chara02.png')
					&>.area.is-second
						&>.box.is-chara
							span
								&:nth-of-type(1)
									bottom 1%
									left 0%
									width 22%
									padding-top 26%
									background-image url('~/assets/images/contents/detail_type03_chara03.png')
								&:nth-of-type(2)
									bottom -15%
									right -5%
									width 34%
									padding-top 39%
									background-image url('~/assets/images/contents/detail_type03_chara04.png')
		&.is-simulation
			.componentWrapper
				.block.is-title
					.area.is-title
						.title
							background-color #70c14c
							span.is-left
								span:nth-of-type(1)
									top 4%
									left 3%
									width 19%
									padding-top 17%
									background-image url('~/assets/images/contents/detail_title04_text01.png')
								span:nth-of-type(2)
									top 2%
									left 18%
									width 17%
									padding-top 18%
									background-image url('~/assets/images/contents/detail_title04_text02.png')
								span:nth-of-type(3)
									top 4%
									left 32%
									width 17%
									padding-top 17%
									background-image url('~/assets/images/contents/detail_title04_text03.png')
							span.is-right
								span:nth-of-type(1)
									top 9%
									left 48%
									width 19%
									padding-top 16%
									background-image url('~/assets/images/contents/detail_title04_text04.png')
								span:nth-of-type(2)
									top 5%
									left 64%
									width 18%
									padding-top 16%
									background-image url('~/assets/images/contents/detail_title04_text05.png')
								span:nth-of-type(3)
									top 6%
									left 78%
									width 18%
									padding-top 16%
									background-image url('~/assets/images/contents/detail_title04_text06.png')
				&>.block.is-contents
					&>.area.is-first
						&>.box.is-chara
							span
								&:nth-of-type(1)
									top -4%
									right 12%
									width 16%
									padding-top 29%
									background-image url('~/assets/images/contents/detail_type04_chara01.png')
								&:nth-of-type(2)
									top 60%
									left -1%
									width 21%
									padding-top 31%
									background-image url('~/assets/images/contents/detail_type04_chara02.png')
					&>.area.is-second
						&>.box.is-chara
							span
								&:nth-of-type(1)
									bottom 11%
									left -1%
									width 19%
									padding-top 21%
									background-image url('~/assets/images/contents/detail_type04_chara03.png')
								&:nth-of-type(2)
									bottom 5%
									right -2%
									width 19%
									padding-top 31%
									background-image url('~/assets/images/contents/detail_type04_chara04.png')
		&.is-party
			.componentWrapper
				.block.is-title
					.area.is-title
						.title
							background-color #0697eb
							span.is-left
								span:nth-of-type(1)
									top 6%
									left 4%
									width 17%
									padding-top 16%
									background-image url('~/assets/images/contents/detail_title05_text01.png')
								span:nth-of-type(2)
									top 1%
									left 19%
									width 18%
									padding-top 17%
									background-image url('~/assets/images/contents/detail_title05_text02.png')
								span:nth-of-type(3)
									top 9%
									left 35%
									width 16%
									padding-top 16%
									background-image url('~/assets/images/contents/detail_title05_text03.png')
							span.is-right
								span:nth-of-type(1)
									top 5%
									left 50%
									width 19%
									padding-top 17%
									background-image url('~/assets/images/contents/detail_title05_text04.png')
								span:nth-of-type(2)
									top 5%
									left 66%
									width 18%
									padding-top 17%
									background-image url('~/assets/images/contents/detail_title05_text05.png')
								span:nth-of-type(3)
									top 8%
									left 81%
									width 16%
									padding-top 17%
									background-image url('~/assets/images/contents/detail_title05_text06.png')
				&>.block.is-contents
					&>.area.is-first
						&>.box.is-chara
							span
								&:nth-of-type(1)
									top -3%
									right -3%
									width 38%
									padding-top 31%
									background-image url('~/assets/images/contents/detail_type05_chara01.png')
								&:nth-of-type(2)
									top 60%
									left -1%
									width 38%
									padding-top 35%
									background-image url('~/assets/images/contents/detail_type05_chara02.png')
					&>.area.is-second
						&>.box.is-chara
							span
								&:nth-of-type(1)
									bottom -5%
									left 3%
									width 21%
									padding-top 30%
									background-image url('~/assets/images/contents/detail_type05_chara03.png')
								&:nth-of-type(2)
									bottom 5%
									right -4%
									width 24%
									padding-top 32%
									background-image url('~/assets/images/contents/detail_type05_chara04.png')
		&.is-activity
			.componentWrapper
				.block.is-title
					.area.is-title
						.title
							background-color #f96502
							span.is-left
								span:nth-of-type(1)
									top 6%
									left 3%
									width 18%
									padding-top 16%
									background-image url('~/assets/images/contents/detail_title06_text01.png')
								span:nth-of-type(2)
									top 9%
									left 18%
									width 16%
									padding-top 15%
									background-image url('~/assets/images/contents/detail_title06_text02.png')
								span:nth-of-type(3)
									top 20%
									left 31%
									width 21%
									padding-top 11%
									background-image url('~/assets/images/contents/detail_title06_text03.png')
							span.is-right
								span:nth-of-type(1)
									top 10%
									left 50%
									width 17%
									padding-top 15%
									background-image url('~/assets/images/contents/detail_title06_text04.png')
								span:nth-of-type(2)
									top 13%
									left 64%
									width 21%
									padding-top 14%
									background-image url('~/assets/images/contents/detail_title06_text05.png')
								span:nth-of-type(3)
									top 9%
									left 82%
									width 16%
									padding-top 15%
									background-image url('~/assets/images/contents/detail_title06_text06.png')
				&>.block.is-contents
					&>.area.is-first
						&>.box.is-chara
							span
								&:nth-of-type(1)
									top -3%
									right 12%
									width 19%
									padding-top 25%
									background-image url('~/assets/images/contents/detail_type06_chara01.png')
								&:nth-of-type(2)
									top 45%
									left -1%
									width 32%
									padding-top 38%
									background-image url('~/assets/images/contents/detail_type06_chara02.png')
					&>.area.is-second
						&>.box.is-chara
							span
								&:nth-of-type(1)
									bottom 1%
									left -3%
									width 36%
									padding-top 41%
									background-image url('~/assets/images/contents/detail_type06_chara03.png')
								&:nth-of-type(2)
									bottom 1%
									right -2%
									width 23%
									padding-top 31%
									background-image url('~/assets/images/contents/detail_type06_chara04.png')
		.componentWrapper
			display flex
			flex-direction column
			width 100%
			height 100%
			@media (min-width: 1400px) {
				@media (max-height: 800px) {
					width 70%
					margin-left 15%	
				}
			}
			@media (max-height: 600px) 
				width 70%
				margin-left 15%
			
			@media (max-width: 800px) 
				flex-wrap wrap

			&>.block.is-title
				position relative
				width 100%
				padding-top 19%

				.area.is-title
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					padding 3% 3% 0
					box-sizing border-box

				.title
					position relative
					width 100%
					height 100%
					border-radius 10px

					&:before
						content ""
						position absolute
						top 0
						left 0
						width 100%
						height 100%
						background-image url('~/assets/images/common/common_stripe_pattern01.png')
						background-size 2.5vw
						opacity 0.08
				
				.title
					span.is-left, span.is-right
						display block
						span
							display block
							position absolute
							background-size contain
							background-repeat no-repeat
			
			&>.block.is-contents
				position relative
				width 100%
				height 100%

				&>.area.is-first, &>.area.is-second
					position absolute
					width 100%
					height 50%
					padding 3%
					box-sizing border-box

					@media (max-width: 800px) {
						position relative
						height auto
						padding 3%
					}

					&>.box.is-title
						position relative
						z-index 1000
						h2.title
							width 100%
							img
								width 100%
								height auto
					&>.box.is-chara
						span
							display block
							position absolute
							background-size contain
							background-repeat no-repeat
				
					&>.box.is-movie
						position relative
						width 100%
						height 100%
						// padding-top 50%
						@media (max-width: 800px) {
							padding-top 80%
						}

						.movie
							position absolute

							img
								position absolute
								top 0
								left 0
								width 100%
								height 100%
				
				&>.area.is-first
					top 0
					&>.box.is-movie
						.movie
							&:nth-of-type(1)
								top 0
								left 0
								width 60%
								padding-top 34%
								transform rotate(-5deg)

								@media (max-width: 800px) {
									left 10%
									width 80%
									padding-top 50%
								}

							&:nth-of-type(2)
								bottom 30%
								right 5%
								width 45%
								padding-top 24%
								transform rotate(5deg)

								@media (max-width: 800px) {
									top 57%
									right 8%
									width 70%
									padding-top 40%
								}

				&>.area.is-second
					bottom 0
					&>.box.is-movie
						.movie
							&:nth-of-type(1)
								top 15%
								left 5%
								width 45%
								padding-top 24%
								transform rotate(-5deg)

								@media (max-width: 800px) {
									top 5%
									left 10%
									width 80%
									padding-top 50%
									transform rotate(5deg)
								}

							&:nth-of-type(2)
								bottom 15%
								right 0
								width 60%
								padding-top 34%
								transform rotate(5deg)

								@media (max-width: 800px) {
									top 57%
									right 8%
									width 70%
									padding-top 40%
									transform rotate(-5deg)
								}
</style>

