import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <main className={styles.content}>
      <ProfileInfo
        user={props.user}
        status={props.status}
        isOwner={props.isOwner}
        updateStatus={props.updateStatus}
        updatePhoto={props.updatePhoto}
        updateProfile={props.updateProfile}
      />
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
