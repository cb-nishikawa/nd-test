const { src, dest } = require('gulp');
const $ = require('./modules.js');
const option = require('./option.js');

function imagemin() {
	return src( option.url.src + '**/*.+(jpg|jpeg|png)' )
		.pipe(
			$.changed( option.url.dist + option.url.images )
		)
		.pipe(
			$.imagemin([
				$.imageminPng(),
				$.imageminJpg({
					min: 50,
					max: 95,
					quality:'high'
				}),
				$.imageminGif({
					interlaced: false,
					optimizationLevel: 3,
					colors:180
				})
			])
		)
		.pipe(dest( option.url.dist ))
		.pipe(
			$.browserSync.reload({
				stream: true,
				once: true
			})
		);
}

function svgmin() {
	return src([ option.url.src + '**/*.+(svg)' , '!' + option.url.src + option.url.assets + option.url.fonts + option.url.iconfont + '**/*.svg' ])
		.pipe(
			$.changed( option.url.dist + option.url.images )
		)
		// .pipe(
		// 	$.svgmin()
		// )
		.pipe(dest( option.url.dist ))
		.pipe(
			$.browserSync.reload({
				stream: true,
				once: true
			})
		);
}


module.exports = {
	imagemin: imagemin,
	svgmin: svgmin
}
