import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + " " + classes.active}>
          <NavLink to="/dialogs/1">Mike Hawk</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/2">Mel Lester</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/3">Jack Kenoff</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/4">Hue Jass</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/5">Mike Hunt</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/6">Mike Oxmaul</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/7">Lez Bien</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How is yo mom?</div>
        <div className={classes.message}>Bruh</div>
        <div className={classes.message}>I love koks</div>
        <div className={classes.message}>flex cringe tbh idk ngl omg</div>
      </div>
    </div>
  );
};

export default Dialogs;
