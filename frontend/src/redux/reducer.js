const recipeReducer = (state = [], action) => {

  switch (action.type) {
    case "GET_RECIPES":
      return [...action.payload];
    case "CREATE_RECIPES":
      return [...state, action.payload];

    // case "FAVORITE_BUTTON":
    //   return state.map((recipe) => {
    //     if (recipe.id === action.recipe.id) {
    //       return [...state, action.payload];
    //     } else {
    //       return recipe;
    //     }
    //   });

    default:
      return state;
  }
};

export default recipeReducer;
