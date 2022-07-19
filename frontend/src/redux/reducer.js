const recipeReducer = (state = [], action) => {

  switch (action.type) {
    case "GET_RECIPES":
      // debugger
      return [...action.payload];
    case "CREATE_RECIPES":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default recipeReducer;
