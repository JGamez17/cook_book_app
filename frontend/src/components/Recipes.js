import React from "react";
import RecipeCard from "../components/RecipeCard";
import { connect } from "react-redux";

class Recipes extends React.Component {
  // this.state.recipe
  state = {
    recipe: ''
  };


  handleOnChange = (e) => {
    this.setState({
      recipe: e.target.value
    })
  }

  // filterRecipes = () => {
  //   const recipeMatches = this.props.recipes.filter(function (recipeObj) {

  //     if (recipeObj.title === this.state.recipe) {
  //       return true;
  //     }

  //     return false;
  //   });
  // }

  render() {
    console.log(this.state)
    return (
      <div className="recipes">
        <form>
          <label> Search By Title </label>
          <input type='text'
            onChange={this.handleOnChange} placeholder='Searching...' />
          {/* {this.filterRecipes()} */}
          {this.props.recipes.filter(recipeObj => recipeObj.title.toLowerCase().includes(this.state.recipe.toLowerCase())).map(filteredRecipeObj => (
            <RecipeCard Key={filteredRecipeObj.id} recipeObj={filteredRecipeObj} />
          ))}

        </form>
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
