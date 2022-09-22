// メニュークリック
import menuOpen from '@j/_j_base/_j_menuOpen/_j_menuOpen.js';


function init() {
	// console.log("load: c_header01");
	menuOpen({
		target: '.js-header01spBtn',		//メニューボタン
		openTarget: '.js-header01spMenu', 	//表示されるメニューボタン
	})
}
export default function() {
	init();
}
