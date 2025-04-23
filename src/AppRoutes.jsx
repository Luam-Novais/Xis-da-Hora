import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Login from './pages/user/Login';
import CreateAccount from './pages/user/CreateAccount';
import GlobalContext from './context/GlobalContext';
import Home from './pages/user/Home';
import Cardapio from './pages/user/Cardapio';
import Carrinho from './pages/user/Carrinho';
import MyAccount from './pages/user/MyAccount';
import RouteAuthorization from './components/auth/RouteAuthorization';
import PublicLayout from './layouts/PublicLayout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Routes>
          //public routes
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="cardapio/:id?" element={<Cardapio />}/>
            <Route path="carrinho" element={<Carrinho />} />
            <Route
              path="minhaConta"
              element={
                <RouteAuthorization>
                  <MyAccount />
                </RouteAuthorization>
              }
            />
            <Route path="/auth" element={<Auth />}>
              <Route path="login" element={<Login />} />
              <Route path="registrar" element={<CreateAccount />} />
            </Route>
          </Route>
          <Route path="*" />
        </Routes>
      </GlobalContext>
    </BrowserRouter>
  );
};

export default AppRoutes;
