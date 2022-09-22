<template lang="pug">
	.c-topBtnSection01_button01(:class='`${className}`')
		.conponentWrapper
			.block.is-bg
				.area.is-text
					.box.is-text
						p.text
							span.is-top
								span
								span
								span
							span.is-bottom
								span
								span
								span
						//- p.text(v-if="className === 'is-type01'")
						//- 	span.is-top
						//- 		span
						//- 		span
						//- 		span
						//- 	span.is-bottom
						//- 		span
						//- 		span
						//- 		span
						

					.box.is-chara
						.inner
							.chara.chara01
								span
							.chara.chara02
								span
							.chara.chara03
								span
							.chara.chara04
								span
					.box.is-btn
						.inner
							p.text(v-if="className === 'is-type01'")
								img(src="~/assets/images/contents/top_btn_btn_text01.png" alt="アクションゲームで遊ぶ")
							p.text(v-else-if="className === 'is-type02'")
								img(src="~/assets/images/contents/top_btn_btn_text02.png" alt="アクションゲームで遊ぶ")
							p.text(v-else-if="className === 'is-type03'")
								img(src="~/assets/images/contents/top_btn_btn_text03.png" alt="アクションゲームで遊ぶ")
							p.text(v-else-if="className === 'is-type04'")
								img(src="~/assets/images/contents/top_btn_btn_text04.png" alt="アクションゲームで遊ぶ")
							p.text(v-else-if="className === 'is-type05'")
								img(src="~/assets/images/contents/top_btn_btn_text05.png" alt="アクションゲームで遊ぶ")
							p.text(v-else-if="className === 'is-type06'")
								img(src="~/assets/images/contents/top_btn_btn_text06.png" alt="アクションゲームで遊ぶ")
							.arrow
				.area.is-front
					.box.is-inner
				.area.is-back

</template>

<script>
	export default {
		name: 'c-topBtnSection01_button01',
		props: {
			className: {
				type: String,
				default: 'is-type01'
			},
		},
	}
</script>

<style lang="stylus">
	.c-topBtnSection01_button01
		display block

		position relative
		width 100%
		padding-top 70%
		

		&:hover
			.conponentWrapper
				&>.block.is-bg
					&>.area.is-front
						transform translate3d(0, 0, 0)
				
					&>.area.is-text
						transform translate3d(0, 0, 0)
						
						&>.box.is-chara
							.inner
								.chara01
									transform rotate(-10deg) translate3d(-4%, -4%, 0)
								.chara02
									transform rotate(10deg) translate3d(4%, 4%, 0)
								.chara03
									transform rotate(10deg) translate3d(4%, 4%, 0)
								.chara04
									transform rotate(-10deg) translate3d(-4%, -4%, 0)
						.box.is-btn
							background-color #112d54
							.inner
								background-image none


						&>.box.is-text
							.text
								span.is-top
									span:nth-of-type(1)
										transform rotate(5deg)
									span:nth-of-type(2)
										transform rotate(5deg)
									span:nth-of-type(3)
										transform rotate(-5deg)
								span.is-bottom
									span:nth-of-type(1)
										transform rotate(5deg)
									span:nth-of-type(2)
										transform rotate(5deg)
									span:nth-of-type(3)
										transform rotate(-5deg)
						


		
		&.is-type01
			.conponentWrapper
				&>.block.is-bg
					background-color #b99105

					&>.area.is-front
						background rgb(212,165,0)
						background linear-gradient(0deg, rgba(212,165,0,1) 0%, rgba(254,240,186,1) 100%)
						&>.box.is-inner
							background-color #fccb18
				&>.block.is-bg
					&>.area.is-text
						&>.box.is-text
							.text
								span.is-top
									span:nth-of-type(1)
										top 35%
										left 4%
										width 35%
										padding-top 23%
										background-image url('~/assets/images/contents/top_btn01_text01.png')
									span:nth-of-type(2)
										top 16%
										left 36%
										width 35%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn01_text02.png')
									span:nth-of-type(3)
										top 50%
										right 2%
										width 31%
										padding-top 15%
										background-image url('~/assets/images/contents/top_btn01_text03.png')
								span.is-bottom
									span:nth-of-type(1)
										bottom 0
										left 7%
										width 28%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn01_text04.png')
									span:nth-of-type(2)
										bottom 8%
										left 32%
										width 28%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn01_text05.png')
									span:nth-of-type(3)
										bottom 10%
										right 14%
										width 28%
										padding-top 22%
										background-image url('~/assets/images/contents/top_btn01_text06.png')
						&>.box.is-chara
							.inner
								.chara01
									width 24%
									padding-top 24%
									span
										background-image url('~/assets/images/contents/top_btn01_chara01.png')
										transform translate3d(35%, -30%, 0)

								.chara02
									width 30%
									padding-top 30%
									span
										background-image url('~/assets/images/contents/top_btn01_chara02.png')
										transform translate3d(-15%, -20%, 0)

								.chara03
									width 25%
									padding-top 25%
									span
										background-image url('~/assets/images/contents/top_btn01_chara03.png')
										transform translate3d(14%, -69%, 0)

								.chara04
									width 30%
									padding-top 40%
									span
										background-image url('~/assets/images/contents/top_btn01_chara04.png')
										transform translate3d(-40%, 0, 0)
								

		&.is-type02
			.conponentWrapper
				&>.block.is-bg
					background-color #b32263

					&>.area.is-front
						background rgb(207,55,123)
						background linear-gradient(0deg, rgba(207,55,123,1) 0%, rgba(250,149,193,1) 100%)
						&>.box.is-inner
							background-color #f34794
					&>.area.is-text
						&>.box.is-text
							.text
								span.is-top
									span:nth-of-type(1)
										top 18%
										left 12%
										width 29%
										padding-top 27%
										background-image url('~/assets/images/contents/top_btn02_text01.png')
									span:nth-of-type(2)
										top 16%
										left 36%
										width 29%
										padding-top 27%
										background-image url('~/assets/images/contents/top_btn02_text02.png')
									span:nth-of-type(3)
										top 16%
										right 10%
										width 30%
										padding-top 26%
										background-image url('~/assets/images/contents/top_btn02_text03.png')
								span.is-bottom
									span:nth-of-type(1)
										bottom 1%
										left 11%
										width 48%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn02_text04.png')
									span:nth-of-type(2)
										bottom 6%
										left 50%
										width 12%
										padding-top 11%
										background-image url('~/assets/images/contents/top_btn02_text05.png')
									span:nth-of-type(3)
										bottom 3%
										right 14%
										width 26%
										padding-top 24%
										background-image url('~/assets/images/contents/top_btn02_text06.png')
						&>.box.is-chara
							.inner
								.chara01
									width 80%
									padding-top 52%
									span
										background-image url('~/assets/images/contents/top_btn02_chara01.png')
										transform translate3d(-12%, -40%, 0)
								.chara02
									width 35%
									padding-top 31%
									span
										background-image url('~/assets/images/contents/top_btn02_chara02.png')
										transform translate3d(25%, -20%, 0)
								.chara03
									width 34%
									padding-top 35%
									span
										background-image url('~/assets/images/contents/top_btn02_chara03.png')
										transform translate3d(20%, -10%, 0)
								.chara04
									width 30%
									padding-top 38%
									span
										background-image url('~/assets/images/contents/top_btn02_chara04.png')
										transform translate3d(-29%, 1%, 0)
		&.is-type03
			.conponentWrapper
				&>.block.is-bg
					background-color #1a887a

					&>.area.is-front
						background rgb(18,166,147)
						background linear-gradient(0deg, rgba(18,166,147,1) 0%, rgba(15,204,180,1) 100%)
						&>.box.is-inner
							background-color #2ebcaa
					&>.area.is-text
						&>.box.is-text
							.text
								span.is-top
									span:nth-of-type(1)
										top 8%
										left 13%
										width 26%
										padding-top 27%
										background-image url('~/assets/images/contents/top_btn03_text01.png')
									span:nth-of-type(2)
										top 2%
										left 36%
										width 26%
										padding-top 27%
										background-image url('~/assets/images/contents/top_btn03_text02.png')
									span:nth-of-type(3)
										top 5%
										right 9%
										width 33%
										padding-top 27%
										background-image url('~/assets/images/contents/top_btn03_text03.png')
								span.is-bottom
									span:nth-of-type(1)
										bottom 2%
										left 16%
										width 24%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn03_text04.png')
									span:nth-of-type(2)
										bottom 8%
										left 37%
										width 25%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn03_text05.png')
									span:nth-of-type(3)
										bottom 5%
										right 12%
										width 31%
										padding-top 26%
										background-image url('~/assets/images/contents/top_btn03_text06.png')
						&>.box.is-chara
							.inner
								.chara01
									width 48%
									padding-top 39%
									span
										background-image url('~/assets/images/contents/top_btn03_chara01.png')
										transform translate3d(-7%, -25%, 0)
								.chara02
									width 28%
									padding-top 34%
									span
										background-image url('~/assets/images/contents/top_btn03_chara02.png')
										transform translate3d(7%, -20%, 0)
								.chara03
									width 38%
									padding-top 46%
									span
										background-image url('~/assets/images/contents/top_btn03_chara03.png')
										transform translate3d(25%, 0%, 0)
								.chara04
									width 26%
									padding-top 31%
									span
										background-image url('~/assets/images/contents/top_btn03_chara04.png')
										transform translate3d(0, -32%, 0)
		&.is-type04
			.conponentWrapper
				&>.block.is-bg
					background-color #4c912d

					&>.area.is-front
						background rgb(94,188,52)
						background linear-gradient(0deg, rgba(94,188,52,1) 0%, rgba(148,221,116,1) 100%)
						&>.box.is-inner
							background-color #70c14c
					&>.area.is-text
						&>.box.is-text
							.text
								span.is-top
									span:nth-of-type(1)
										top 12%
										left 15%
										width 28%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn04_text01.png')
									span:nth-of-type(2)
										top 5%
										left 37%
										width 28%
										padding-top 28%
										background-image url('~/assets/images/contents/top_btn04_text02.png')
									span:nth-of-type(3)
										top 11%
										right 16%
										width 25%
										padding-top: 26%;
										background-image url('~/assets/images/contents/top_btn04_text03.png')
								span.is-bottom
									span:nth-of-type(1)
										bottom 0
										left 13%
										width 27%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn04_text04.png')
									span:nth-of-type(2)
										bottom 8%
										left 36%
										width 28%
										padding-top 24%
										background-image url('~/assets/images/contents/top_btn04_text05.png')
									span:nth-of-type(3)
										bottom 3%
										right 15%
										width 28%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn04_text06.png')
						&>.box.is-chara
							.inner
								.chara01
									width 23%
									padding-top 33%
									span
										background-image url('~/assets/images/contents/top_btn04_chara01.png')
										transform translate3d(-23%, -6%, 0)
								.chara02
									width 20%
									padding-top 35%
									span
										background-image url('~/assets/images/contents/top_btn04_chara02.png')
										transform translate3d(-2%, -20%, 0)
								.chara03
									width 21%
									padding-top 32%
									span
										background-image url('~/assets/images/contents/top_btn04_chara03.png')
										transform translate3d(5%, -32%, 0)
								.chara04
									width 18%
									padding-top 21%
									span
										background-image url('~/assets/images/contents/top_btn04_chara04.png')
										transform translate3d(-31%, -72%, 0)
		&.is-type05
			.conponentWrapper
				&>.block.is-bg
					background-color #047fc7

					&>.area.is-front
						background rgb(20,157,236)
						background linear-gradient(0deg, rgba(20,157,236,1) 0%, rgba(109,189,236,1) 100%)
						&>.box.is-inner
							background-color #0697eb
					&>.area.is-text
						&>.box.is-text
							.text
								span.is-top
									span:nth-of-type(1)
										top 21%
										left 14%
										width 26%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn05_text01.png')
									span:nth-of-type(2)
										top 16%
										left 38%
										width 27%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn05_text02.png')
									span:nth-of-type(3)
										top 18%
										right 14%
										width 25%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn05_text03.png')
								span.is-bottom
									span:nth-of-type(1)
										bottom 2%
										left 16%
										width 28%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn05_text04.png')
									span:nth-of-type(2)
										bottom 8%
										left 39%
										width 28%
										padding-top 25%
										background-image url('~/assets/images/contents/top_btn05_text05.png')
									span:nth-of-type(3)
										bottom 2%
										right 13%
										width 26%
										padding-top 26%
										background-image url('~/assets/images/contents/top_btn05_text06.png')
						&>.box.is-chara
							.inner
								.chara01
									width 40%
									padding-top 37%
									span
										background-image url('~/assets/images/contents/top_btn05_chara01.png')
										transform translate3d(-21%, -22%, 0)
								.chara02
									width 40%
									padding-top 32%
									span
										background-image url('~/assets/images/contents/top_btn05_chara02.png')
										transform translate3d(14%, -26%, 0)
								.chara03
									width 25%
									padding-top 34%
									span
										background-image url('~/assets/images/contents/top_btn05_chara03.png')
										transform translate3d(39%, -25%, 0)
								.chara04
									width 22%
									padding-top 32%
									span
										background-image url('~/assets/images/contents/top_btn05_chara04.png')
										transform translate3d(-5%, -24%, 0)
		&.is-type06
			.conponentWrapper
				&>.block.is-bg
					background-color #cb6205

					&>.area.is-front
						background rgb(243,107,15)
						background linear-gradient(0deg, rgba(243,107,15,1) 0%, rgba(250,153,88,1) 100%)
						&>.box.is-inner
							background-color #f96502
					&>.area.is-text
						&>.box.is-text
							.text
								span.is-top
									span:nth-of-type(1)
										top 17%
										left 12%
										width 27%
										padding-top 24%
										background-image url('~/assets/images/contents/top_btn06_text01.png')
									span:nth-of-type(2)
										top 16%
										left 36%
										width 25%
										padding-top 24%
										background-image url('~/assets/images/contents/top_btn06_text02.png')
									span:nth-of-type(3)
										top 27%
										right 9%
										width 32%
										padding-top 19%
										background-image url('~/assets/images/contents/top_btn06_text03.png')
								span.is-bottom
									span:nth-of-type(1)
										bottom 8%
										left 11%
										width 27%
										padding-top 24%
										background-image url('~/assets/images/contents/top_btn06_text04.png')
									span:nth-of-type(2)
										bottom 9%
										left 35%
										width 33%
										padding-top 22%
										background-image url('~/assets/images/contents/top_btn06_text05.png')
									span:nth-of-type(3)
										bottom 7%
										right 9%
										width 25%
										padding-top 23%
										background-image url('~/assets/images/contents/top_btn06_text06.png')
						&>.box.is-chara
							.inner
								.chara01
									width 33%
									padding-top 39%
									span
										background-image url('~/assets/images/contents/top_btn06_chara01.png')
										transform translate3d(-9%, -24%, 0)
								.chara02
									width 21%
									padding-top 28%
									span
										background-image url('~/assets/images/contents/top_btn06_chara02.png')
										transform translate3d(-11%, -26%, 0)
								.chara03
									width 22%
									padding-top 30%
									span
										background-image url('~/assets/images/contents/top_btn06_chara03.png')
										transform translate3d(20%, -27%, 0)
								.chara04
									width 33%
									padding-top 37%
									span
										background-image url('~/assets/images/contents/top_btn06_chara04.png')
										transform translate3d(-22%, -6%, 0)


		.conponentWrapper
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			padding 0.8vw
			background-color #d0d0d0
			border-radius 2.5vw
			box-sizing border-box
			box-shadow 0 0 0.3vw rgba(0, 0, 0, 0.3)
		
			&:before
				content ""
				display block
				position absolute
				top 0.6vw
				left 0.6vw
				width calc(100% - 1.2vw)
				height calc(100% - 1.2vw)
				background-color #676767
				border-radius 2.0vw
						
			&>.block.is-bg
				position relative
				width 100%
				height 100%
				
				border-radius 1.8vw

				&>.area.is-front
					overflow hidden
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					border-radius 2.0vw
					transform translate3d(0, -2.0vw, 0)
					transition all 0.3s ease

					&>.box.is-inner
						display block
						position absolute
						top 0.3vw
						left 0.3vw
						width calc(100% - 0.6vw)
						height calc(100% - 0.6vw)
						border-radius 1.5vw

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
				

				&>.area.is-text
					position absolute
					top 0
					left 0
					width 100%
					height 100%
					transform translate3d(0, -2.0vw, 0)
					transition all 0.3s ease
					z-index 1000

					&>.box.is-text
						position absolute
						top 0
						left 0
						width 100%
						height 80%
						z-index 2000

						.text
							span
								display block
								span
									position absolute
									background-repeat no-repeat
									background-size contain
									transition all 0.3s ease
							span.is-top
								position absolute
								top 0
								left 0
								width 100%
								height 50%

							span.is-bottom
								position absolute
								bottom 0
								left 0
								width 100%
								height 50%

					&>.box.is-chara
						.inner
							.chara
								position absolute
								transition all 0.3s ease
								
								// pointer-events none
								span
									display block
									position absolute
									top 0
									left 0
									width 100%
									height 100%
									background-repeat no-repeat
									background-size contain

							.chara01
								top 0
								left 0

							.chara02
								top 0
								right 0

							.chara03
								bottom 0
								right 0

							.chara04
								bottom 0
								left 0

					.box.is-btn
						position absolute
						left 5%
						bottom 5%
						width 90%
						padding 0.15vw
						background-color #FFF
						border-radius 100px
						box-sizing border-box
						box-shadow 0 0 0.3vw rgba(0, 0, 0, 0.3)
						transition all 0.3s ease

						.inner
							width 100%
							height 100%
							background-image url('~/assets/images/common/common_dot_pattern01.png')
							background-size 1vw
							border 0.2vw solid #112d54
							border-radius 100px
							box-sizing border-box
						
							.text
								width 100%
								img
									width 100%
									height auto

							.arrow
								position absolute
								top 50%
								right 3%
								width 5%
								padding-top 5%
								background-color #112d54
								border-radius 100px
								transform translate3d(0, -50%, 0)

								&:before
									content ""
									position absolute
									top 50%
									left 50%
									width 40%
									padding-top 40%
									background-image url('~/assets/images/common/common_btn_arrow01.png')
									background-size contain
									background-repeat no-repeat
									transform translate3d(-30%, -50%, 0)



</style>

