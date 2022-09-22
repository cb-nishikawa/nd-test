function init(op) {
	let C_TAB_CHANGE = {
		TARGET: null,
		OPEN_TARGET: null,
		DEFAULT: {
			target: '.js-tabChangeSet',
			changeBtn: '.js-tabBtn',
			changeContents: '.js-tabContents',
			childClassName: '.tab',
			currentClassName: 'is-current',
			setBefore: function() {},
			setAfter: function() {},
		},
		OPTION: null,
		G_ARRAY: {},
		init: function(op){
			let _c = this;
				_c.OPTION = Object.assign(_c.DEFAULT, op);
				_c.TARGET = document.querySelectorAll(_c.OPTION.target);
			
			[].slice.call(_c.TARGET).forEach(function(event, index) {
				_c.G_ARRAY[index] = new tabChange({
					target: event,
					op:_c.OPTION,
				});
				_c.G_ARRAY[index].set();
			});
		}
	}
	class tabChange {
		constructor(op) {
			let _t = this;
				_t.tg = op.target;
				_t.op = op.op;
		}
		set() {
			let _t = this;
				_t.tabBtnTarget = _t.tg.querySelector(_t.op.changeBtn).querySelectorAll(_t.op.childClassName);
				_t.changeTarget = _t.tg.querySelector(_t.op.changeContents).querySelectorAll(_t.op.childClassName);

				[].slice.call(_t.tabBtnTarget).forEach(function(event, index) {
					event.addEventListener("click", function(e) {
						[].slice.call(_t.tabBtnTarget).forEach(function(event, index) {
							event.classList.remove(_t.op.currentClassName);
							_t.changeTarget[index].classList.remove(_t.op.currentClassName);
						});
						this.classList.add(_t.op.currentClassName);
						_t.changeTarget[Array.prototype.indexOf.call(_t.tabBtnTarget,this)].classList.add(_t.op.currentClassName);
						
						// console.log(Array.prototype.indexOf.call(_t.tabBtnTarget,this));
					});
				});

		}
	}
	C_TAB_CHANGE.init(op);
}

export default function(op) {
	init(op);
}

