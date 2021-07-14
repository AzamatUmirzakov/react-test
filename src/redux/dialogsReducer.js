const ADD_MESSAGE = "add-message";
const UPDATE_NEW_MESSAGE = "update-new-message";
const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

const initialState = {
  dialogs: [
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
  ],
  messages: [
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
  ],
  newMessageValue: "",
};
const updateNewMessageValueActionCreator = (value) => ({
  type: UPDATE_NEW_MESSAGE,
  value: value,
});

const dialogsReducer = (state = initialState, action) => {
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
