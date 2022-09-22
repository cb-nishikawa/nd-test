function init(op) {
	let _g = window.GLOBAL;
	let C_HOVER_SHOW = {
		TARGET: null,
		OPEN_TARGET: null,
		DEFAULT: {
			target: '.js-hoverShowSet',
			hoverTarget: '.js-hoverTarget',
			showContents: '.js-showContents',
			showClassName: 'is-hover',
			waitSpeed: 500,
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
				_c.G_ARRAY[index] = new hoverShow({
					target: event,
					op:_c.OPTION,
				});
				_c.G_ARRAY[index].set();
			});
		}
	}
	class hoverShow {
		constructor(op) {
			let _t = this;
				_t.tg = op.target;
				_t.op = op.op;
		}
		set() {
			let _t = this;
				_t.hoverTarget = _t.tg.querySelectorAll(_t.op.hoverTarget);
				_t.showTarget = _t.tg.querySelectorAll(_t.op.showContents);
				_t.timeoutId = {};

				[].slice.call(_t.hoverTarget).forEach(function(event, index) {
					event.addEventListener("mouseover", function(e) {
						if(_g.GLOBAL_WIDTH > _g.BREAK_POINT_SP) {
							[].slice.call(_t.showTarget).forEach(function(event, index) {
								event.classList.remove(_t.op.showClassName);
							});
							_t.showTarget[Array.prototype.indexOf.call(_t.hoverTarget,this)].classList.add(_t.op.showClassName);
							clearTimeout(_t.timeoutId[Array.prototype.indexOf.call(_t.hoverTarget,this)])
						}
					});
					event.addEventListener("mouseleave", function(e) {
						if(_g.GLOBAL_WIDTH > _g.BREAK_POINT_SP) {
							let th = this
							_t.timeoutId[Array.prototype.indexOf.call(_t.hoverTarget,this)] = setTimeout(function(){
								_t.showTarget[Array.prototype.indexOf.call(_t.hoverTarget,th)].classList.remove(_t.op.showClassName);
							}, _t.op.waitSpeed);
						}
					});
				});
		}
	}
	C_HOVER_SHOW.init(op);
}

export default function(op) {
	init(op);
}

