import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { TextField } from "./textfield";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
    history.push("AdminPage");
  };

  return (
    <>
      <Formik>
        {(formik) => (
          <Form onSubmit={submitHandler}>
            <div>
              <h2>Admin Login</h2>
              {error != "" ? <div className="error">{error}</div> : ""}
              <div>
                <label htmlFor="username">username</label>
                <TextField
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      username: e.target.value,
                    })
                  }
                  value={details.username}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <TextField
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setDetails({
                      ...details,
                      password: e.target.value,
                    })
                  }
                  value={details.password}
                />
              </div>
              <input type="submit" value="Login" />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
