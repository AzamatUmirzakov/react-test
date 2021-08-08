import React from "react";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import Login from "./Login";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const LoginContainer = connect(mapStateToProps, {
  login,
  logout,
})(Login);

export default LoginContainer;
