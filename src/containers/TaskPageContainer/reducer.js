import { GET_TASK_SUCCESS, IS_LOADING } from "./actionTypes";

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
    case IS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
