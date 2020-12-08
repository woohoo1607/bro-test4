import { DELETE_TASK, GENERATE_TASKS, GET_TASKS } from "./actionTypes";

export const getTasks = () => {
  return { type: GET_TASKS };
};

export const deleteTask = (data) => {
  return { type: DELETE_TASK, data };
};

export const generateTasks = () => {
  return { type: GENERATE_TASKS };
};
