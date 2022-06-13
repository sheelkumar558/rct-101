import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";

import blogReducer from "./blogs/reducer";

import thunk from "redux-thunk";

const rootReduce = combineReducers({ blogReducer });

const composeEnancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  rootReduce,
  combineReducers(applyMiddleware(thunk))
);
