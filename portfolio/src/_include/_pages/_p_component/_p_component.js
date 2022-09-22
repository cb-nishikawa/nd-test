// global option
import globalSet from '@j/_j_base/_j_globalSet/_j_globalSet.js';
globalSet();

import _c_mainvisualSet01 from '@c/_c_mainvisual/_c_mainvisualSet01/_c_mainvisualSet01.js';

import _c_qandaSet01 from '@c/_c_qanda/_c_qandaSet01/_c_qandaSet01.js';

import _c_slideImageAndText01 from '@c/_c_etc/_c_slideImageAndText01/_c_slideImageAndText01.js';


let _g;

function domLoadAfter() {
}
function imageLoadAfter() {
	_c_mainvisualSet01();
	_c_qandaSet01();
	_c_slideImageAndText01();
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
	if($('html.is-component').length > 0) {
		// console.log("load: _p_component.js");	
		init();
	}
}