module.exports = {
    url: {
		src: 'src/', 					// pug、stylus、scss など書き出し前ディレクトリ
		dist: 'docs/', 					// html、css など書き出し後ディレクトリ
		js : 'js/',					 	// jsファイルのディレクトリ
		pug : 'pug/',					// pugファイルのディレクトリ
		css : 'css/',					// cssファイルのディレクトリ
		stylus : 'stylus/',				// stylusファイルのディレクトリ
		images : 'images/',				// 画像ファイルのディレクトリ
		fonts : 'fonts/',				// フォントファイルのディレクトリ
		iconfont : 'iconfont/',			// 画像フォント用svgのディレクトリ
		assets : 'assets/'				// css、js、画像などを格納しているディレクトリ
	},
	pugOption: {
		pretty : true,					// 書き出されるhtmlを圧縮するか true / false
		basedir : 'src/'				// includeのベースディレクトリ指定
	},
	jsOption: {
		webpackConfig : require("../webpack.config"),
	},
	browserSyncOption: {
		port : 1580,						// テスト環境のポート番号
		virtualDomain : 'http://sample/',	// mampやxamppでvirtualdomain指定したときのアドレス
		virtualDomainMode : false,			// virtualdomainで作業するとき true / false
		phpMode : false,					// pugの書き出しをphpにする true / false
	},
	iconFontOption: {
		fontName : 'myfont',				// iconfontの書き出し名
		className : 'is-iconFont',			// iconfontを呼び出す際のclass名
	}
};