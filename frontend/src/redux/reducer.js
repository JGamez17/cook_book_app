const recipeReducer = (state = [], action) => {
  // debugger;
  switch (action.type) {
    case "GET_RECIPES":
      return [...action.payload];
    case "CREATE_RECIPES":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default recipeReducer;
