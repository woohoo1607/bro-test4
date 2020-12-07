import { GET_TASK } from "./actionTypes";

export const getTask = (id) => {
  return { type: GET_TASK, id };
};
