// import cloneDeep from "./cloneDeep";
const ADD_POST = "add-post";
const UPDATE_NEW_POST = "update-new-post";
const addPostActionCreator = () => ({
  type: ADD_POST,
});

const updateNewPostValueActionCreator = (value) => ({
  type: UPDATE_NEW_POST,
  value: value,
});
const initialState = {
  currentUser: {
    id: 1,
    name: "Azamat Umirzakov",
    username: "aumirzakov",
    email: "azamat.umirzakoff@gmail.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "+77056631657",
    website: "https://aumirzakov.vercel.app/",
  },
  posts: [
    {
      id: 1,
      text: "bruh",
    },
    {
      id: 2,
      text: "wow",
    },
    {
      id: 3,
      text: "ok",
    },
  ],
  newPostValue: "",
};

const profileReducer = (state = initialState, action) => {
  // let newState;
  switch (action.type) {
    case ADD_POST:
      // newState = cloneDeep(state);
      // newState.posts.push({
      //   text: newState.newPostValue,
      //   id: newState.posts.length + 1,
      // });
      // newState.newPostValue = "";
      // break;
      return {
        ...state,
        posts: [
          ...state.posts,
          { text: state.newPostValue, id: state.posts.length + 1 },
        ],
        newPostValue: "",
      };
    case UPDATE_NEW_POST:
      // newState = cloneDeep(state);
      // newState.newPostValue = action.value;
      return {
        ...state,
        newPostValue: action.value,
      };
    // break;
    default:
      return state;
  }
};

export default profileReducer;
export { addPostActionCreator, updateNewPostValueActionCreator };
