import React from "react";
import { Route } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import styles from "./Dialogs.module.css";
const Dialogs = (props) => {
  let dialogElements = props.store
    .getState()
    .dialogsPage.dialogs.map((dialog) => (
      <Dialog id={dialog.id} name={dialog.name} />
    ));
  let messageElements = props.store
    .getState()
    .dialogsPage.messages.map((message) => (
      <Message id={message.id} message={message.message} />
    ));

  let newMessage = React.createRef();
  let handleClick = (event) => {
    props.store.addMessage();
  };
  let handleChange = (event) => {
    props.store.changeNewMessageValue(event.target.value);
  };
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
                  ref={newMessage}
                  cols="30"
                  rows="10"
                  value={props.store.getState().dialogsPage.newMessageValue}
                  onChange={handleChange}
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
