import { DELETE_TASK, GET_TASKS } from "./actionTypes";

export const getTasks = () => {
  return { type: GET_TASKS };
};

export const deleteTask = (data) => {
  return { type: DELETE_TASK, data };
};
