// Aysnc Action

function getRecipes() {
  return (dispatch) => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((recipes) => {
        // debugger;
        dispatch({ type: "GET_RECIPES", payload: recipes });
      });
  };
}

function createRecipes(recipes) {
  return (dispatch) => {
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(recipes),
    })
      .then((res) => res.json())
      .then((recipe) => {
        console.log(recipe);
        dispatch({ type: "CREATE_RECIPES", payload: recipe });
      });
  };
}

function favoriteRecipes(recipe) {
  const updatedRecipe = Object.assign(...recipe, {
    favorites: recipe.favorites + 1,
  });
  return (dispatch) => {
    fetch("http://localhost:3000/recipes/${recipes.id)", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ recipes: updatedRecipe }),
    })
      .then((res) => res.json())
      .then((recipe) => {
        console.log(favoriteRecipes);
        dispatch({ type: "FAVORITE_RECIPES", payload: recipe });
      });
  };
}

export { createRecipes, getRecipes };
