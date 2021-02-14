// Aysnc Action

function getRecipes() {
  return (dispatch) => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((recipes) => {
        dispatch(setRecipes(recipes));
      });
  };
}

function setRecipes(recipes) {
  return { type: "GET_RECIPES", payload: recipes };
}

export { setRecipes, getRecipes };
