import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

function MyPosts() {
  let posts = [
    {
      id: 1,
      text: "bruh",
    },
    {
      id: 2,
      text: "wow",
    },
    {
      id: 3,
      text: "ok",
    },
  ];
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div className={classes.newPost}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts.map((post) => (
          <Post text={post.text} />
        ))}
      </div>
    </div>
  );
}

export default MyPosts;
