<template lang="pug">
	.c-topBtnSection01
		.componentWrapper
			ul
				li
					nuxt-link(to="/detail?id=action")
						c-topBtnSection01Button01(className ="is-type01")
				li
					nuxt-link(to="/detail?id=battle")
						c-topBtnSection01Button01(className ="is-type02")
				li
					nuxt-link(to="/detail?id=rpg")
						c-topBtnSection01Button01(className ="is-type03")
				li
					nuxt-link(to="/detail?id=simulation")
						c-topBtnSection01Button01(className ="is-type04")
				li
					nuxt-link(to="/detail?id=party")
						c-topBtnSection01Button01(className ="is-type05")
				li
					nuxt-link(to="/detail?id=activity")
						c-topBtnSection01Button01(className ="is-type06")
</template>

<script>
	export default {
		name: 'c-topBtnSection01',
	}
</script>

<style lang="stylus">
	.c-topBtnSection01
		display block
		position absolute
		top 0
		left 50%
		max-width 1800px
		width 100%
		height 88%
		padding 5%
		box-sizing border-box
		transform translate3d(-50%, 0, 0)
		transition all 0.3s ease

		@media (max-width: 1440px) {
			max-width 1440px
			@media (max-height: 1100px) {
				max-width 1100px
			}
		}
		@media (max-width: 800px) {
			height 100%
		}

		@media (max-height: 1100px) {
			max-width 1440px
		}

		@media (max-height: 900px) {
			max-width 1100px
		}
		@media (max-height: 660px) {
			max-width 960px
		}

		@media screen and (orientation: portrait) {
			overflow-y scroll
			overflow-x hidden
			padding 10%
		}

		@media (max-width: 800px) {
			overflow-y scroll
			overflow-x hidden
			padding 10%
		}

		.componentWrapper
			display flex
			flex-wrap wrap
			align-items center
			justify-content center
			width 100%
			height 100%

			ul
				display flex
				flex-wrap wrap
				justify-content space-between
				row-gap 3vw

				width 100%

				transition all 1.0s ease

				@media screen and (orientation: portrait) {
					row-gap 5vw
					padding-bottom 10%
				}

				@media (max-width: 800px) {
					padding-bottom 30%
				}

			li
				width calc(33.3% - 15px)
				transition all 1.0s ease
				
				@media screen and (orientation: landscape) {
					width calc(33.3% - 15px)
				}
				@media screen and (orientation: portrait) {
					width calc(50% - 15px)
				}
				@media (max-width: 800px) {
					width 100%
					margin-bottom 15%
					
				}

				&:last-child
					@media (max-width: 800px) {
						margin-bottom 0
					}

				a
					display block
					width 100%

				
</style>

