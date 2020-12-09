import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  DELETE_TASK,
  DELETE_TASK_ERROR,
  GENERATE_TASKS,
  GET_TASKS,
  GET_TASKS_ERROR,
  GET_TASKS_SUCCESS,
  IS_LOADING,
} from "./actionTypes";
import { getData, removeData, setData } from "../../helpers/localStorageHelper";
import { mockTasks } from "../../mocks/mockTasks";
import { generator } from "../../helpers/transformDataForChart";

export function* fetchTasksSaga() {
  try {
    yield put({ type: IS_LOADING, payload: true });
    const result = yield call(getData, "timersData");
    const tasks = JSON.parse(result) || [];
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
    yield call(setData, "timersData", JSON.stringify([...data]));
    yield put({ type: GET_TASKS });
  } catch (error) {
    yield put({ type: DELETE_TASK_ERROR, error });
  }
}

export function* watchDeleteTaskSaga() {
  yield takeEvery(DELETE_TASK, deleteTaskSaga);
}

export function* generateTasksSaga() {
  try {
    yield call(removeData, "timersData");
    yield call(setData, "timersData", JSON.stringify(generator()));
    yield put({ type: GET_TASKS });
  } catch (error) {}
}

export function* watchGenerateTasksSaga() {
  yield takeEvery(GENERATE_TASKS, generateTasksSaga);
}

export default function* tasksSaga() {
  yield all([
    watchFetchTasksSaga(),
    watchDeleteTaskSaga(),
    watchGenerateTasksSaga(),
  ]);
}
