import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AdminContext = createContext();

function LoginProvider({ children }) {
  const [isLogged, setIsLogged] = useLocalStorage("user-data", false);

  const login = (user) => {
    if (user.username === "gizem" && user.password === "gizem") {
      setIsLogged(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLogged(false);
  };

  const value = { isLogged, login, logout };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

export default LoginProvider;
