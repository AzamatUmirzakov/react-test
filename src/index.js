import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img alt="" src="assets/atomic-icon.svg" />
      </header>
      <nav className="nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <main className="content">
        <div>
          <img src="assets/space.jpg" />
        </div>
        <div>
          <img src="assets/profile-avatar.jpg" alt="" />
        </div>
        <div>
          My posts
          <div>new post</div>
        </div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
        </div>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
