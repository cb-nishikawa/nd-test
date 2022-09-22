import accordionSet from '@j/_j_base/_j_accordionSet/_j_accordionSet.js';

function init() {
	accordionSet({
		target: '.js-qandaSet01',
		parentName: '.js-qandaSet01 .is-parent',
		childName: '.js-qandaSet01 .is-child',
		linkage: true, // アコーディオン連動
	})
}
export default function() {
	init();
}
