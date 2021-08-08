import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img alt="" src="assets/atomic-icon.svg" />
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <p className={styles.login}>
            {props.login} <button onClick={props.logout}>Logout</button>
          </p>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
