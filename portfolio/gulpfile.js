const { parallel, series, watch } = require('gulp');
const option = require('./gulp_module/option.js');

// pug
const pug = require("./gulp_module/pug.js").pug;

// stylus
const stylus = require("./gulp_module/stylus.js").stylus;

// js
const js = require("./gulp_module/js.js").js;
const jsVendor = require("./gulp_module/js.js").jsVendor;
const jsLibrary = require("./gulp_module/js.js").jsLibrary;

// image
const imagemin = require("./gulp_module/image.js").imagemin;
const svgmin = require("./gulp_module/image.js").svgmin;

//browserSync
const bs = require("./gulp_module/serve.js").bs;

//ファイル削除
const clean = require("./gulp_module/clean.js").clean;

//build タスク
let build = series(clean, parallel([imagemin, svgmin, stylus, pug, js, jsVendor, jsLibrary]));

exports.build = build;

//default タスク
exports.default = parallel([imagemin, svgmin, stylus, pug, js, jsVendor, bs], () => {
	watch([option.url.src + '**/*.+(jpg|jpeg|png|gif)'], imagemin);
	watch([option.url.src + option.url.assets + option.url.image + '**/*.+(svg)'], svgmin);
	watch([option.url.src + '**/*.pug'], pug);
	watch([option.url.src + '**/*.styl'], stylus);
	watch([option.url.src + '**/_vendor/' + '**/*.js'], jsVendor);
	watch([option.url.src + '**/*.js'], js);
});



