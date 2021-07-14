import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageValueActionCreator,
} from "../../redux/dialogsReducer";
const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  let updateNewMessageValue = (value) => {
    props.store.dispatch(updateNewMessageValueActionCreator(value));
  };
  return (
    <Dialogs
      state={state}
      addMessage={addMessage}
      updateNewMessageValue={updateNewMessageValue}
    />
  );
};

export default DialogsContainer;
