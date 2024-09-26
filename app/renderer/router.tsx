import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Root from './pages/root';
import Source from './pages/source';
import Introduce from './pages/introduce';
import Resume from './pages/resume';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/source" element={<Source />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
