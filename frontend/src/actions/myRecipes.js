// Aysnc Action

function getRecipes() {
  return (dispatch) => {
    console.log("c");
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((recipes) => {
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

// function favoriteButton(recipes) {
//   const updatedRecipe = Object.assign(...recipes, {
//     favorites: recipes.favorites + 1,
//   });
//   return (dispatch) => {
//     fetch("http://localhost:3000/recipes/${recipes.id)", {
//       method: "PUT",
//       headers: {
//         "Content-type": "application/json",
//         accept: "application/json",
//       },
//       body: JSON.stringify({ recipes: updatedRecipe }),
//     })
//       .then((res) => res.json())
//       .then((recipe) => {
//         console.log(favoriteButton);
//         dispatch({ type: "FAVORITE_BUTTON", payload: recipe });
//       });
//   };
// }

export { createRecipes, getRecipes };
