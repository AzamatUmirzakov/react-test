import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

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
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div className={styles.newPost}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Post text={post.text} />
        ))}
      </div>
    </div>
  );
}

export default MyPosts;
