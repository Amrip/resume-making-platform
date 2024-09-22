/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/*!******************************!*\
  !*** ./app/main/electron.ts ***!
  \******************************/


/**
 * @author: Kk86
 * @description: 主进程入口
 * @version: 1.0.0
 * @license: MIT
 */

var path = __webpack_require__(/*! path */ "path");
var _require = __webpack_require__(/*! electron */ "electron"),
  app = _require.app,
  BrowserWindow = _require.BrowserWindow;

/**
 * @description: 创建主进程窗口
 */
function createWindow() {
  var mainWindow = new BrowserWindow({
    width: 1187,
    height: 667,
    webPreferences: {
      nodeIntegration: true,
      // 开启nodejs
      contextIsolation: false // 开启沙箱
    }
  });
  // 载入html模板
  if (isDev()) {
    mainWindow.loadURL('http://127.0.0.1:8001');
  } else {
    mainWindow.loadURL("file://".concat(path.join(__dirname, '../../dist/renderer/index.html')));
  }
}

/**
 * @description: 判断是否是开发环境
 * @return {boolean}
 */
function isDev() {
  return "development" === 'development';
}

// 监听主进程Ready事件，创建主进程窗口。
app.whenReady().then(function () {
  createWindow();
  console.log('App is ready!');
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsa0JBQU0sQ0FBQztBQUM1QixJQUFBQyxRQUFBLEdBQStCRCxtQkFBTyxDQUFDLDBCQUFVLENBQUM7RUFBMUNFLEdBQUcsR0FBQUQsUUFBQSxDQUFIQyxHQUFHO0VBQUVDLGFBQWEsR0FBQUYsUUFBQSxDQUFiRSxhQUFhOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxZQUFZQSxDQUFBLEVBQUc7RUFDdEIsSUFBTUMsVUFBVSxHQUFHLElBQUlGLGFBQWEsQ0FBQztJQUNuQ0csS0FBSyxFQUFFLElBQUk7SUFDWEMsTUFBTSxFQUFFLEdBQUc7SUFDWEMsY0FBYyxFQUFFO01BQ2RDLGVBQWUsRUFBRSxJQUFJO01BQUU7TUFDdkJDLGdCQUFnQixFQUFFLEtBQUssQ0FBRTtJQUMzQjtFQUNGLENBQUMsQ0FBQztFQUNGO0VBQ0EsSUFBSUMsS0FBSyxDQUFDLENBQUMsRUFBRTtJQUNYTixVQUFVLENBQUNPLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztFQUM3QyxDQUFDLE1BQU07SUFDTFAsVUFBVSxDQUFDTyxPQUFPLFdBQUFDLE1BQUEsQ0FBV2QsSUFBSSxDQUFDZSxJQUFJLENBQUNDLFNBQVMsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFFLENBQUM7RUFDeEY7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNKLEtBQUtBLENBQUEsRUFBRztFQUNmLE9BQU9LLGFBQW9CLEtBQUssYUFBYTtBQUMvQzs7QUFFQTtBQUNBZCxHQUFHLENBQUNpQixTQUFTLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBTTtFQUN6QmhCLFlBQVksQ0FBQyxDQUFDO0VBQ2RpQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFDNUJwQixHQUFHLENBQUNxQixFQUFFLENBQUMsVUFBVSxFQUFFLFlBQU07SUFDdkIsSUFBSXBCLGFBQWEsQ0FBQ3FCLGFBQWEsQ0FBQyxDQUFDLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUVyQixZQUFZLENBQUMsQ0FBQztFQUNoRSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3VtZS1tYWtpbmctcGxhdGZvcm0vZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vcmVzdW1lLW1ha2luZy1wbGF0Zm9ybS9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL3Jlc3VtZS1tYWtpbmctcGxhdGZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdW1lLW1ha2luZy1wbGF0Zm9ybS8uL2FwcC9tYWluL2VsZWN0cm9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8qKlxyXG4gKiBAYXV0aG9yOiBLazg2XHJcbiAqIEBkZXNjcmlwdGlvbjog5Li76L+b56iL5YWl5Y+jXHJcbiAqIEB2ZXJzaW9uOiAxLjAuMFxyXG4gKiBAbGljZW5zZTogTUlUXHJcbiAqL1xyXG5cclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgeyBhcHAsIEJyb3dzZXJXaW5kb3cgfSA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uOiDliJvlu7rkuLvov5vnqIvnqpflj6NcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpIHtcclxuICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgd2lkdGg6IDExODcsXHJcbiAgICBoZWlnaHQ6IDY2NyxcclxuICAgIHdlYlByZWZlcmVuY2VzOiB7XHJcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSwgLy8g5byA5ZCvbm9kZWpzXHJcbiAgICAgIGNvbnRleHRJc29sYXRpb246IGZhbHNlLCAvLyDlvIDlkK/mspnnrrFcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgLy8g6L295YWlaHRtbOaooeadv1xyXG4gIGlmIChpc0RldigpKSB7XHJcbiAgICBtYWluV2luZG93LmxvYWRVUkwoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke3BhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9kaXN0L3JlbmRlcmVyL2luZGV4Lmh0bWwnKX1gKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb246IOWIpOaWreaYr+WQpuaYr+W8gOWPkeeOr+Wig1xyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEZXYoKSB7XHJcbiAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xyXG59XHJcblxyXG4vLyDnm5HlkKzkuLvov5vnqItSZWFkeeS6i+S7tu+8jOWIm+W7uuS4u+i/m+eoi+eql+WPo+OAglxyXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgY3JlYXRlV2luZG93KCk7XHJcbiAgY29uc29sZS5sb2coJ0FwcCBpcyByZWFkeSEnKTtcclxuICBhcHAub24oJ2FjdGl2YXRlJywgKCkgPT4ge1xyXG4gICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkgY3JlYXRlV2luZG93KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJfcmVxdWlyZSIsImFwcCIsIkJyb3dzZXJXaW5kb3ciLCJjcmVhdGVXaW5kb3ciLCJtYWluV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJ3ZWJQcmVmZXJlbmNlcyIsIm5vZGVJbnRlZ3JhdGlvbiIsImNvbnRleHRJc29sYXRpb24iLCJpc0RldiIsImxvYWRVUkwiLCJjb25jYXQiLCJqb2luIiwiX19kaXJuYW1lIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwid2hlblJlYWR5IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImdldEFsbFdpbmRvd3MiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9