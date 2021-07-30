import React from "react";
import { Redirect, Route } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import styles from "./Dialogs.module.css";
const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ));
  let messageElements = props.state.messages.map((message) => (
    <Message id={message.id} message={message.message} />
  ));

  let handleClick = () => {
    props.addMessage();
  };
  let handleChange = (event) => {
    props.updateNewMessageValue(event.target.value);
  };

  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogElements}</div>
      <Route
        path="/dialogs/1"
        render={() => {
          return (
            <div className={styles.messages}>
              {messageElements}
              <div className={styles.newMessage}>
                <textarea
                  name=""
                  cols="30"
                  rows="10"
                  value={props.state.newMessageValue}
                  onChange={handleChange}
                  placeholder="New message"
                ></textarea>
                <button onClick={handleClick}>send</button>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Dialogs;
