const { src, dest, parallel, series, watch } = require('gulp');
const $ = require('./modules.js');
const option = require('./option.js');

function bs() {
	if(option.browserSyncOption.virtualDomainMode) {
		$.browserSync.init({
			files: [option.url.src + '**/*.pug', '!' + option.url.src + '**/_*.pug'],
			proxy: option.browserSyncOption.virtualDomain,
			open: 'external'
		});
	} else {
		$.browserSync.init({
			port: option.browserSyncOption.port,
			server: {
				baseDir: option.url.dist
			},
			notify: true,
			xip: false
		});
	}
}


module.exports = {
	bs: bs,
}
