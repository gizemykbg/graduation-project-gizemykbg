/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { AdminContext } from '../context/admin-context';
import LoginPage from '../pages/login-page';

export default function PrivateRoute({ component: Component, ...rest }) {
  const [user, setUser] = useLocalStorage('user-data', '');

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/LoginPage" />;
      }}
    />
  );
}
