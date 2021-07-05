import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <main className={classes.content}>
      <div>
        <img src="assets/space.jpg" alt="" className={classes.profileImg} />
      </div>
      <div>
        <img
          src="assets/profile-avatar.jpg"
          alt=""
          className={classes.avatar}
        />
      </div>
      <MyPosts />
    </main>
  );
};

export default Profile;
