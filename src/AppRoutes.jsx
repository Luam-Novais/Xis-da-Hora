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
import UserPrivateRoute from './components/auth/UserPrivateRoute';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import AdminPrivateRoute from './components/auth/AdminPrivateRoute';
import RegisterBurger from './pages/admin/RegisterBurger';
import Unauthorized from './components/layout/Unauthorized';

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
                <UserPrivateRoute>
                  <MyAccount />
                </UserPrivateRoute>
              }
            />
            <Route path="/auth" element={<Auth />}>
              <Route path="login" element={<Login />} />
              <Route path="registrar" element={<CreateAccount />} />
            </Route>
          </Route>

          //admin routes
            <Route element={<AdminLayout/>}>
              <Route path='/admin/functions'
                element={
                <AdminPrivateRoute>
                  <RegisterBurger/>
                </AdminPrivateRoute>}
              />
              <Route path='/unauthorized' element={<Unauthorized/>}/>
            </Route>
          <Route path="*" />
        </Routes>
      </GlobalContext>
    </BrowserRouter>
  );
};

export default AppRoutes;
