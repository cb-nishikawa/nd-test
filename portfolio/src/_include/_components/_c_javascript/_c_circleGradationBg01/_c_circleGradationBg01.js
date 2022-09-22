// メニュークリック

import globalSet from '@j/_j_base/_j_globalSet/_j_globalSet.js';
globalSet();
let _g;
_g = window.GLOBAL;



function init(op) {
	let C_CIRCLE_GRADATION_BG01 = {
		TARGET: null,
		DEFAULT: {
			target: '.c-circleGradationBg01',
			canvas: 'circleGradationBg01',
			circles: [
				{
					center: {x:300, y:-1200},
					color: 0xfbf2fe,
					radius: 1500, 
					MODE: PIXI.BLEND_MODES.NORMAL,
					point: [],
					tween() {}
				},
				{
					center: {x:200, y:-1200},
					color: 0xffffff,
					radius: 1500, 
					MODE: PIXI.BLEND_MODES.SCREEN,
					point: [],
					tween() {}
				},
				{
					center: {x:300, y:1200},
					color: 0x7fd6e7,
					radius: 1000, 
					MODE: PIXI.BLEND_MODES.NORMAL,
					point: [],
					tween() {}
				},
				{
					center: {x:-250, y:-300},
					color: 0xffffff,
					radius: 700, 
					MODE: PIXI.BLEND_MODES.NORMAL,
					point: [],
					tween() {}
				},
				{
					center: {x:1500, y:-580},
					color: 0xffffff,
					radius: 650, 
					MODE: PIXI.BLEND_MODES.NORMAL,
					point: [],
					tween() {}
				},
				{
					center: {x:400, y:1700},
					color: 0x57b7dd,
					radius: 1200,
					MODE: PIXI.BLEND_MODES.NORMAL,
					point: [],
					tween() {}
				},	
				{
					center: {x:1500, y:-550},
					color: 0x7fd6e7,
					radius: 600, 
					MODE: PIXI.BLEND_MODES.NORMAL,
					point: [],
					tween() {}
				},
				{
					center: {x:1400, y:600},
					color: 0x06fee4,
					radius: 600,
					MODE: PIXI.BLEND_MODES.SCREEN,
					point: [],
					tween(c) {
						c.tm = new TimelineMax();
						c.tm.from(c.graphics, 1, {
							x : 0,
							y: 0
						}).to(c.graphics, 6, {
							x : -200,
							y: -1000
						}).to(c.graphics, 6, {
							x : -300,
							y: 1000
						}).to(c.graphics, 6, {
							x : 100,
							y: 800
						}).to(c.graphics, 6, {
							x : 0,
							y: 0
						});
						c.tm.repeat(-1);
					}
				},
				{
					center: {x:100, y:500},
					color: 0x06fee4,
					radius: 300,
					MODE: PIXI.BLEND_MODES.SCREEN,
					point: [],
					tween() {}
				},
			],
			MAX: 50,
		},
		APP: null,
		OPTION: null,
		G_ARRAY: {},
		init: function(op){
			let _c = this;
				_c.OPTION = Object.assign(_c.DEFAULT, op);
				
				_c.TARGET = document.querySelector(_c.OPTION.target);
				_c.CANVAS_TARGET = document.getElementById(_c.OPTION.canvas);
				_c.APP = new PIXI.Application({ width: $(_c.TARGET).innerWidth(), height:$(_c.TARGET).innerHeight(), antialias: true , transparent: false, backgroundColor:0x7fd6e7});
				_c.CANVAS_TARGET.appendChild(_c.APP.view);
				_c.APP.stage = new PIXI.Container();

				_c.blur = new PIXI.filters.BlurFilter();
				_c.blur.strength = 6;
				_c.blur.blur = 30;
				
				_c.blur.quality = 5;
				_c.blur.resolution = 1;
				_c.blur.kernelSize = 15; //5,7,9,11,13,15

				_c.APP.stage.filters = [_c.blur];

				_c.set(_c.OPTION);
				

				_g.resize(function(){
					_c.APP.renderer.resize($(_c.TARGET).innerWidth(), $(_c.TARGET).innerHeight());
				});
				_c.APP.ticker.add(() => {
					// console.log("animation");
					_c.update(_c.OPTION);
				});
				
		},
		set: function(op){
			let _c = this;
			// console.log('circleSet');
			// console.log(op.circles[0].color);

			let rota = Math.floor(360 / op.MAX);
			for(var i = 0; i < op.circles.length; i++){
				op.circles[i].graphics = new PIXI.Graphics();
				

				op.circles[i].dropshadow = new PIXI.filters.DropShadowFilter();
				op.circles[i].dropshadow.blur = 40;
				op.circles[i].dropshadow.color = op.circles[i].color;
				op.circles[i].dropshadow.alpha = 0.9;


				op.circles[i].blur = new PIXI.filters.BlurFilter();
				op.circles[i].blur.strength = 1;
				op.circles[i].blur.blur = 5;

				op.circles[i].alpha = new PIXI.filters.AlphaFilter();
				op.circles[i].alpha.alpha = 0.90;
				op.circles[i].alpha.blendMode = op.circles[i].MODE;
				
				op.circles[i].graphics.filters = [op.circles[i].dropshadow, op.circles[i].blur, op.circles[i].alpha]
				// op.circles[i].graphics.filters = [op.circles[i].blur, op.circles[i].alpha]
				
				_c.APP.stage.addChild(op.circles[i].graphics);

				op.circles[i].tween(op.circles[i]);
				
				for(var j = 0; j < op.MAX; j++) {
					op.circles[i].point[j] = new Point(op.circles[i]['center'], op.circles[i]['radius'], rota * j);
				}
			}

			function Point(c, r, rota) {
				let _t = this;
					_t.x, _t.y;
					_t.centerX = c.x;
					_t.centerY = c.y;
					_t.radian = rota * (Math.PI / 180);
					_t.radius = r;
					_t.speed = Math.random() * 8+2; //速度
					_t.r = Math.random() * 0.5; //変化量
					_t.rota = 0;
				
					_t.update = function() {
				
						var plus = Math.cos(_t.rota * (Math.PI / 180)) * _t.r;
						_t.radius += plus;
				
						var cos = Math.cos(_t.radian) * _t.radius;
						var sin = Math.sin(_t.radian) * _t.radius;
				
						_t.x = cos + _t.centerX;
						_t.y = sin + _t.centerY;
				
						_t.rota += _t.speed;
				
						if(_t.rota > 360){ _t.rota -= 360; };
					}
			}
		},
		update(op) {
			let _c = this;
			// console.log("update");
			for (var i= 0; i < op.circles.length; i++) {
				for(var j = 0; j < op.MAX; j++)
				{
					op.circles[i].point[j].update();
				}
			}
			_c.draw(op);
		},
		draw(op) {
			let _c = this;
			for(var i = 0; i < op.circles.length; i++) {
				drawCircle(op.circles[i]);
			}
			function drawCircle(cir) {
				cir.graphics.clear();

				cir.graphics.beginFill(cir.color);
				var xc1 = (cir.point[0].x + cir.point[op.MAX - 1].x) / 2;
				var yc1 = (cir.point[0].y + cir.point[op.MAX - 1].y) / 2;
				cir.graphics.moveTo(xc1, yc1);
				for(var i = 0; i < op.MAX - 1; i++){
					var xc = (cir.point[i].x + cir.point[i + 1].x) / 2;
					var yc = (cir.point[i].y + cir.point[i + 1].y) / 2;
					cir.graphics.quadraticCurveTo(cir.point[i].x, cir.point[i].y, xc, yc);
				}
				cir.graphics.quadraticCurveTo(cir.point[i].x, cir.point[i].y, xc1, yc1);
				cir.graphics.endFill();
				
				
			}
		}
	}
	if($(C_CIRCLE_GRADATION_BG01.DEFAULT.target).length > 0) {
		C_CIRCLE_GRADATION_BG01.init(op);
	}
}


export default function() {
	console.log("load: c_circleGradationBg01");
	init();
}



