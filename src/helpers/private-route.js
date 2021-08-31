/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

export default function PrivateRoute({ component: Component, ...rest }) {
  const [user] = useLocalStorage('user-data', '');

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/LoginPage" />;
      }}
    />
  );
}
