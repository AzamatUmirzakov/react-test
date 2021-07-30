import Dialogs from "./Dialogs";
import AuthRedirect from "../../hoc/AuthRedirect";
import {
  addMessageActionCreator,
  updateNewMessageValueActionCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default AuthRedirect(DialogsContainer);
