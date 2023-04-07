import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../services/AuthService";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInvalidCredentials(false);

    try {
      await authService.login(credentials);
      onLogin();
      history.push("/");
    } catch (error) {
      setInvalidCredentials(true);
      alert("invalid credentials");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <ul>
          <li>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={({ target }) => {
                setCredentials({ ...credentials, email: target.value });
              }}
              required
            />
          </li>
          <li>
            <label htmlFor="password">Password: </label>
            <br />
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={({ target }) => {
                setCredentials({ ...credentials, password: target.value });
              }}
              required
            />
          </li>
          <li>
            {invalidCredentials && (
              <p style={{ color: "red" }}>Invalid credentials</p>
            )}
          </li>
          <li>
            <br />
            <button type="button" className="btn btn-warning">
              Log in
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Login;