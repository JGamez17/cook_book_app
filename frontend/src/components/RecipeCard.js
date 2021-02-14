import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class RecipeCard extends React.Component {
  handleonClick = (event) => {
    fetch("http://localhost:3001/recipes/${event.id}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: event.title,
        prep: event.prep,
        thumbnail: event.thumbnail,
      }),
    }).then((res) => res.json());
  };

  render() {
    let { title, prep, thumbnail } = this.props.recipeObj;

    return (
      <div className="RecipeCard">
        <div>{title}</div>
        <div>{prep}</div>
        <br></br>
        <img src={thumbnail} />
        <br></br>
        <button onClick={() => this.handleOnClick(this.props.recipeObj)}>
          Add to favorites
        </button>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(RecipeCard);
// exporting the combination of a component that is connected to the store
