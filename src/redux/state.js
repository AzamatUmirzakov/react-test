let store = {
  // render function placeholder
  render(store) {
    console.log("seems like subscribtion didn't work");
  },
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
      newPostValue: "What's on your mind?",
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
      newMessageValue: "New message",
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Mike Hawk",
          src: "https://i1.sndcdn.com/avatars-000616130580-ag5esg-t500x500.jpg",
        },
        {
          id: 2,
          name: "Mel Lester",
          src: "https://i1.sndcdn.com/avatars-000616130580-ag5esg-t500x500.jpg",
        },
        {
          id: 3,
          name: "Dixie Normous",
          src: "https://i1.sndcdn.com/avatars-000616130580-ag5esg-t500x500.jpg",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  addPost() {
    this._state.profilePage.posts.push({
      text: this._state.profilePage.newPostValue,
      id: this._state.profilePage.posts.length + 1,
    });
    this.render(this);
    this.changeNewPostValue("");
  },
  changeNewPostValue(value) {
    this._state.profilePage.newPostValue = value;
    this.render(this);
  },
  addMessage() {
    this._state.dialogsPage.messages.push({
      id: this._state.dialogsPage.messages.length + 1,
      message: this._state.dialogsPage.newMessageValue,
    });
    this.changeNewMessageValue("");
    this.render(this);
  },
  changeNewMessageValue(value) {
    this._state.dialogsPage.newMessageValue = value;
    this.render(this);
  },
};

const subscribe = (observer) => {
  store.render = observer;
};

export default store;
export { subscribe };
