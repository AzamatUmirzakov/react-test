import React from "react";
import { useFormik } from "formik";
import { myPostsValidationSchema } from "../../../utils/validation/validation";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

function MyPosts(props) {
  // let handleClick = (event) => {
  //   props.addPost();
  // };
  // let handleChange = (event) => {
  //   props.updateNewPostValue(event.target.value);
  // };
  const formik = useFormik({
    initialValues: {
      newPost: "",
    },
    onSubmit(values) {
      props.addPost(values.newPost);
      formik.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: myPostsValidationSchema,
  });
  let postElements = props.posts.map((post) => (
    <Post text={post.text} key={post.id} />
  ));
  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <form className={styles.newPost} onSubmit={formik.handleSubmit}>
        <textarea
          name="newPost"
          cols="30"
          rows="10"
          value={formik.values.newPost}
          onChange={formik.handleChange}
          placeholder="What's on your mind?"
          className={formik.errors.newPost ? styles.newPostError : null}
        />
        {formik.errors.newPost ? formik.errors.newPost : null}
        <button type={"submit"}>Add post</button>
      </form>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
