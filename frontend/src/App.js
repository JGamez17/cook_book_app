import React, { Component } from "react";
import Navbar from "./components/Navbar/NavBar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import About from "./components/About";
import CreateRecipe from "./components/CreateRecipe";
import { getRecipes } from "./actions/myRecipes";
import { connect } from "react-redux";


class App extends React.Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/recipes" component={Recipes}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/add_recipe" component={CreateRecipe}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, { getRecipes })(App);

// connect is a function that connects a react component to the redux store 
// what is the first null in this function ? why does reaact think its a state w/out it ?