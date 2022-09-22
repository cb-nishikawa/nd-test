function init() {
	$('.js-mainvisualSet01').not('.slick-initialized').slick({
		arrows: true,
		appendArrows: $('.c-mainvisualSet01'),
		prevArrow: '<p class="slick-prev"></p>',
		nextArrow: '<p class="slick-next"></p>',
		customPaging: function(slick, index){
			return '<span></span>';
		},
		dots: true,
	})
}
export default function() {
	init();
}
