import { all } from "redux-saga/effects";
import timerSaga from "../containers/TimerContainer/sagas";
import tasksSaga from "../containers/TasksContainer/sagas";
import taskSaga from "../containers/TaskPageContainer/sagas";
import modalSaga from "../containers/ModalContainer/sagas";

export function* rootSaga() {
  yield all([timerSaga(), tasksSaga(), taskSaga(), modalSaga()]);
}
