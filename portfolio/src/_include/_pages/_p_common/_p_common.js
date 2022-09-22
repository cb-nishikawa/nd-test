// global option
import globalSet from '@j/_j_base/_j_globalSet/_j_globalSet.js';
globalSet();
let _g;

import matchHeight from '@j/_j_base/_j_matchHeight/_j_matchHeight.js';
import spTellLink from '@j/_j_base/_j_spTellLink/_j_spTellLink.js';
import smoothScroll from '@j/_j_base/_j_smoothScroll/_j_smoothScroll.js';


import _c_header01 from '@c/_c_header/_c_header01/_c_header01.js';
import _c_footer01 from '@c/_c_footer/_c_footer01/_c_footer01.js';


function domLoadAfter() {
	_c_header01();
	_c_footer01();
}
function imageLoadAfter() {
	matchHeight();
	spTellLink();
	smoothScroll();
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
	console.log("load: _p_common.js");
	init();
}