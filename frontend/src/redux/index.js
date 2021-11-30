import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import recipeReducer from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
