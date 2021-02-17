import React from "react";

class favoriteButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.favoriteButton} className="favorites">
          Favorites {this.props.recipeObj}
        </button>
      </div>
    );
  }
}

export default favoriteButton;
