import React from "react";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import classes from "./Dialogs.module.css";
const Dialogs = (props) => {
  let dialogs = [
    {
      id: 1,
      name: "Mike Hawk",
    },
    {
      id: 2,
      name: "Mel Lester",
    },
    {
      id: 3,
      name: "Jack Kenoff",
    },
    {
      id: 4,
      name: "Hue Jass",
    },
    {
      id: 5,
      name: "Mike Hunt",
    },
    {
      id: 6,
      name: "Jenny Taila",
    },
    {
      id: 7,
      name: "Hue G. Rection",
    },
  ];
  let messages = [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "How yo mom doin?",
    },
    {
      id: 3,
      message: "idk tbh i think u r kul",
    },
    {
      id: 4,
      message: "i am gae",
    },
    {
      id: 5,
      message: "ooga booga",
    },
  ];

  let dialogElements = dialogs.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ));
  let messageElements = messages.map((message) => (
    <Message id={message.id} message={message.message} />
  ));
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div className={classes.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
