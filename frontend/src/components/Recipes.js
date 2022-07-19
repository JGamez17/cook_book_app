import React from "react";
import RecipeCard from "../components/RecipeCard";
import { connect } from "react-redux";

class Recipes extends React.Component {
  render() {
    return (
      <div className="recipes">
        {this.props.recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipeObj={recipe} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,

  }
}

export default connect(mapStateToProps)(Recipes);