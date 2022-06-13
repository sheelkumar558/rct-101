import * as types from "./actionType";

const initialState ={
    blogs:[],
    loading : false,
    error:'',
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FATCH_BLOG_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FATCH_BLOG_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs:payload,
        error: "",
      };
    case types.FATCH_BLOG_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer