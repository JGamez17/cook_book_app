import React, { Component } from "react";
import Navbar from "./components/Navbar/NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cook Book App</h1>
        <Navbar />
      </div>
    );
  }
}

export default App;
