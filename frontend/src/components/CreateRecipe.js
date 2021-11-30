import React, { Component } from "react";
import { createRecipes } from "../actions/myRecipes";
import { connect } from "react-redux";

class CreateRecipe extends Component {
  state = {
    title: "",
    prep: "",
    ingredients: "",
    directions: "",
    category: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnClick = (e) => {
    e.preventDefault();
    console.log("a")
    this.props.createRecipes(this.state);
    console.log("b")
  };

  render() {
    return (
      <div>
        <form>
          <h2>Add Recipe</h2>
          <label>Title</label>
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleOnChange}
          />
          <br />
          <label> Prep time </label>
          <input
            type="text"
            value={this.state.prep}
            name="prep"
            onChange={this.handleOnChange}
          />
          <br />
          <label>ingredients</label>
          <input
            type="text"
            value={this.state.ingredients}
            name="ingredients"
            onChange={this.handleOnChange}
          />
          <br />
          <label>Directions</label>
          <input
            type="text"
            value={this.state.directions}
            name="directions"
            onChange={this.handleOnChange}
          />
          <br />
          <label> Category </label>
          <input
            type="text"
            value={this.state.category}
            name="category"
            onChange={this.handleOnChange}
          />
          <br />
          <button onClick={this.handleOnClick}>Add Recipe</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createRecipes })(CreateRecipe);
