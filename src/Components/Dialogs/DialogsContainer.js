import Dialogs from "./Dialogs";
import AuthRedirect from "../../hoc/AuthRedirect";
import { addMessageActionCreator } from "../../store/dialogs-reducer";
import { connect } from "react-redux";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

const DialogsContainer = compose(
  AuthRedirect,
  connect(mapStateToProps, {
    addMessage: addMessageActionCreator,
  })
)(Dialogs);

export default DialogsContainer;
