import React from "react";

class favoriteButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.favoriteRecipe} className="favorites">
          Favorites {this.props.recipeObj}
        </button>
      </div>
    );
  }
}

export default Button;
