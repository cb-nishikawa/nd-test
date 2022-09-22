# nexptape_cording-template

## 【はじめに】
### ■ git
https://gitlab.com/nxpg/nxpg_coding-template.git
sorcetreeなどを使ってtemplateデータをダウンロードする。

### ■ インストール
コマンドラインでプロジェクトディレクトリに移動後以下を入力
```
npm install
```

### ■ build
コマンドラインで以下を入力
```
gulp build
```
srcのファイルがコンパイルしてdocsに書き出されます。
※build時にdocsディレクトリは削除されるので注意

### ■ browserSync
コマンドラインで以下を入力
```
gulp
```
ポート番号を変更するときは gulp_module/option.js で変更可能
※gulpの監視対象ファイルはgulpタスク起動時点で存在しているファイルです。  
 ファイルの追加・更新が反映されない場合、Ctrl+Cでタスクを停止し、再度タスクを起動してください。

## 【ファイル・フォルダ構成】
各ディレクトリ名は gulp_module/option.js で変更可能

```
.
├── docs                              : リソースの書き出し先
|
├── gulp_module                       : gulp用モジュール
|   ├── option.js                     : gulp用設定
|   .                                 : その他モジュール
| 
└── src
    ├── _include
    │   ├── _components               : コンポーネント
    │   ├── _javascript               : jsモジュール
    │   ├── _layput                   : レイアウト
    │   ├── _modules                  : モジュール
    │   ├── _pages                    : ページ
    │   ├── _setting                  : 各種設定
    │   ├── _template                 : テンプレート
    │   └── _vendor                   : 外部ファイル
    │
    └── assets                        : リソースファイル
    |   ├── css                       : css
    |   │   └── style.css             : style.css用 
    |   │
    |   ├── fonts                     : フォントファイル
    |   │   └── iconfont              : アイコンフォント用ディレクトリ
    |   │       ├── _icon             : アイコンフォント用svg画像(連番（uEA+番号）じゃないとエラーが出る)
    |   │       ├── _list             : アイコンフォント用設定各種
    |   │       │   └── sample.html   : アイコンフォント用プレビューhtml
    |   │       └── _template         : アイコンフォント用テンプレート
    |   │
    |   ├── images                    : 画像（案件ごとに変更する）
    |   │       ├── common            : 共通画像（案件ごとに変更する）
    |   │       └── contents          : ページごとの画像（案件ごとに変更する）
    |   │           ├── top           : top用画像（案件ごとに変更する）
    |   │           ├── about         : about用画像（案件ごとに変更する）
    |   │           .
    |   |
    |   └── js                        : javascript
    |       ├── library               : 外部javaacriptライブラリ（docsにそのまま書き出される）
    |       └── function.js           : function.js
    ├── .gitignore                    : git除外ファイル設定
    ├── .node-version                 : nodeバージョンファイル
    ├── gulpfile.js                   : gulp設定ファイル
    ├── package.json                  : npmパッケージ管理ファイル
    ├── README.md                     : 本ファイル
    ├── webpack.config.js             : webpack設定ファイル

```

## 【modules / components / layout / pages / template】
本テンプレートでは、smacss等をもとにファイルの構成を以下の順で構成しています
```
layout>components>modules
```

### ■ layout
レイアウト。
コンテンツ幅や、コンポーネントとの間隔、カラムを分けるときなどに使用します。

### ■ components
コンポーネント。
ヘッダー、フッター、ニュース、メインビジュアルなどモジュールがまとまったときなどに使用します。

### ■ modules
モジュール。
タイトル、ボタン、テキスト、リストなど、小さなパーツで使用します。

### ■ pages
ページ。
topやお問い合わせなど、ページ単位で編集が必要なときに使用します。

### ■ template
テンプレート。



## 【pug / html】
### コンポーネント作成したいとき

ベース
```
mixin c-componentName01(tg)
	-
		var op = {
			tag:       tg.tag ? tg.tag                : "div",
			baseName:  tg.baseName ? tg.baseName      : "l-componentName",
			className: tg.className ? tg.className    : ""
		}
		
	#{op.tag}( class = op.baseName + " " + op.className )
		block
```

・componentNameを変更 コンポーネントをコピーすることも考えて連番を振っておく
・引数は一個にして、連想配列を呼び出す（個別にすると引数が増えたときに全コンポーネントを修正しないといけなくなる）
・呼び出すときは +c-componentName01({tag:"div"})  引数無いとエラー出るので"div"でもtagは必ず入れておく


## 【stylus / scss / css】




## 【js】





## 【gulp】


