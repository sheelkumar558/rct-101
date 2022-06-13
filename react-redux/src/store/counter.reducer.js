import { COUNT_DECREMENT, COUNT_INCREMENT } from "./actionTypes";

export const counterReducer = (state = { count: 0 }, { type }) => {
  switch (type) {
    case COUNT_INCREMENT: {
      state.count++;
      return { ...state };
    }
    case COUNT_DECREMENT: {
      state.count--;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
