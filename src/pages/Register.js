import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../services/AuthService';

const Register = ({ onRegister }) => {
    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmed: "",
        image_url: "",
        terms: false
    });

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(userData.terms);
        // try {
        //     await authService.register(userData)
        //     onRegister();
        //     history.push("/");
        // } catch (error) {
        //     alert("Enter all required fields");
        // }
    }
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
                onChange={({target}) => {setUserData({...userData, first_name: target.value})}}
                required
                />
            </li>
            <li>
                <label htmlFor="last_name">Last name: </label>
                <br />
                <input
                id="last_name"
                type="text"
                placeholder="Last name"
                value={userData.last_name}
                onChange={({target}) => {setUserData({...userData, last_name: target.value})}}
                required
                />
            </li>
            <li>
                <label htmlFor="email">Email: </label>
                <br />
                <input
                id="email"
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={({target}) => {setUserData({...userData, email: target.value})}}
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
                value={userData.password}
                onChange={({target}) => {setUserData({...userData, password: target.value})}}
                required
                />
            </li>
            <li>
                <label htmlFor="password_confirmed">Confirm password: </label>
                <br />
                <input
                id="password_confirmed"
                type="password"
                placeholder="Confirm password"
                value={userData.password_confirmed}
                onChange={({target}) => {setUserData({...userData, password_confirmed: target.value})}}
                required
                />
            </li>
            <li>
                <label htmlFor="image_url">Image URL: </label>
                <br />
                <input
                id="image_url"
                type="text"
                placeholder="Image URL"
                value={userData.image_url}
                onChange={({target}) => {setUserData({...userData, image_url: target.value})}}
                required
                />
            </li>
            <li>
                <br />
                <label htmlFor="terms">I accept terms and conditions </label>
                <br />
                <input
                id="terms"
                type="checkbox"
                checked={userData.terms || ""}
                onChange={({target}) => {setUserData({...userData, terms: target.value})}}
                required
                />
            </li>
            <li>
                <br />
                <button type="button" className="btn btn-warning" onClick={handleSubmit}>Register</button>
            </li>
        </ul>
      </form>
    </div>
  )
}

export default Register;
