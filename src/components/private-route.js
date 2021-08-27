import React from "react";
import { Route, Redirect } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [admin, setAdmin] = useLocalStorage("user-data", "");

  return (
    <Route
      {...rest}
      render={(props) => {
        return admin ? <Redirect to="/AdminPage" /> : <Component {...props} />;
      }}
    />
  );
}
