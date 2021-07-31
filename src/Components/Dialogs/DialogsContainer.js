import Dialogs from "./Dialogs";
import AuthRedirect from "../../hoc/AuthRedirect";
import {
  addMessageActionCreator,
  updateNewMessageValueActionCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageValue: (value) => {
      dispatch(updateNewMessageValueActionCreator(value));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DialogsContainer = compose(
  AuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

export default DialogsContainer;
