import React from "react";
import { connect } from "react-redux";


class RecipeCard extends React.Component {

  state = { favorite: 0 };

  handleOnClick = () => {
    this.setState({
      favorite: this.state.favorite + 1
    });
  };

  render() {
    let { title, prep, ingredients, thumbnail } = this.props.recipeObj;
    return (
      <div className="RecipeCard">
        <div>{title}</div>
        <div>{prep}</div>
        <div>{ingredients}</div>
        <br></br>
        <img src={thumbnail} alt="images" />
        <br></br>

        {this.state.favorite}
        <button onClick={this.handleOnClick}>Add to Favorites</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps)(RecipeCard);
// exporting the combination of a component that is connected to the store
