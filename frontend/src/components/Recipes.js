import React from "react";
import RecipeCard from "../components/RecipeCard";
import { connect } from "react-redux";

class Recipes extends React.Component {
  state = {
    recipeSearch: ""
  };

  recipeSearch = (e) => {
    this.setState({ recipeSearch: e.target.value })
  }

  filterSearch = () => {
    return this.state.recipeSearch.filter(recipe => recipe.toLowerCase().includes(this.state.recipeSearch.toLowerCase()))
  }

  render() {
    return (
      <div className="recipes">
        <label> Search By Recipe </label>
        <input type='text' value={this.state.recipeSearch} onChange={this.recipeSearch} placeholder='Searching...' />
        {this.props.recipes.map((recipe) => {
          // instead of using this.props.recipe use filter function that will filter recipes and then map
          // google search - how to use filter js (google small steps)
          // how to use onChange with input field (BE SPECIFIC)
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

export default connect(mapStateToProps)(Recipes);

//renders recipe card
