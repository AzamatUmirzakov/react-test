import React from "react";
import { Route } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import styles from "./Dialogs.module.css";
import { useFormik } from "formik";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((dialog) => (
    <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  let messageElements = props.state.messages.map((message) => (
    <Message key={message.id} id={message.id} message={message.message} />
  ));

  const formik = useFormik({
    initialValues: {
      newMessage: "",
    },
    onSubmit(values) {
      props.addMessage(values.newMessage);
      formik.resetForm();
    },
  });

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogElements}</div>
      <Route
        path="/dialogs/1"
        render={() => {
          return (
            <div className={styles.messages}>
              {messageElements}
              <form
                className={styles.newMessage}
                onSubmit={formik.handleSubmit}
              >
                <textarea
                  name="newMessage"
                  cols="30"
                  rows="10"
                  value={formik.values.newMessage}
                  onChange={formik.handleChange}
                  placeholder="New message"
                />
                <button type={"submit"}>send</button>
              </form>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Dialogs;
