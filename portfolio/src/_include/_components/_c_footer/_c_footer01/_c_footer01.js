import accordionSet from '@j/_j_base/_j_accordionSet/_j_accordionSet.js';

function init() {
	accordionSet({
		target: '.js-footer01',
		parentName: '.js-footer01 .spParentBtn',
		childName: '.js-footer01 .childNav',
	})
}
export default function() {
	init();
}
