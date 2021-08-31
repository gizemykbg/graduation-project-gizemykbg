import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

import AdminPage from '../pages/admin-page';
import LoginPage from '../pages/login-page';
import FormPage from '../pages/form-page';
import SuccessPage from '../pages/success-page';
import PrivateRoute from './private-route';
import Sorgulama from '../pages/basvuru-sorgula';

const Routers = () => {
  const [user, setUser] = useLocalStorage('user-data', '');
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <FormPage />
          </Route>
          <Route path="/basvuru-basarili/:id">
            <SuccessPage />
          </Route>
          <PrivateRoute path="/AdminPage" component={AdminPage} />
          <Route path="/LoginPage">
            <LoginPage {...{ setUser }} />
          </Route>
          <Route path="/basvuru-sorgula">
            <Sorgulama />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routers;
