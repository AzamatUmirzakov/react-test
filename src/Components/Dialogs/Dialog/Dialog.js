import React from "react";
import styles from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
