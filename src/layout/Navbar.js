import React from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../services/AuthService";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const history = useHistory();

  const handleLogout = async () => {
    const response = await authService.logout();
    setIsAuthenticated(false);
    history.push("/login");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand navbar-dark bg-dark"
        aria-label="Second navbar example"
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              {!isAuthenticated && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              )}
              {!isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/register">
                    Register
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <h2 className="nav-link active">
                    ONLINE GRADEBOOKS
                  </h2>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Gradebooks
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/teachers">
                    All Professors
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/my-gradebook">
                    My Gradebook
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/gradebooks/create">
                    Create Gradebook
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;