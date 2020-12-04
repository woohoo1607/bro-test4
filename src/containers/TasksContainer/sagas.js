import { put, takeEvery, all } from "redux-saga/effects";
import { GET_TASKS, GET_TASKS_ERROR, GET_TASKS_SUCCESS } from "./actionTypes";
import { getData } from "../../helpers/localStorageHelper";

export function* fetchTasksSaga() {
  try {
    const tasks = JSON.parse(getData("timersData")) || [];
    yield put({ type: GET_TASKS_SUCCESS, payload: [...tasks] });
  } catch (error) {
    yield put({ type: GET_TASKS_ERROR, error });
  }
}

export function* watchFetchTasksSaga() {
  yield takeEvery(GET_TASKS, fetchTasksSaga);
}

export default function* tasksSaga() {
  yield all([watchFetchTasksSaga()]);
}
