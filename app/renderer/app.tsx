/**
 * @author: Kk86
 * @description: react入口文件
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Title from './title';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
function Home() {
  return <Title text={'你好 title'} styles={{ color: 'red' }} />;
}
const container = document.getElementById('root');
const root = createRoot(container as any);
root.render(<App />);
