// global option
import globalSet from '@j/_j_base/_j_globalSet/_j_globalSet.js';
import _c_circleGradationBg01 from '@c/_c_javascript/_c_circleGradationBg01/_c_circleGradationBg01.js';
import _c_textureMaskBg01 from '@c/_c_javascript/_c_textureMaskBg01/_c_textureMaskBg01.js';

globalSet();

let _g;

function domLoadAfter() {
}
function imageLoadAfter() {
	_c_circleGradationBg01();
	_c_textureMaskBg01();
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
	if($('html.is-javascript').length > 0) {
		// console.log("load: _p_javascript.js");	
		init();
	}
}