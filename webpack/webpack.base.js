/**
 * @author: Kk86
 * @description: webpack基础配置
 */

const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.join(__dirname, '../app/renderer'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
    ],
  },
};
