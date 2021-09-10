import React from "react";
import styles from "./ProfileForm.module.css";
import Contacts from "../Contacts/Contacts";
import { useFormik } from "formik";

const ProfileForm = ({ profile, setEditMode, updateProfile }) => {
  const handleSubmit = async (values) => {
    const response = await updateProfile(values);
    console.log(values, response);

    debugger;
    if (response.resultCode !== 0) {
      formik.setStatus({
        error: response.messages[0],
      });
    } else {
      setEditMode(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      lookingForAJob: profile.lookingForAJob,
      lookingForAJobDescription: profile.lookingForAJobDescription,
      aboutMe: profile.aboutMe,
      fullName: profile.fullName,
      contacts: {
        ...profile.contacts,
      },
    },
    initialStatus: {
      error: null,
    },
    onSubmit: handleSubmit,
  });
  return (
    <form className={styles.profileForm} onSubmit={formik.handleSubmit}>
      {formik.status
        ? formik.status.error
          ? formik.status.error
          : null
        : null}
      <button type={"submit"}>Save</button>
      <label htmlFor="fullName">full name: </label>
      <input
        type="text"
        name="fullName"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
      <label htmlFor={"lookingForAJob"}>Looking for a job: </label>
      <input
        name="lookingForAJob"
        checked={formik.values.lookingForAJob}
        type={"checkbox"}
        onChange={formik.handleChange}
      />
      <label htmlFor={"description"}>Description: </label>
      {
        <textarea
          name={"lookingForAJobDescription"}
          value={formik.values.description}
          onChange={formik.handleChange}
          placeholder={"Description for potential employers"}
        />
      }
      <textarea
        name="aboutMe"
        id=""
        cols="30"
        rows="10"
        onChange={formik.handleChange}
        value={formik.values.aboutMe}
        placeholder={"Tell the world about yourself"}
      >
        {profile.aboutMe}
      </textarea>
      {Object.keys(profile.contacts).map((contact) => (
        <>
          <label htmlFor={contact}>{contact}</label>
          <input
            name={`contacts.${contact}`}
            value={formik.values[contact]}
            onChange={formik.handleChange}
          />
        </>
      ))}
    </form>
  );
};

export default ProfileForm;
