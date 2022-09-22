function init(op) {
	let C_MENU_OPEN = {
		TARGET: null,
		OPEN_TARGET: null,
		DEFAULT: {
			target: '.js-menuOpen.is-btn',		//メニューボタン
			openTarget: '.js-menuOpen.is-menu',	//表示されるメニュー
			addClassName: 'is-active',			//追加されるclass
			setBefore: function() {},
			setAfter: function() {},
		},
		OPTION: null,
		G_ARRAY: {},
		init: function(op){
			let _c = this;
				_c.OPTION = Object.assign(_c.DEFAULT, op);
				_c.TARGET = document.querySelectorAll(_c.OPTION.target);
				_c.OPEN_TARGET = document.querySelectorAll(_c.OPTION.openTarget);
	
			[].slice.call(_c.TARGET).forEach(function(event, index) {
				_c.G_ARRAY[index] = new menuOpen({
					target: event,
					openTarget: _c.OPEN_TARGET[index],
					op:_c.OPTION,
				});
				_c.G_ARRAY[index].set();
			});
		}
	}
	
	class menuOpen {
		constructor(op) {
			let _t = this;
				_t.tg = op.target;
				_t.optg = op.openTarget;
				_t.op = op.op;
		}
		set() {
			let _t = this;
				$(_t.tg).on('click', function(){
					// console.log("menuClick");
					$(this).toggleClass(_t.op.addClassName);
					$(_t.optg).toggleClass(_t.op.addClassName);
				});
		}
	}
	C_MENU_OPEN.init(op);
}

export default function(op) {
	init(op);
}

