import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class RecipeCard extends React.Component {
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
        <button onClick={() => this.OnClick(this.props.recipeObj)}>
          Add to favorites
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
};

export default connect(mapStateToProps)(RecipeCard);
// exporting the combination of a component that is connected to the store
