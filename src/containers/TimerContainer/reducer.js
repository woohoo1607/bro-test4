import {
  GET_TIMER_ERROR,
  GET_TIMER_SUCCESS,
  IS_LOADING_TIMER,
  START_TIMER_ERROR,
  START_TIMER_SUCCESS,
  STOP_TIMER_ERROR,
  STOP_TIMER_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  timeStart: 0,
  taskName: undefined,
  error: "",
};

const timerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TIMER_SUCCESS: {
      return {
        ...state,
        error: "",
        isLoading: false,
        timeStart: payload.timeStart,
        taskName: payload.taskName,
      };
    }
    case START_TIMER_SUCCESS: {
      return {
        ...state,
        error: "",
        isLoading: false,
        timeStart: payload.timeStart,
        taskName: payload.taskName,
      };
    }
    case STOP_TIMER_SUCCESS: {
      return {
        ...state,
        error: "",
        isLoading: false,
        timeStart: 0,
        taskName: undefined,
      };
    }
    case IS_LOADING_TIMER: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case GET_TIMER_ERROR:
    case START_TIMER_ERROR:
    case STOP_TIMER_ERROR: {
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default timerReducer;
