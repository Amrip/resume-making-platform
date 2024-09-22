/**
 * @author: Kk86
 * @description: 主进程入口
 * @version: 1.0.0
 * @license: MIT
 */

const path = require('path');
const { app, BrowserWindow } = require('electron');

/**
 * @description: 创建主进程窗口
 */
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1187,
    height: 667,
    webPreferences: {
      nodeIntegration: true, // 开启nodejs
      contextIsolation: false, // 开启沙箱
    },
  });
  // 载入html模板
  if (isDev()) {
    mainWindow.loadURL('http://127.0.0.1:8001');
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../../dist/renderer/index.html')}`);
  }
}

/**
 * @description: 判断是否是开发环境
 * @return {boolean}
 */
function isDev() {
  return process.env.NODE_ENV === 'development';
}

// 监听主进程Ready事件，创建主进程窗口。
app.whenReady().then(() => {
  createWindow();
  console.log('App is ready!');
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
