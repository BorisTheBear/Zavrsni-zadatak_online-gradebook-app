import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../services/AuthService";

const Register = ({ onRegister }) => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    image_url: ""
  });

  const [responseError, setResponseError] = useState({
    response: {
      data: {
        errors: {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          password_confirmation: "",
          image_url: ""
        }
      }
    }
  });

  const firstNameError = responseError.response.data.errors.first_name;
  const lastNameError = responseError.response.data.errors.last_name;
  const emailError = responseError.response.data.errors.email;
  const passwordError = responseError.response.data.errors.password;
  const confirmPasswordError = responseError.response.data.errors.password_confirmation;
  const imgURLError = responseError.response.data.errors.image_url;

  const history = useHistory();

  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await authService.register(userData);
        onRegister();
        history.push("/");
    } catch (err) {
        setResponseError(err);
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <ul>
          <li>
            <label htmlFor="first_name">First name:</label>
            <br />
            <input
              id="first_name"
              type="text"
              placeholder="First name"
              value={userData.first_name}
              onChange={({ target }) => {
                setUserData({ ...userData, first_name: target.value });
              }}
              required
            />
          </li>
          {firstNameError ? 
            <p style={{ color: "red" }}>{firstNameError}</p> :
            <br />
          }
          <li>
            <label htmlFor="last_name">Last name: </label>
            <br />
            <input
              id="last_name"
              type="text"
              placeholder="Last name"
              value={userData.last_name}
              onChange={({ target }) => {
                setUserData({ ...userData, last_name: target.value });
              }}
              required
            />
          </li>
          {lastNameError ? 
            <p style={{ color: "red" }}>{lastNameError}</p> :
            <br />
          }
          <li>
            <label htmlFor="email">Email: </label>
            <br />
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={userData.email}
              onChange={({ target }) => {
                setUserData({ ...userData, email: target.value });
              }}
              required
            />
          </li>
          {emailError ? 
            <p style={{ color: "red" }}>{emailError}</p> :
            <br />
          }
          <li>
            <label htmlFor="password">Password: </label>
            <br />
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={({ target }) => {
                setUserData({ ...userData, password: target.value });
              }}
              required
            />
          </li>
          {passwordError ? 
            <p style={{ color: "red" }}>{passwordError}</p> :
            <br />
          }
          <li>
            <label htmlFor="password_confirmation">Confirm password: </label>
            <br />
            <input
              id="password_confirmation"
              type="password"
              placeholder="Confirm password"
              value={userData.password_confirmation}
              onChange={({ target }) => {
                setUserData({ ...userData, password_confirmation: target.value });
              }}
              required
            />
          </li>
          {confirmPasswordError ? 
            <p style={{ color: "red" }}>{confirmPasswordError}</p> :
            <br />
          }
          <li>
            <label htmlFor="image_url">Image URL: </label>
            <br />
            <input
              id="image_url"
              type="text"
              placeholder="Image URL"
              value={userData.image_url}
              onChange={({ target }) => {
                setUserData({ ...userData, image_url: target.value });
              }}
              required
            />
          </li>
          {imgURLError ? 
            <p style={{ color: "red" }}>{imgURLError}</p> :
            <br />
          }
          <li>
            <br />
            <label htmlFor="terms">I accept terms and conditions </label>
            <br />
            <input
              id="terms"
              type="checkbox"
              onChange={checkboxHandler}
              required
            />
          </li>
          <li>
            <br />
            <button
              disabled={!agree}
              className="btn btn-warning"
              onClick={handleSubmit}
            >
              Register
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Register;