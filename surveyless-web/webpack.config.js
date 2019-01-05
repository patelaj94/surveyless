
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.csv', '.json', '.scss', '.css', '.html']
  },

  entry: {
    main: ['whatwg-fetch', 'core-js/es6', 'react-hot-loader/patch', 'main.js']
  },

  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    contentBase: './src',
    port: 9000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
         use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
         use: ['style-loader', 'css-loader', {loader: 'sass-loader', options: {sourceMap:true}}]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  performance: { hints: false }
}
