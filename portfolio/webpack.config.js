const path = require('path');
const glob = require("glob");
const webpack = require('webpack');

const option = {
	srcDir: "src/",
	distDir: "dist/",
}

const entries = {};
glob.sync("**/*.js", {
	ignore: ['**/_*.js', '**/library/*.js'],
	cwd: option.srcDir
	}).map(function (key) {
		// {key:value}の連想配列を生成
		// { **/*.js : './src/**/*.js' }という形式のobjectになる
		entries[key] = path.resolve(option.srcDir, key);
	}
);

const app = {
	mode: 'production',
	entry: entries,
	resolve: {
		modules: [
			path.resolve('./src/_include'),
		],
		alias: {
			'@j': path.resolve(__dirname, 'src/_include/_javascript/'),
			'@l': path.resolve(__dirname, 'src/assets/_include/_layout/'),
			'@c': path.resolve(__dirname, 'src/_include/_components/'),
			'@c': path.resolve(__dirname, 'src/assets/_include/_components/'),
			'@m': path.resolve(__dirname, 'src/assets/_include/_modules/'),
			'@p': path.resolve(__dirname, 'src/assets/_include/_pages/'),
		},
	},
	output: {
		filename: '[name]',// 出力ファイル名
		path: path.resolve(__dirname, option.distDir) //  出力ファイルのディレクトリ名
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/, //node_module除外
				use: [
						{
						loader: "babel-loader", // Babel を利用する
						options: {
							presets: [
							"@babel/preset-env"
							],
							root: path.resolve(__dirname, option.srcDir+'/js'),
						}
					}
				],
			},
			{
				test: /\.css/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					}
				],
			}
		]
	}
};

module.exports = app;
