import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <main className={styles.content}>
      <ProfileInfo user={props.profilePage.currentUser} />
      <MyPosts
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostValue={props.profilePage.newPostValue}
      />
    </main>
  );
};

export default Profile;
