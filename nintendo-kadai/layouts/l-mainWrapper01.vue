<template lang="pug">
	#l-contentsTop
		.l-mainWrapper01
			.layoutWrapper
				transition(name="page")
					nuxt


</template>
<style lang="stylus">
	@import "~/assets/stylus/_s_mixin"
	.l-mainWrapper01
		position fixed
		top 0
		left 0
		width 100%
		height 100%
		background-image url('~/assets/images/common/common_contents_bg01.png')

</style>