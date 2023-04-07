import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav me-auto">
                        {!isAuthenticated && (
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                        </li>
                        )}
                        {!isAuthenticated && (
                        <li className="nav-item">
                            <Link className="nav-link active" to="/register">Register</Link>
                        </li>
                        )}
                        {isAuthenticated && (
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Gradebooks</Link>
                        </li>
                        )}
                        {isAuthenticated && (
                        <li className="nav-item">
                            <Link className="nav-link active" to="/teachers">All Professors</Link>
                        </li>
                        )}
                        {isAuthenticated && (
                        <li className="nav-item">
                            <Link className="nav-link active" to="/my-gradebook">My Gradebook</Link>
                        </li>
                        )}
                        {isAuthenticated && (
                        <li className="nav-item">
                            <Link className="nav-link active" to="/gradebooks/create">Add Gradebook</Link>
                        </li>
                        )}
                        {isAuthenticated && (
                        <li className="nav-item">
                            <Link className="nav-link active" to="/logout">Logout</Link>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
