import axios from "axios";
import {
  ADD_TODOS_ERROR,
  ADD_TODOS_LOADING,
  ADD_TODOS_SUCCESS,
  COMPLETE_TODO,
  COUNT_DECREMENT,
  COUNT_INCREMENT,
  DELETE_TODO,
  GET_TODOS_ERROR,
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  UPDATE_TODO,
} from "./actionTypes";

//counter app
export const counterInc = () => ({ type: COUNT_INCREMENT });
export const counterDec = () => ({ type: COUNT_DECREMENT });

//todo app
export const getTodos = (dispatch) => {
  dispatch({ type: GET_TODOS_LOADING });
  return axios.get("http://localhost:8080/todos")
  .then((r) => {
    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: r.data,
    }).catch(() => {
      dispatch({ type: GET_TODOS_ERROR });
    });
  });
};
export const addTodo = (dispatch, payload) => {
  dispatch({ type: ADD_TODOS_LOADING });
  axios
    .post(" http://localhost:8080/todos", payload)
    .then((r) => {
      dispatch({ type: ADD_TODOS_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: ADD_TODOS_ERROR });
    });
};
export const completeTodo = (id) => ({ type: COMPLETE_TODO, payload: id });
export const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
