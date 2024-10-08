/**
 * @author: Kk86
 * @description: 主进程webpack配置
 */

const path = require('path');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const mainConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist/main'),
    clean: true,
  },
  devtool: 'inline-source-map',
  mode: 'development',
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
