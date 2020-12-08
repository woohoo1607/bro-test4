import { GET_TASKS_SUCCESS, IS_LOADING } from "./actionTypes";

const initialState = {
  tasks: [],
  error: "",
  isLoading: false,
};

const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TASKS_SUCCESS: {
      return {
        ...state,
        error: "",
        isLoading: false,
        tasks: [...payload],
      };
    }
    case IS_LOADING: {
      return {
        ...state,
        isLoading: payload,
        error: "",
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
