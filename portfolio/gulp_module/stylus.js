const { src, dest } = require('gulp');
const $ = require('./modules.js');
const option = require('./option.js');

function stylus() {
	return src([option.url.src + '**/*.styl', '!' + option.url.src + '**/_*.styl'])
	.pipe(
		$.plumber()
	)
	.pipe(
		$.stylus()
	)
	.pipe(
		$.autoprefixer({
			cascade: false,
			grid: "autoplace"
		})
	)

	.pipe(
		$.postcss(
			[require('postcss-responsive-font')]
		)
	)

	// .pipe(
	// 	$.pleeease({
	// 		mqpacker: true,
	// 		minifier: true,
	// 	})
	// )
	// .pipe(
	// 	$.cssTimeStamp(
	// 		{
	// 			useDate:true
	// 		}
	// 	)
	// )
	.pipe(dest(option.url.dist))
	.pipe(
		$.browserSync.reload({
			stream: true,
			once: true
		})
	);
}


module.exports = {
	stylus: stylus
}