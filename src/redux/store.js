import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  // subscriber placeholder
  _subscriber(store) {
    console.log("seems like subscribtion didn't work");
  },
  // app state
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
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
    },
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._subscriber(this);
  },

  getState() {
    return this._state;
  },
  subcribe(observer) {
    this._subscriber = observer;
  },
};

export default store;
