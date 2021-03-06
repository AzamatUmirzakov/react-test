import React from "react";
import styles from "./Post.module.css";

function Post(props) {
  return (
    <div className={styles.item}>
      <img src="assets/profile-avatar.jpg" alt="avatar" />
      {props.text}
    </div>
  );
}

export default Post;
