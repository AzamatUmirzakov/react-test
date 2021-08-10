const ADD_MESSAGE = "add-message";
// const UPDATE_NEW_MESSAGE = "update-new-message";

const addMessageActionCreator = (text) => ({
  type: ADD_MESSAGE,
  text,
});

// const updateNewMessageValueActionCreator = (value) => ({
//   type: UPDATE_NEW_MESSAGE,
//   value: value,
// });

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
  // newMessageValue: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages.length + 1,
        message: action.text,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    // case UPDATE_NEW_MESSAGE:
    //   return {
    //     ...state,
    //     newMessageValue: action.value,
    //   };
    default:
      return state;
  }
};

export default dialogsReducer;
export { addMessageActionCreator };
