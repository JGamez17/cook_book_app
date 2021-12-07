import React from "react";
import RecipeCard from "../components/RecipeCard";
import { connect } from "react-redux";

class Recipes extends React.Component {
  State = {
    recipe: ''
  };

  handleOnChange = (e) => {
    // console.log('working input')
    this.setState({
      recipe: e.target.value
    })
  }

  filterRecipes = () => {
    return this.props.recipes.filter(function (recipeObj) {
      if (recipeObj.name === recipeSearchFor) {
        return true;
      }
      return false;
    });

  }
  render() {
    return (
      <div className="recipes">
        <form>
          <label> Search By Title </label>
          <input type='text'
            onChange={this.handleOnChange} placeholder='Searching...' />

          {this.props.recipes.filter(recipeObj => recipeObj.title.includes(this.state.recipe)).map(filteredRecipeObj => (
            <RecipeCard Key={filteredREcipeObjs.id} recipeObj={filteredRecipeObj} />
            //  return <RecipeCard key={recipe.id} recipeObj={recipe} />;
          ))}

          {/* 
      // instead of using this.props.recipe use filter function that will filter recipes and then map
      // google search - how to use filter js (google small steps)
      // how to use onChange with input field (BE SPECIFIC) */}
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
