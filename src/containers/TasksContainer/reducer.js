import { GET_TASKS_SUCCESS } from "./actionTypes";

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
    default:
      return state;
  }
};

export default tasksReducer;
