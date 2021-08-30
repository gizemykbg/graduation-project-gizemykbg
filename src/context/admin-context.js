import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AdminContext = createContext();

function LoginProvider({ children }) {
  const [isUser, setIsUser] = useLocalStorage('user-data', false);

  const login = (user) => {
    if (user.username === 'kodluyoruz' && user.password === 'bootcamp109') {
      setIsUser(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsUser(false);
  };

  const value = { isUser, login, logout };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export default LoginProvider;
