import React, { useState } from "react";
import LoginForm from "../components/login-form";
import Navbar from "../components/navbar/navbar";
import useLocalStorage from "../hooks/useLocalStorage";

import { Redirect } from "react-router-dom";

export default function LoginPage() {
  const AdminUser = {
    username: "gizem",
    password: "gizem",
  };

  const [user, setUser] = useLocalStorage("user-data", ""); //useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.username == AdminUser.username &&
      details.password == AdminUser.password
    ) {
      console.log("Logged in");

      setUser({
        username: details.username,
        password: details.password,
      });
    } else {
      alert("no no no");
      setError("Details do not match!!");
    }
  };

  return (
    <div className="Login">
      <Navbar />
      {user.username != "" ? (
        <LoginForm Login={Login} error={error} />
      ) : (
        <Redirect to="/AdminPage" />
      )}
    </div>
  );
}
