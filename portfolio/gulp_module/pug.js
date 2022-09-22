const { src, dest } = require('gulp');
const $ = require('./modules.js');
const option = require('./option.js');

function pug() {
	let revision = $.crypto.randomBytes(8).toString('hex');
	return src([option.url.src + '**/*.pug', '!' + option.url.src + '**/_*.pug'])
	.pipe($.cache(pug))
	.pipe(
		$.plumber()
	)
	.pipe(
		$.pug(option.pugOption)
	)
	.pipe($.gulpIf(option.phpMode,
		$.rename({
			extname: '.php'
		})
	))
	.pipe(
		$.replace(/\.(js|css|gif|jpg|jpeg|png|svg|ico)\?rev/g, '.$1?rev='+revision)
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
	pug: pug
}