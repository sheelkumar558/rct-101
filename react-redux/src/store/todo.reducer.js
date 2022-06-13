import {
  ADD_TODOS_ERROR,
  ADD_TODOS_LOADING,
  ADD_TODOS_SUCCESS,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODOS_ERROR,
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  UPDATE_TODO,
} from "./actionTypes";

const initalState = {
  addTodo: {
    loading: false,
    error: false,
    data: {},
  },
  getTodos: {
    loading: false,
    error: false,
    data: [],
  },
};

export const todoReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_LOADING: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: true,
        },
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          data: payload,
        },
      };
    }
    case GET_TODOS_ERROR: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: true,
        },
      };
    }

    case ADD_TODOS_LOADING: {
      return {
        ...state,
        addTodo: {
          ...state.addTodo,
          loading: true,
        },
      };
    }
    case ADD_TODOS_SUCCESS: {
      return {
        ...state,
        getTodos: {
          data: [...state.getTodos.data, payload],
        },
        addTodo: {
          ...state.addTodo,
          loading: false,
          data: payload,
        },
      };
    }
    case ADD_TODOS_ERROR: {
      return {
        ...state,
        addTodo: {
          ...state.addTodo,
          loading: false,
          error: true,
        },
      };
    }

    // case ADD_TODO: {
    //   return {
    //     ...state,
    //     todos: [...state.todos, payload],
    //   };
    // }
    case DELETE_TODO: {
      return { ...state };
    }
    case COMPLETE_TODO: {
      return { ...state };
    }
    case UPDATE_TODO: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
