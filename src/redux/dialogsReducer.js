const ADD_MESSAGE = "add-message";
const UPDATE_NEW_MESSAGE = "update-new-message";
const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

const updateNewMessageValueActionCreator = (value) => ({
  type: UPDATE_NEW_MESSAGE,
  value: value,
});

const dialogsReducer = (state, action) => {
  let newState = {};
  newState = Object.assign(newState, state);
  switch (action.type) {
    case ADD_MESSAGE:
      newState.messages.push({
        id: newState.messages.length + 1,
        message: newState.newMessageValue,
      });

      newState.newMessageValue = "";
      break;
    case UPDATE_NEW_MESSAGE:
      newState.newMessageValue = action.value;
      break;
    default:
      return newState;
  }
  return newState;
};

export default dialogsReducer;
export { addMessageActionCreator, updateNewMessageValueActionCreator };
