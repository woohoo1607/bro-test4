import {
  GET_TIMER,
  IS_LOADING_TIMER,
  SAVE_TASK_NAME,
  START_TIMER,
  STOP_TIMER,
} from "./actionTypes";

export const start = (payload) => {
  return {
    type: START_TIMER,
    payload,
  };
};

export const setIsLoading = (payload) => {
  return {
    type: IS_LOADING_TIMER,
    payload,
  };
};

export const getTimer = () => {
  return {
    type: GET_TIMER,
  };
};

export const stop = (payload) => {
  return {
    type: STOP_TIMER,
    payload,
  };
};

export const saveTaskName = (payload) => {
  return {
    type: SAVE_TASK_NAME,
    payload,
  };
};
