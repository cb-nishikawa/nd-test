<template lang="pug">
	.c-detailContentsSection
		.componentWrapper
			.block.is-contents
				.mainContentsSlider
					.swiper-wrapper
						.swiper-slide(v-for="soft of softs")

							.c-detailMainSection
								.componentWrapper
									.block.is-mainvisual
										//- p.image(:style="`background-image: url(${soft.image});`")
										
										.area.is-image
											p.image(:class='`is-${$route.query.id}`')
												img(:src="`${soft.image}`")
										.area.is-btn
											p.btn
												a(:href="`${soft.url}`" target="_blank")
													span.is-icon
														img(src="https://placehold.jp/30x30.png")
													span.is-middle 購入する
													span.is-small マイニンテンドーストア
									.block.is-text
										.area.is-text
											h2.title {{ soft.title }}
											h3.subTitle {{ soft.subTitle }}
											p.text {{ soft.text }}
							
			.block.is-slider
				.thumbnailSlider.swiper-container
					.swiper-wrapper
						.swiper-slide(v-for="(soft, index) of softs")
							.slide
								p.image
									img(:src="`${soft.image}`")
					.swiper-pagination

</template>

<script>
	import Swiper, { Navigation, Pagination } from 'swiper';
	import 'swiper/swiper-bundle.css'
	Swiper.use([Navigation, Pagination]);
	import jsonData from '/assets/data/softs.json'

	let _g;

			
	export default {
		name: 'c-detailContentsSection',
		data () {
			return {
				softs: [],
				articles: [],
				thumbnailOptions: {
				}
			}
		},
	
		mounted() {
			
			setTimeout(() => {
				_g = window.GLOBAL;
			
				const thumbnailSlider = new Swiper(".thumbnailSlider", {
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					slidesPerView: 2.2,
					touchRatio: 0.1,
					centeredSlides: false,
					spaceBetween: 10,
					loop: false,
					breakpoints: {
						800: {
							slidesPerView: 4.2
						}
					},
					
				});
				const mainContentsSlider = new Swiper(".mainContentsSlider", {
					allowTouchMove: false
				});
				
				var thumbnaiSliderSlide = document.querySelectorAll('.thumbnailSlider .slide');
				thumbnaiSliderSlide[0].classList.add("is-current")
				for (var i = 0; i < thumbnaiSliderSlide.length; i++) {
					(function(j){
						thumbnaiSliderSlide[j].addEventListener('click', function(){
							
							for (var k = 0; k < thumbnaiSliderSlide.length; k++) {
								thumbnaiSliderSlide[k].classList.remove("is-current")
							}
							thumbnaiSliderSlide[j].classList.add("is-current")
							mainContentsSlider.slideTo(j);
							
						});
					})(i);
				}
			}, 100);
			

			var idName = this.$route.query.id
			var targetSofts = jsonData.softs.filter(function(item, index){
				for (const element of item.categories) {
					if (item.categories == idName ) return true;
				}
			});
			this.softs = targetSofts
			
		},
		// methods: {
		// 	onSwiperRedied (swiper) {
		// 		// console.log('Swiper redied!', swiper)
		// 	},
		// 	onSwiperSlideChangeTransitionStart () {
		// 		// console.log('SwiperSlideChangeTransitionStart!')
		// 	},
		// 	onSwiperClickSlide (index, reallyIndex) {
		// 		// console.log('Swiper click slide!', reallyIndex)
		// 	}
		// }
	}
</script>

<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"
	.c-detailContentsSection
		height 100%
		box-sizing border-box
		&>.componentWrapper
			height 100%
			&>.block.is-contents
				// overflow-y scroll
				// overflow-x hidden
				position absolute
				width 100%
				height calc(100% - 120px)
				right 0
				top 0
				box-sizing border-box

				@media (max-width: 800px) {
					position relative
				}

				.mainContentsSlider
					height 100%
				
			&>.block.is-slider
				position absolute
				width 100%
				height 150px
				padding 20px
				right 0
				bottom 0
				box-sizing border-box
				background-color #DFDFDF
				z-index 4000

				@media (max-width: 800px) {
					position relative
					height auto
				}
				
				.slide
					&.is-current
						&:before
							content ""
							display block
							position absolute
							top 0
							left 0
							width 100%
							height 100%
							border 5px solid #F00
							box-sizing border-box
							z-index 1000
					.image
						width 100%
						border-radius 6px
						box-shadow 0 4px 0 rgba(#adadad, 1.0)
						img
							width 100%
							height auto
							
	.c-detailMainSection
		height 100%
		// padding 3% 3% 0
		

		.componentWrapper
			height 100%
			&>.block.is-mainvisual
				position absolute
				width 100%
				height calc(100% - 220px)

				@media (max-width: 800px) {
					position relative
					height auto
				}
				
				.area.is-image
					width 100%
					height 100%
					
					.image
						overflow hidden
						display flex
						justify-content center
						align-items center
						position relative
						width 100%
						height 100%
						background-size cover
						background-repeat no-repeat
						background-position center
						background-color #EFEFEF
						background-image none !important
						box-sizing border-box

						&.is-action
							background-color #fccb19
						&.is-battle
							background-color #f34794
						&.is-rpg
							background-color #2ebcaa
						&.is-simulation
							background-color #70c14c
						&.is-party
							background-color #0697eb
						&.is-activity
							background-color #f96502

						&:before
							content ""
							display block
							position absolute
							top 0
							left 0
							width 100%
							height 100%
							background-image url('~/assets/images/common/common_dot_pattern02.png')
							background-size 2%
							opacity 0.05
						
						@media (max-width: 800px) {
							padding 30% 3%
						}

						img
							position relative
							width 80%
							border-radius 20px
							z-index 1000
							@media (max-height: 700px) {
								width 50%
							}
							@media (max-width: 800px) {
								width 100%
							}
				
				.area.is-btn
					position absolute
					right 10px
					bottom 20px

					width 340px

					a
						overflow hidden
						display flex
						flex-wrap wrap
						align-items center

						position relative

						width 100%

						color #FFF
						background-color #d31616
						text-decoration none
						line-height 1.0
						border-radius 8px
						box-shadow 0 4px 0 rgba(#adadad, 1.0)

						&:after
							content ""
							position absolute
							top 50%
							right 5px
							width 10px
							height 10px
							background-color #FFF
							transform translate3d(0, -50%, 0)

						span
							display block

						span.is-icon
							width 10%
							padding 5%
							background-color #af0e0e
							img
								width 100%
								height auto
							
						span.is-middle
							padding 5% 6%
							fontSize(18)
							
						span.is-small
							color #d2d2d2
							fontSize(12)
							
					

			&>.block.is-text
				position absolute
				bottom 0
				width 100%
				height 220px
				padding 2% 3%
				box-sizing border-box

				@media (max-width: 800px) {
					position static
					height auto
				}

				&>.area.is-text
					margin-bottom 3%
					.title
						margin-bottom 10px
						fontSize(22)
						
					.subTitle
						margin-bottom 10px
						color #999999
						fontSize(16)
						
					.text
						fontSize(13)
						
			
				
</style>

