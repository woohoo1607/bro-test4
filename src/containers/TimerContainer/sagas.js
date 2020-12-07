import { put, takeEvery, all } from "redux-saga/effects";
import {
  GET_TIMER,
  GET_TIMER_ERROR,
  GET_TIMER_SUCCESS,
  START_TIMER,
  START_TIMER_ERROR,
  START_TIMER_SUCCESS,
  STOP_TIMER,
  STOP_TIMER_ERROR,
  STOP_TIMER_SUCCESS,
} from "./actionTypes";
import { getData, removeData, setData } from "../../helpers/localStorageHelper";
import { setIsLoading } from "./actions";
import { GET_TASKS } from "../TasksContainer/actionTypes";

export function* fetchTimerSaga() {
  try {
    const timeStart = getData("timeStart") || 0;
    const taskName = getData("taskName");
    yield put({ type: GET_TIMER_SUCCESS, payload: { timeStart, taskName } });
  } catch (error) {
    yield put({ type: GET_TIMER_ERROR, error });
  }
}

export function* watchFetchTimerSaga() {
  yield takeEvery(GET_TIMER, fetchTimerSaga);
}

export function* startTimerSaga({ payload }) {
  try {
    yield put(setIsLoading(true));
    setData("timeStart", payload.timeStart);
    setData("taskName", payload.taskName);
    yield put({ type: START_TIMER_SUCCESS, payload });
  } catch (error) {
    yield put({ type: START_TIMER_ERROR, error });
  }
}

export function* watchStartTimerSaga() {
  yield takeEvery(START_TIMER, startTimerSaga);
}

export function* stopTimerSaga({ payload }) {
  try {
    removeData("timeStart");
    removeData("taskName");
    const data = JSON.parse(getData("timersData")) || [];
    setData("timersData", JSON.stringify([...data, { ...payload }]));
    yield put({ type: STOP_TIMER_SUCCESS });
    yield put({ type: GET_TIMER });
    yield put({ type: GET_TASKS });
  } catch (error) {
    yield put({ type: STOP_TIMER_ERROR, error });
  }
}

export function* watchStopTimerSaga() {
  yield takeEvery(STOP_TIMER, stopTimerSaga);
}

export default function* timerSaga() {
  yield all([
    watchFetchTimerSaga(),
    watchStartTimerSaga(),
    watchStopTimerSaga(),
  ]);
}
