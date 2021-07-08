import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="assets/space.jpg" alt="" className={classes.profileImg} />
      </div>
      <div className={classes.description}>
        <img
          src="assets/profile-avatar.jpg"
          alt=""
          className={classes.avatar}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
