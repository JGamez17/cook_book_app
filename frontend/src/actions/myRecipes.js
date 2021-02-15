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

export { createRecipes, getRecipes };
