import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import "./style.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
