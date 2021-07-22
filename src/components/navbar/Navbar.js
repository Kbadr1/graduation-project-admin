import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./navbar.scss";

const Navbar = () => {
  const { loggedIn, currentUser, handleLogOut } = useContext(AuthContext);
  return (
    <div className="Navbar">
      {loggedIn && (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="/">
            Admin Panel
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/orders">
                  Orders
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/users">
                  Users
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/categories">
                  Categories
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/brands">
                  Brands
                </Link>
              </li>
            </ul>
          </div>
          <a class="navbar-brand username" href="#">
            {currentUser}
          </a>
          <a onClick={handleLogOut} class="navbar-brand username" href="#">
            <i class="fas fa-sign-out-alt"></i>
          </a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
