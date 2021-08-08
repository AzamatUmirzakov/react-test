import * as yup from "yup";

const myPostsValidationSchema = yup.object({
  newPost: yup.string().required("Required"),
});

export { myPostsValidationSchema };
