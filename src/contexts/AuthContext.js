import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  let history = useHistory();
  const loginRedirect = () => {
    history.push("/");
  };

  const logOutRedirect = () => {
    history.push("/sign-in");
  };

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [waitToken, setWaitToken] = useState(true);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [loginError, setLoginError] = useState(false);

  const logIndata = {
    email: email,
    password: password,
  };

  const handleLogInSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://boiling-waters-85095.herokuapp.com/api/users/login",
        logIndata
      )
      .then((res) => {
        localStorage.setItem("token", res.data);
        setLoggedIn(true);
        setWaitToken(!waitToken);
        loginRedirect();
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
      });
  };

  const handleLogOut = () => {
    localStorage.clear();
    setCurrentUser("");
    setLoggedIn(!loggedIn);
    logOutRedirect();
  };

  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    axios
      .get("https://boiling-waters-85095.herokuapp.com/api/users/me", config)
      .then((res) => {
        setCurrentUser(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [waitToken]);

  return (
    <AuthContext.Provider
      value={{
        handleLogInSubmit,
        password,
        setPassword,
        email,
        setEmail,
        currentUser,
        history,
        loggedIn,
        setLoggedIn,
        handleLogOut,
        loginError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
