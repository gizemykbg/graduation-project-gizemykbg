import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

const LogoutButton = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const logout = () => {
    localStorage.removeItem('user-data');
    setLoggedOut(true);
  };

  if (loggedOut) {
    return <Redirect to="/LoginPage" />;
  }

  return (
    <button className="btn" onClick={logout}>
      LogOut
    </button>
  );
};
export default LogoutButton;

// redirect push true
