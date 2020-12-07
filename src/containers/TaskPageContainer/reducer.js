import { GET_TASK_SUCCESS } from "./actionTypes";

const initialState = {
  task: {},
  error: "",
  isLoading: false,
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TASK_SUCCESS: {
      return {
        ...state,
        error: "",
        isLoading: false,
        task: { ...payload },
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
