import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

import AdminPage from "./pages/admin-page";
import LoginPage from "./pages/login-page";
import FormPage from "./pages/form-page";

function App() {
  const [admin, setAdmin] = useLocalStorage("user-data", "");

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <FormPage />
          </Route>
          <Route path="/basvuru-basarili">
            <SuccessPage />
          </Route>
          <Route path="/AdminPage">
            {admin ? <AdminPage /> : <LoginPage {...{ setAdmin }} />}
          </Route>
          <Route path="/LoginPage">
            <LoginPage {...{ setAdmin }} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
