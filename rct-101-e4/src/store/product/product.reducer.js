import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

// Note: Do not update/change the initial state
const productInitalState = {
  getFeeds: {
    loading: false,
    error: false,
  },
  data: [],
};

export const productReducer = (
  state = productInitalState,
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        getFeeds: {
          ...state.getFeeds,
          loading: true,
          error: false,
        },
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        getFeeds: {
          ...state.getFeeds,
          loading: false,
          error: false,
        },
        data: payload,
      };
    }
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        getFeeds: {
          ...state.getFeeds,
          loading: false,
          error: true,
        },
      };
    default: {
      return state;
    }
  }
};
