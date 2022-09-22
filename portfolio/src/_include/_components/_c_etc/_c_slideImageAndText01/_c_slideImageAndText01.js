
function init(op) {
	let C_SLIDE_IMAGE_AND_TEXT = {
		TARGET: null,
		DEFAULT: {
			target: '.js-slideImageAndText01',
			imageSlide: '.area.is-image',
			textSlide: '.area.is-text',
		},
		OPTION: null,
		G_ARRAY: {},
		init: function(op){
			let _c = this;
				_c.OPTION = Object.assign(_c.DEFAULT, op);
				_c.TARGET = document.querySelectorAll(_c.OPTION.target);

				
			[].slice.call(_c.TARGET).forEach(function(event, index) {
				_c.G_ARRAY[index] = new slideSet({
					target: event,
					option: _c.OPTION,
					no: index,
				});
				_c.G_ARRAY[index].set();
			});
		}
	}
	class slideSet {
		constructor(op) {
			let _t = this;
				_t.tg = op.target;
				_t.op = op.option;
				_t.no = op.no;
				_t.$imageSlide = $(_t.tg).find(_t.op.imageSlide);
				_t.$imageSlide.addClass('is-' + _t.no);
				_t.$textSlide = $(_t.tg).find(_t.op.textSlide);
				_t.$textSlide.addClass('is-' + _t.no);
		}
		set() {
			let _t = this;

				_t.slideLength = _t.$imageSlide.find('.box').length;
				
				_t.$imageSlide.slick({
					arrows: false,
					asNavFor: _t.op.textSlide + '.is-' + _t.no
				});
				_t.$textSlide.slick({
					arrows: false,
					asNavFor: _t.op.imageSlide + '.is-' + _t.no,
				});

				_t.$textSlide.append('<ul class="dot"></ul>')
				for(let i=0; i<_t.slideLength; i++) {
					
					if(i == 0) {
						_t.$textSlide.find('.dot').append('<li class="is-dot is-current"></li>')
					} else {
						_t.$textSlide.find('.dot').append('<li class="is-dot"></li>')
					}
				}

				_t.$dot = _t.$textSlide.find('.dot li.is-dot');

				_t.$dot.on('click', function(e, i){
					_t.$dot.removeClass('is-current');
					_t.$imageSlide.slick('slickGoTo', $(this).index());
					_t.$textSlide.slick('slickGoTo', $(this).index());
					$(this).addClass('is-current');
				});

				_t.$imageSlide.on('afterChange', function(event, slick, currentSlide){
					_t.$dot.removeClass('is-current');
					_t.$dot.eq(currentSlide).addClass('is-current');
					
				});

				
		}
	}
	C_SLIDE_IMAGE_AND_TEXT.init(op);
	
}
export default function() {
	init();
}
