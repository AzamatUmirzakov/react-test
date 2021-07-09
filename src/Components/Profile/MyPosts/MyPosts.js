import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

function MyPosts({ posts, addPost }) {
  let newPostText = React.createRef();
  let handleClick = (event) => {
    let text = newPostText.current.value;
    newPostText.current.value = "";
    addPost(text);
  };
  let postElements = posts.map((post) => <Post text={post.text} />);
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div className={styles.newPost}>
        <textarea name="" ref={newPostText} cols="30" rows="10"></textarea>
        <button onClick={handleClick}>Add post</button>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
