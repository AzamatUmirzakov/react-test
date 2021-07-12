import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.nav}>
      <nav>
        <div className={styles.item}>
          <NavLink to="/" exact activeClassName={styles.active}>
            Profile
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/dialogs" activeClassName={styles.active}>
            Messages
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/news" activeClassName={styles.active}>
            News
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/music" activeClassName={styles.active}>
            Music
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/settings" activeClassName={styles.active}>
            Settings
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
