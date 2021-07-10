// render function placeholder
let render = (state) => {
  console.log("seems like subscribtion didn't work");
};

let state = {
  profilePage: {
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
};

const addPost = () => {
  state.profilePage.posts.push({
    text: state.profilePage.newPostValue,
    id: state.profilePage.posts.length + 1,
  });
  render(state);
  changeNewPostValue("");
};

const changeNewPostValue = (value) => {
  state.profilePage.newPostValue = value;
  render(state);
};

const addMessage = () => {
  state.dialogsPage.messages.push({
    id: state.dialogsPage.messages.length + 1,
    message: state.dialogsPage.newMessageValue,
  });
  changeNewMessageValue("");
  render(state);
};

const changeNewMessageValue = (value) => {
  state.dialogsPage.newMessageValue = value;
  render(state);
};

const subscribe = (observer) => {
  render = observer;
};

export default state;
export {
  addPost,
  changeNewPostValue,
  addMessage,
  changeNewMessageValue,
  subscribe,
};
