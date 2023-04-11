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
import SingleGradebook from "./components/SingleGradebook";
import CreateGradebook from "./pages/CreateGradebook";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Switch>
          <PrivateRoute exact path="/teachers">
            <Teachers />
          </PrivateRoute>
          <PrivateRoute path="/teachers/:id">
            <SingleTeacher />
          </PrivateRoute>
          <PrivateRoute exact path="/gradebooks/create">
            <CreateGradebook />
          </PrivateRoute>
          <PrivateRoute exact path="/gradebooks/:id">
            <SingleGradebook />
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
          <PrivateRoute path="/">
            <Gradebooks />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;