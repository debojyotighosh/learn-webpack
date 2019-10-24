const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sourceDirectory = path.resolve(__dirname, '../src')
const publicDirectory = path.resolve(__dirname, '../public')

const config = {
  entry: sourceDirectory + '/client/index.js',
  output: {
    path: publicDirectory,
    filename: 'bundle-[name].[hash:8].js',
    publicPath: '/assets/'
  },
  resolve: { extensions: ['.js'] },
  devServer: {
    port: 31291,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: sourceDirectory + '/client/index.html',
      filename: 'index.html' // relative to root of the application
    })
  ]
}

module.exports = config