function init(op) {
	let C_MODAL_SET = {
		TARGET: null,
		OPEN_TARGET: null,
		DEFAULT: {
			target: '.js-modalSet',
			modalTarget: '.js-modal',
			modalContainer: '.modalContainer',
			closeBtn: '.modalClose',
			setBefore: function() {},
			setAfter: function() {},
		},
		OPTION: null,
		G_ARRAY: {},
		init: function(op){
			let _c = this;
				_c.OPTION = Object.assign(_c.DEFAULT, op);
				_c.TARGET = document.querySelectorAll(_c.OPTION.target);
				_c.MODAL_TARGET = document.querySelectorAll(_c.OPTION.modalTarget);
			
			[].slice.call(_c.MODAL_TARGET).forEach(function(element, index) {
				
				let copy = $(element).clone();
				copy.addClass('is-clone')
				document.body.appendChild(copy[0]);
				$(element).remove();
				
			});
			_c.MODAL_TARGET = document.querySelectorAll(_c.OPTION.modalTarget);
			_c.MODAL_CONTAINER = document.querySelectorAll(_c.OPTION.modalContainer);

			[].slice.call(_c.TARGET).forEach(function(element, index) {
				_c.G_ARRAY[index] = new modalSet({
					target: element,
					op:_c.OPTION,
					modalTarget: _c.MODAL_TARGET[index],
					modalContainer: _c.MODAL_CONTAINER[index]
				});
				_c.G_ARRAY[index].set();
			});
		}
	}
	
	class modalSet {
		constructor(op) {
			let _t = this;
				_t.tg = op.target;
				_t.modalContainer = op.modalContainer;
				_t.modalTarget = op.modalTarget;
				_t.modal = document.getElementById(_t.tg.dataset.target)
				_t.op = op.op;
				_t.closeBtn = _t.modal.querySelectorAll(_t.op.closeBtn);
		}
		set() {
			let _t = this;


			_t.modalTarget.addEventListener("click", this._onBlurHandler = (event) => {
				if(event.target.closest(_t.op.modalContainer) === null) {
					$(_t.modal).fadeOut();
				}
			});



			_t.tg.addEventListener("click", function(e) {
				_t.modal.classList.add('is-show')
				$(_t.modal).fadeIn();
				(e.preventDefault) ? e.preventDefault():e.returnValue=false;
				// return false;
			});

			[].slice.call(_t.closeBtn).forEach(function(event, index) {
				event.addEventListener("click", function(e) {
					$(_t.modal).fadeOut();
					(e.preventDefault) ? e.preventDefault():e.returnValue=false;
					// return false;
				});
			});

		}
	}
	C_MODAL_SET.init(op);
}

export default function(op) {
	init(op);
}

