// 第一步：引入
var htmlWepackPlugin = require('html-webpack-plugin')

var path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'index.bundle.js'
  },
  // 第二步：创建html-webpack-plugin的实例，配置到plugins选项中
  plugins:[
    new htmlWepackPlugin({
      // title配置项可用于生成html的标题
      title: 'webpack实践（四）- html-webpack-plugin',
      template: './index.html',
      filename: 'template/resultIndex.html',
      inject: 'head',
      minify: {
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      }
    })
  ]
};