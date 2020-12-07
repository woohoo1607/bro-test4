import { put, takeEvery, all } from "redux-saga/effects";
import {
  GET_TASK,
  GET_TASK_ERROR,
  GET_TASK_SUCCESS,
  IS_LOADING,
} from "./actionTypes";
import { getData } from "../../helpers/localStorageHelper";

export function* fetchTaskSaga({ id }) {
  try {
    yield put({ type: IS_LOADING, payload: true });
    const task = JSON.parse(getData("timersData")).filter(
      (task, i) => i == id
    )[0];
    yield put({ type: GET_TASK_SUCCESS, payload: { ...task } });
  } catch (error) {
    yield put({ type: GET_TASK_ERROR, error });
  }
}

export function* watchFetchTaskSaga() {
  yield takeEvery(GET_TASK, fetchTaskSaga);
}

export default function* taskSaga() {
  yield all([watchFetchTaskSaga()]);
}
