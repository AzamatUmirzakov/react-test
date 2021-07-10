import React from "react";
import { NavLink } from "react-router-dom";
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

  let newMessage = React.createRef();
  let handleClick = (event) => {
    props.addMessage();
  };
  let handleChange = (event) => {
    props.changeNewMessageValue(event.target.value);
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogElements}</div>
      <div className={styles.messages}>
        {messageElements}
        <div className={styles.newMessage}>
          <textarea
            name=""
            ref={newMessage}
            cols="30"
            rows="10"
            value={props.state.newMessageValue}
            onChange={handleChange}
          ></textarea>
          <button onClick={handleClick}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
