import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <main className={classes.content}>
      <ProfileInfo />
      <MyPosts />
    </main>
  );
};

export default Profile;
