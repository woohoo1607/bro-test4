import { GET_TASK_ERROR, GET_TASK_SUCCESS, IS_LOADING } from "./actionTypes";

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
        task: { ...payload },
        isLoading: false,
      };
    }
    case GET_TASK_ERROR: {
      return {
        ...state,
        error: payload.error,
        isLoading: false,
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

export default taskReducer;
