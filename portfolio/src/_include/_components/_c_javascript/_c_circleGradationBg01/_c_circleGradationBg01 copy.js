// メニュークリック

import globalSet from '@j/_j_base/_j_globalSet/_j_globalSet.js';
globalSet();
let _g;
_g = window.GLOBAL;

function canvasBg() {
	let $target = $('.c-circleGradationBg01');
	let canvas, context;
		canvas = document.getElementById('circleGradationBg');
		context = canvas.getContext('2d');

	const MAX = 10,
	circles = [
		{
			center: {x:300, y:-200},
			color: '#95fff4',
			gradient: ['rgb(255,0,0)', 'rgb(0,0,255)'],
			radius: 800, 
			point: []
		},
		{
			center:  {x:450, y:1300},
			color: '#7eaada',
			gradient: ['rgb(255,0,0)', 'rgb(0,0,255)'],
			radius: 1000,
			point: []
		},
		{
			center: {x:1400, y:420},
			color: '#7ed6e7',
			gradient: ['rgb(255,0,0)', 'rgb(0,0,255)'],
			radius: 700, 
			point: []
		}
	];



	var rota = Math.floor(360 / MAX);
	for(var i = 0; i < circles.length; i++){

		for(var j = 0; j < MAX; j++)
		{
			circles[i].point[j] = new Point(circles[i]['center'], circles[i]['radius'], rota * j);
		}
	}
	drawBg();
	update();


	function drawBg() {
		canvas.width = _g.GLOBAL_WIDTH;
		canvas.height = $target.innerHeight();
	};
	function update() {

		for (var i= 0; i < circles.length; i++) {
			for(var j = 0; j < MAX; j++)
			{
				circles[i].point[j].update();
			}
		}
	
		draw(circles);
		setTimeout(update, 45);
	}
	function Point(c, r, rota) {
		this.x, this.y;
		this.centerX = c.x;
		this.centerY = c.y;
		this.radian = rota * (Math.PI / 180);
		this.radius = r;
	
		this.speed = Math.random() * 8 + 2;
		this.r = Math.random() * 4 + 1;
		this.rota = 0;
	
	
		this.update = function() {
	
			var plus = Math.cos(this.rota * (Math.PI / 180)) * this.r;
	
			this.radius += plus;
	
			var cos = Math.cos(this.radian) * this.radius;
			var sin = Math.sin(this.radian) * this.radius;
	
			this.x = cos + this.centerX;
			this.y = sin + this.centerY;
	
			this.rota += this.speed;
	
			if(this.rota > 360){ this.rota -= 360; };
		}
	}
	function draw(circles) {
		drawBg();
		context.clearRect(0, 0, canvas.width, canvas.height);
		for(var i = 0; i < circles.length; i++) {
			drawCircle(circles[i]['color'], circles[i]['point'], 1.0, circles[i]);
		}
	};
	
	function drawCircle(color, point, alpha, circle) {
		context.save();
		
		// context.globalCompositeOperation = "source-over";

		

		
		context.globalCompositeOperation = "xor";
		context.beginPath(); 
		var xc1 = (point[0].x + point[MAX - 1].x) / 2;
		var yc1 = (point[0].y + point[MAX - 1].y) / 2;
		context.moveTo(xc1, yc1);
		for(var i = 0; i < MAX - 1; i++){
			var xc = (point[i].x + point[i + 1].x) / 2;
			var yc = (point[i].y + point[i + 1].y) / 2;
	
			context.quadraticCurveTo(point[i].x, point[i].y, xc, yc);
		}
		context.quadraticCurveTo(point[i].x, point[i].y, xc1, yc1);
		context.closePath();

		context.shadowColor = color;
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowBlur = 50;

		context.fillStyle = color;
		context.globalAlpha = alpha;
		context.fill();


		// context.globalCompositeOperation = "source-in";
		// context.fillStyle = "#F00";
		// context.globalAlpha = alpha;
		// context.fillRect(0, 0, canvas.width, canvas.height);

		// context.clip();

		
		// context.globalCompositeOperation = "source-over";
		

		// context.globalCompositeOperation = 'destination-in';
		// context.fillStyle = color;
		// context.globalAlpha = alpha;
		// context.fillRect(0, 0, canvas.width, canvas.height);
		context.restore();
	
	}
	_g.resize(function(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		drawBg();
	});
}
function init() {
	// console.log("load: c_circleGradationBg01");
	canvasBg();
}
export default function() {
	init();
}



