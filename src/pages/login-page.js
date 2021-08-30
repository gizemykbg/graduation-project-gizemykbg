import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import LoginForm from '../components/login-form';
import Navbar from '../components/navbar/navbar';
import useLocalStorage from '../hooks/useLocalStorage';

export default function LoginPage() {
  const AdminUser = {
    username: 'gizem',
    password: 'gizem',
  };

  const [user, setUser] = useLocalStorage('user-data', '');
  const [error, setError] = useState('');
  const history = useHistory();

  const Login = (details) => {
    console.log(details);
    if (details.username == AdminUser.username && details.password == AdminUser.password) {
      console.log('Logged in');

      setUser({
        username: details.username,
        password: details.password,
      });
      history.push('AdminPage');
    } else {
      setError('Details do not match!!');
    }
  };

  return (
    <div className="Login">
      <Navbar />
      {user.username != '' ? (
        <LoginForm Login={Login} error={error} />
      ) : (
        <Redirect to="/AdminPage" />
      )}
    </div>
  );
}

// redirect push true
