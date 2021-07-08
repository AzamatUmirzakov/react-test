import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <main className={styles.content}>
      <ProfileInfo />
      <MyPosts />
    </main>
  );
};

export default Profile;
