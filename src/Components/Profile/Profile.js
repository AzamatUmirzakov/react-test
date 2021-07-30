import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  return (
    <main className={styles.content}>
      <ProfileInfo user={props.user} />
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
