import { all } from "redux-saga/effects";
import timerSaga from "../containers/TimerContainer/sagas";
import tasksSaga from "../containers/TasksContainer/sagas";

export function* rootSaga() {
  yield all([timerSaga(), tasksSaga()]);
}
