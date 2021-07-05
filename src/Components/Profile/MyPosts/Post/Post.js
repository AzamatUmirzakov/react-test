import React from "react";
import classes from "./Post.module.css";

function Post() {
  return (
    <div className={classes.item}>
      <img src="assets/profile-avatar.jpg" />
      Post 1
    </div>
  );
}

export default Post;
