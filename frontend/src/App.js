import React, { Component } from "react";
import Navbar from "./components/Navbar/NavBar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/recipes" component={Recipes}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
