import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

function MyPosts(props) {
  let handleClick = (event) => {
    props.addPost();
  };
  let handleChange = (event) => {
    props.updateNewPostValue(event.target.value);
  };
  let postElements = props.posts.map((post) => <Post text={post.text} />);
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div className={styles.newPost}>
        <textarea
          name=""
          cols="30"
          rows="10"
          value={props.newPostValue}
          onChange={handleChange}
          placeholder="What's on your mind?"
        ></textarea>
        <button onClick={handleClick}>Add post</button>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
