import React, { createContext, useEffect, useState } from 'react';
import { DATA_POST, GET_TOKEN } from '../utilities/api';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export const userContext = createContext();
const UserStorage = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState({ visible: false, state: null, message: '' });
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  async function userLogin(data) {
    const { url, options } = DATA_POST('auth/login', data);
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const json = await response.json();

      if (response.ok) {
        window.localStorage.setItem('token', json.token);
        setUser(json.user);
        setIsAuthorized(true);
        navigate('/');
        setStatus({visible: true, state: true, message: 'Login feito com sucesso!'})
      }else if(!response.ok){
        setMessage(json.message)
        setIsAuthorized(false);
        setStatus({visible: true, state: false, message: 'Usuário ou senha inválidos.'})
      }
    } catch (err) {
      alert('Ocorreu um erro inesperado! Verifique sua conexão.', err);
    } finally {
      setLoading(false);
    }
  }
  async function userCreate(data) {
    const { url, options } = DATA_POST('auth/registrar', data);
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const json = await response.json();

      if (response.ok) {
        window.localStorage.setItem('token', json.token);
        setUser(json.user);
        setMessage(json.message)
        setIsAuthorized(true);
        navigate('/');
        setStatus({ visible: true, state: true, message: 'Conta criada com sucesso! Seja bem-vindo(a) à nossa lanchonete 🍔'})
      } else if (!response.ok) {
        setMessage(json.message)
        setIsAuthorized(false);
        setStatus({ visible: true, state: false, message: `${json.message}`})
      }
    } catch (err) {
      console.log(err)
      alert('Ocorreu um erro inesperado! Verifique sua conexão.', err);
    } finally {
      setLoading(false);
    }
  }
  function logout(){
    setUser(null)
    window.localStorage.removeItem('token')
    setIsAuthorized(false)
    
  }
  async function verifyToken(token) {
    const { url, options } = GET_TOKEN(token);
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
      setIsAuthorized(true);
      const decode = jwtDecode(token)
      setUser(decode)
    } else {
      setIsAuthorized(false);
    }
  }

   if (status.visible) {
    setTimeout(() => {
      setStatus({ visible: false, state: null, message: '' });
    }, 3000);
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    verifyToken(token);
  }, []);
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        message,
        userLogin,
        logout,
        userCreate,
        loading,
        isAuthorized,
        status
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserStorage;