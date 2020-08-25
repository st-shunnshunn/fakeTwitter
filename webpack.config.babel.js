import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, '/www'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html?$/, loader: 'html-loader' },
      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      },
    ],
  },
  resolve: {
    modules: [ 'node_modules', path.resolve(__dirname, 'components'),path.resolve(__dirname, 'assets') ],
    extensions: ['.js'],
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'www'),
    watchContentBase: true,
    hot: true,
    open: true,
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        logLevel: 'debug'
      }
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}