import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">
        <Post text="bruh" />
        <Post text="wow" />
        <Post text="ok" />
      </div>
    </div>
  );
}

export default MyPosts;
