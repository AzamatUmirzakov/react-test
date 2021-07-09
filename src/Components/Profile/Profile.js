import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <main className={styles.content}>
      <ProfileInfo />
      <MyPosts addPost={props.addPost} posts={props.state.posts} />
    </main>
  );
};

export default Profile;
