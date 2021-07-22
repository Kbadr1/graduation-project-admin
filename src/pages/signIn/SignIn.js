import React, { useContext } from "react";
import "./signIn.scss";
import logo from "./logo.png";
import { AuthContext } from "../../contexts/AuthContext";

const SignIn = () => {
  const { handleLogInSubmit, setEmail, setPassword, loginError } =
    useContext(AuthContext);

  return (
    <div className="SignIn">
      <div className="container">
        <div className="row ">
          <div className="offset-md-4 col-md-4 col-12">
            <img src={logo} alt="" />
            <h4>
              Sign in to Dowaa <span>(admin)</span>
            </h4>
            <form onSubmit={handleLogInSubmit}>
              {loginError ? (
                <div className="login-error">Wrong Email or Password !</div>
              ) : (
                ""
              )}
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
