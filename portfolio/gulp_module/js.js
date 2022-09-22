const { src, dest } = require('gulp');
const $ = require('./modules.js');
const option = require('./option.js');

function js() {
	return src(
		[
			option.url.src + '**/*.js',
			'!' + option.url.src + '**/_*.js', // webpackで除外してるので意味はない
		]
	)
	.pipe(
		$.plumber()
	)
	.pipe(
		$.webpackStream(option.jsOption.webpackConfig, $.webpack)
	)
	.pipe(dest(option.url.dist))
	.pipe(
		$.browserSync.reload({
			stream: true,
			once: true
		})
	);
}

function jsVendor() {
	return src(
		[option.url.src + '**/_vendor/_v_jquery/' + '*.js', option.url.src + '**/_vendor/' + '**/*/*.js'],
	)
	.pipe(
		$.concat('vendor.js')
	)
	.pipe(dest(option.url.dist + option.url.assets + option.url.js))
	.pipe(
		$.browserSync.reload({
			stream: true,
			once: true
		})
	);
}

function jsLibrary() {
	return src(
		[option.url.src + '**/library/*.js'],
	)
	.pipe(dest(option.url.dist))
	.pipe(
		$.browserSync.reload({
			stream: true,
			once: true
		})
	);
}


module.exports = {
	js: js,
	jsVendor: jsVendor,
	jsLibrary: jsLibrary
}
