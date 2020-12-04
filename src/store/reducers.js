import { combineReducers } from "redux";
import timerReducer from "../containers/TimerContainer/reducer";
import tasksReducer from "../containers/TasksContainer/reducer";

export default combineReducers({
  timer: timerReducer,
  tasks: tasksReducer,
});
