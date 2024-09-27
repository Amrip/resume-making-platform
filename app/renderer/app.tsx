/**
 * @author: Kk86
 * @description: react入口文件
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
const container = document.getElementById('root');
const root = createRoot(container as any);
root.render(<App />);
