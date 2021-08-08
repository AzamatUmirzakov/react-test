import Dialogs from "./Dialogs";
import AuthRedirect from "../../hoc/AuthRedirect";
import { addMessageActionCreator } from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (text) => {
      dispatch(addMessageActionCreator(text));
    },
  };
};

const DialogsContainer = compose(
  AuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

export default DialogsContainer;
