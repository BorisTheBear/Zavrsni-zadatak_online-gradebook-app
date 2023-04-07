import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./layout/Navbar";
import Register from "./pages/Register";
import Gradebooks from "./pages/Gradebooks";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { useState } from "react";
import Teachers from "./pages/Teachers";
import SingleTeacher from "./components/SingleTeacher";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} />
        <Switch>
          <PrivateRoute exact path="/">
            <Gradebooks />
          </PrivateRoute>
          <PrivateRoute exact path="/teachers">
            <Teachers />
          </PrivateRoute>
          <PrivateRoute path="/teachers/:id">
            <SingleTeacher />
          </PrivateRoute>
          <PublicRoute path="/login">
            <Login
              onLogin={() => {
                setIsAuthenticated(true);
              }}
            />
          </PublicRoute>
          <PublicRoute path="/register">
            <Register
              onRegister={() => {
                setIsAuthenticated(true);
              }}
            />
          </PublicRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;