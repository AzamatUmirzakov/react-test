import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
