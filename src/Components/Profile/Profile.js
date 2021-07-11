import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <main className={styles.content}>
      <ProfileInfo user={props.store.getState().profilePage.currentUser} />
      <MyPosts store={props.store} />
    </main>
  );
};

export default Profile;
