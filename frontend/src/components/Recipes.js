import React from "react";
import RecipeCard from "../components/RecipeCard";
import { connect } from "react-redux";
import { getRecipes } from "../actions/myRecipes";

class Recipes extends React.Component {
  componentDidMount() {
    this.props.getRecipes();
  }

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
  };
};

export default connect(mapStateToProps, { getRecipes })(Recipes);

//renders recipe card
