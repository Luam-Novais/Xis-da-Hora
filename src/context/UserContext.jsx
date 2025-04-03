import React, { createContext, useState } from 'react';
import { DATA_POST } from '../utilities/api';
import { useNavigate } from 'react-router-dom';

export const userContext = createContext();
const UserStorage = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function userLogin(data) {
    const { url, options } = DATA_POST('/auth/login', data);
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const json = await response.json();

      if (response.ok) {
        window.localStorage.setItem('token', json.token)
        setUser(json.user.nome)
        navigate('/');
      }
    } catch (err) {
      alert('Ocorreu um erro!', err);
    } finally {
      setLoading(false);
    }
  }
  async function userCreate(data) {
    const { url, options } = DATA_POST('/auth/registrar', data);
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const json = await response.json();

      if (response.ok) {
        window.localStorage.setItem('token', json.token)
        setUser(json.user.nome)
        navigate('/');
        navigate('/');
      }
    } catch (err) {
      alert('Ocorreu um erro!', err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        userLogin,
        userCreate,
        loading,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserStorage;
