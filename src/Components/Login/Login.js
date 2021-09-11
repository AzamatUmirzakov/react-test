import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required("Required"),
  password: yup.string().required("Required"),
  remember: yup.boolean(),
});

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm {...props} />
    </div>
  );
};

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
      captcha: "",
    },
    onSubmit: async (values) => {
      await props
        .login(values.email, values.password, values.remember, values.captcha)
        .catch((err) => {
          formik.setFieldError("summary", err.message);
        });
      formik.setSubmitting(false);
    },
    // validation
    validationSchema: schema,
  });
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      {props.captchaURL ? <img src={props.captchaURL} alt={""} /> : null}
      {props.captchaURL ? (
        <input
          type={"text"}
          onChange={formik.handleChange}
          name={"captcha"}
          value={formik.values.captcha}
        />
      ) : null}
      <input
        type={"email"}
        placeholder="email"
        name="email"
        {...formik.getFieldProps("email")}
        className={formik.errors.email ? styles.error : ""}
      />
      {formik.touched.email ? (
        formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null
      ) : null}
      <input
        type="password"
        placeholder="password"
        name="password"
        className={formik.errors.password ? styles.error : ""}
        {...formik.getFieldProps("password")}
      />
      {formik.touched.password ? (
        formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null
      ) : null}
      {formik.errors.summary ? <p>{formik.errors.summary} </p> : null}
      <input
        type="checkbox"
        name="remember"
        {...formik.getFieldProps("remember")}
      />
      <label htmlFor="remember">Remember me</label>
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
