/**
 * @author: Kk86
 * @description: 渲染进程webpack配置
 */

const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const renderConfig = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../app/renderer/app.tsx'),
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist/renderer'),
    clean: true,
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, '../dist/renderer'), // webpack5 contentBase改为static,
    devMiddleware: {
      // 大坑：这里必须要设置writeToDisk: true, 否则不会执行构建
      writeToDisk: true,
    },
    compress: true,
    host: '127.0.0.1',
    port: '8001',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: 'index.html',
      chunks: ['index'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:8]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = webpackMerge.merge(baseConfig, renderConfig);
