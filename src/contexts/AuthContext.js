import React, { useContext, createContext, useState, useEffect } from 'react';
import api from '../utilits/api';
import { useCookies } from 'react-cookie';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['Token', 'Refresh']);
  const isAuth = !!user;

  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`);
      authenticateRefresh();
    }, 60 * 60 * 1000);
    return () => clearInterval(handle);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isAuth && cookies.Refresh) {
      authenticateRefresh();
    }
    // eslint-disable-next-line
  }, []);

  const authenticateRefresh = async () => {
    try {
      await api.get('auth/refresh');
      const res = await api.post('users/me');
      setUser(res.data);
    } catch (e) {
      removeUserAndTokens();
      console.log(`no token found...`);
    }
  };

  const login = async data => {
    try {
      setCookie('Token', data.Authentication, { path: '/' });
      setCookie('Refresh', data.Refresh, { path: '/' });
      const res = await api.post('users/me');
      setUser(res.data);
    } catch (e) {
      removeUserAndTokens();
      console.log(e);
    }
  };

  const logout = async () => {
    try {
      await api.post('auth/logout');
    } catch (e) {
      console.log(e);
    }
    removeUserAndTokens();
  };
  const removeUserAndTokens = () => {
    setUser(null);
    removeCookie('Token');
    removeCookie('Refresh');
  };

  return (
    <authContext.Provider value={{ isAuth, login, logout, user }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };
