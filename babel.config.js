/**
 * @author: Kk86
 * @description: babel 配置文件
 */

module.exports = {
  presets: [
    '@babel/preset-env', // 根据运行环境，选择对应的语法转换插件
    '@babel/preset-react', // 转换 JSX/TSX 语法
    '@babel/preset-typescript', // 转换 TS 语法
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // 减少重复的函数调用，提高性能
    [
      '@babel/plugin-transform-modules-commonjs', // 将 ES6 模块转换为 CommonJS 模块
      {
        allowTopLevelThis: true, // 允许顶层的 this
        lazy: true, // 惰性加载模块，只有在使用时才加载模块
        loose: true, // 允许模块顶层的 this 关键字
      },
    ],
  ],
};
