import { put, takeEvery, all, call } from "redux-saga/effects";
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
    yield put(setIsLoading(true));

    const timeStart = yield call(getData, "timeStart");
    const taskName = yield call(getData, "taskName");
    yield put({
      type: GET_TIMER_SUCCESS,
      payload: { timeStart: timeStart || 0, taskName },
    });
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
    yield call(setData, "timeStart", payload.timeStart);
    yield call(setData, "taskName", payload.taskName);
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
    yield call(removeData, "timeStart");
    yield call(removeData, "taskName");
    const result = yield call(getData, "timersData");
    const data = JSON.parse(result) || [];
    yield call(
      setData,
      "timersData",
      JSON.stringify([...data, { ...payload }])
    );
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
