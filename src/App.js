import React from 'react';
import './App.css';
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
