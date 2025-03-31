import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import GlobalContext from './context/GlobalContext';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Routes>

          //rotas login
          
          <Route path="/auth" element={<Auth />}>
              <Route path="login" element={<Login />} />
              <Route path="registrar" element={<CreateAccount />} />
          </Route>
          <Route path="*" />
        </Routes>
      </GlobalContext>
    </BrowserRouter>
  );
};

export default AppRoutes;
