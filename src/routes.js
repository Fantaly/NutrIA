import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Component1 />} />
    <Route path="/route2" element={<Component2 />} />
  </Routes>
);

export default AppRoutes;