import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="*" />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
