import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  let state = props.store.getState().profilePage;
  return (
    <main className={styles.content}>
      <ProfileInfo user={state.currentUser} />
      <MyPostsContainer store={props.store} />
    </main>
  );
};

export default Profile;
