import React from "react";
import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.item}>
      <img src="assets/profile-avatar.jpg" />
      {props.text}
    </div>
  );
}

export default Post;
