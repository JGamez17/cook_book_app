import React from "react";
import { connect } from "react-redux";

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


