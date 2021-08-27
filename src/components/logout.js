import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const LogoutButton = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const logout = () => {
    localStorage.removeItem("user-data");
    setLoggedOut(true);
  };

  if (loggedOut) {
    return <Redirect to="/LoginPage" push={true} />;
  }

  return (
    <button className="btn" onClick={logout}>
      LogOut
    </button>
  );
};
