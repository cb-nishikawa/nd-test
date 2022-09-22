// メニュークリック
import globalSet from '@j/_j_base/_j_globalSet/_j_globalSet.js';
globalSet();
let _g;
_g = window.GLOBAL;



function init() {
	// console.log("load: p_topNews01");

	let $target = $('.c-textureMaskBg01');
	let canvas, context, pattern, maskPattern, maskPattern02, bgImg;

	function canvasBg() {
	
		canvas = document.getElementById('textureMaskBg01');
		context = canvas.getContext('2d');

		bgImg = new Image();
		bgImg.onload = function () {
			pattern = context.createPattern(bgImg, 'repeat');
			drawMask();
		};
		bgImg.src = '/assets/images/common/common_texture_bg01.png';
	
		function drawMask() {
			
			let maskImg = new Image();
			let maskImg02 = new Image();
			maskImg.onload = function () {
				canvas.width = _g.GLOBAL_WIDTH;
				canvas.height = $target.innerHeight();
				
	
				maskPattern = context.createPattern(maskImg, 'repeat');
				context.fillStyle = maskPattern;
				context.fillRect(0, 0, canvas.width, maskImg.height);

				context.fillStyle = pattern;
				context.fillRect(0, maskImg.height, canvas.width, canvas.height - maskImg.height*2);
	
				maskImg02.onload = function () {
	
					maskPattern02 = context.createPattern(maskImg02, 'repeat');
					context.fillStyle = maskPattern02;
					context.translate(0, canvas.height - maskImg02.height);
					context.fillRect(0, 0, canvas.width, maskImg02.height);
	
					context.globalCompositeOperation = 'source-in';
					context.fillStyle = pattern;
					context.translate(0, -(canvas.height - maskImg02.height));
					context.fillRect(0, 0, canvas.width, canvas.height);
				}
			};
			maskImg.src = '/assets/images/common/common_mask01.png';
			maskImg02.src = '/assets/images/common/common_mask02.png';
		};
	
		_g.resize(function(){
			context.clearRect(0, 0, canvas.width, canvas.height);
			drawMask();
		});
	}

	if($target.length > 0) {
		canvasBg();
	}
}
export default function() {
	init();
}
