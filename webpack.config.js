const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

const plugins = []

if (isDev) {
  plugins.push(
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  )
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins,
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
    compress: true
  }
}
