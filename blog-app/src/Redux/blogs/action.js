import * as types from "./actionType";

import axios from "axios";

const fetchBlogPostRequest = (payload) => {
  return {
    type: types.FATCH_BLOG_POSTS_REQUEST,
    payload,
  };
};
const fetchBlogPostSuccess = (payload) => {
  return {
    type: types.FATCH_BLOG_POSTS_SUCCESS,
    payload,
  };
};
const fetchBlogPostFailure = (payload) => {
  return {
    type: types.FATCH_BLOG_POSTS_FAILURE,
    payload,
  };
};

const fetchBlogPost = (dispatch) => {
  dispatch(fetchBlogPostRequest());
  axios
    .get("/blog")
    .then((r) => dispatch(fetchBlogPostSuccess(r.data)))
    .catch((e) => dispatch(fetchBlogPostFailure(e.data)));
};

export  {fetchBlogPost};