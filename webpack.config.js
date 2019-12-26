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
  plugins:[
    new htmlWepackPlugin({
      title: 'webpack实践（五）- babel-loader',
      template: './index.html',
      filename: 'template/resultIndex.html',
      inject: 'head',
      minify: {
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};