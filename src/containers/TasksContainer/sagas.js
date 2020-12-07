import { put, takeEvery, all } from "redux-saga/effects";
import {
  DELETE_TASK,
  DELETE_TASK_ERROR,
  GET_TASKS,
  GET_TASKS_ERROR,
  GET_TASKS_SUCCESS,
  IS_LOADING,
} from "./actionTypes";
import { getData, setData } from "../../helpers/localStorageHelper";

export function* fetchTasksSaga() {
  try {
    yield put({ type: IS_LOADING, payload: true });
    const tasks = JSON.parse(getData("timersData")) || [];
    yield put({ type: GET_TASKS_SUCCESS, payload: [...tasks] });
  } catch (error) {
    yield put({ type: GET_TASKS_ERROR, error });
  }
}

export function* watchFetchTasksSaga() {
  yield takeEvery(GET_TASKS, fetchTasksSaga);
}

export function* deleteTaskSaga({ data }) {
  try {
    yield put({ type: IS_LOADING, payload: true });
    setData("timersData", JSON.stringify([...data]));
    yield put({ type: GET_TASKS });
  } catch (error) {
    yield put({ type: DELETE_TASK_ERROR, error });
  }
}

export function* watchDeleteTaskSaga() {
  yield takeEvery(DELETE_TASK, deleteTaskSaga);
}

export default function* tasksSaga() {
  yield all([watchFetchTasksSaga(), watchDeleteTaskSaga()]);
}
