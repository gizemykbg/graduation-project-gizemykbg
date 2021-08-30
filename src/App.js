import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

import AdminPage from './pages/admin-page';
import LoginPage from './pages/login-page';
import FormPage from './pages/form-page';
import Navbar from './components/navbar/navbar';
import SuccessPage from './pages/success-page';

import LoginProvider from './context/admin-context';
import Routers from './helpers/routes';

function App() {
  return (
    <>
      <LoginProvider>
        <Routers />
      </LoginProvider>
    </>
  );
}

export default App;
