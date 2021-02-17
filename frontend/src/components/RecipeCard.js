import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { favoriteButton } from "../actions/myRecipes";

class RecipeCard extends React.Component {
  handleOnClick = (e) => {
    this.props.favoriteButton(this.state);
  };

  render() {
    let { title, prep, ingredients, thumbnail } = this.props.recipeObj;
    return (
      <div className="RecipeCard">
        <div>{title}</div>
        <div>{prep}</div>
        <div>{ingredients}</div>
        <br></br>
        <img src={thumbnail} />
        <br></br>
        <button onClick={this.handleOnClick}>Add to Favorites</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
};

export default connect(mapStateToProps, { favoriteButton })(RecipeCard);
// exporting the combination of a component that is connected to the store
