const recipeReducer = (state = [], action) => {

  switch (action.type) {
    case "GET_RECIPES":
      return [...action.payload];
    case "CREATE_RECIPES":
      debugger
      return [...state, action.payload];

    default:
      return state;
  }
};

export default recipeReducer;
