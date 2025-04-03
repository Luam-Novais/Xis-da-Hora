import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Auth from './pages/Auth';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import GlobalContext from './context/GlobalContext';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Carrinho from './pages/Carrinho';
import MyAccount from './pages/MyAccount';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='cardapio' element={<Cardapio/>}/>
          <Route path='carrinho' element={<Carrinho/>}/>
          <Route path='minhaConta' element={<MyAccount/>}/>
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
