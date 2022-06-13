// TODO: use this store variable to create a store.
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
//import { feedReducer } from "./feed/feed.reducer";
import { authReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // feed: feedReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
