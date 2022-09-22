// global option
import globalSet from '@j/_j_base/_j_globalSet/_j_globalSet.js';

globalSet();
let _g;

function logoAnimation() {
	let HORIZON_VALUE = 30
	let VERTICAL_VALUE = 5

	let HORIZON = 0
	let VERTICAL = 0

	$(window).mousemove(function(e) {
		
		HORIZON = HORIZON_VALUE * ( (e.clientX - ($(window).innerWidth() / 2)) / $(window).innerWidth() / 2)
		VERTICAL = VERTICAL_VALUE * ( (e.clientY /  $(window).innerHeight() ) )
		$("header.c-headerSet01 .block.is-logo h1.logo .is-eye").css({transform: "translate3d("+ HORIZON + "px , " + VERTICAL + "px, 0)"});
		
	});
}

function domLoadAfter() {
}

function imageLoadAfter() {
	logoAnimation()
}

function init() {
	_g = window.GLOBAL;
	_g.domLoad(function(){
		domLoadAfter();
	});
	_g.imageLoad(function(){
		imageLoadAfter();
	});
}

export default function() {
	init();
}

