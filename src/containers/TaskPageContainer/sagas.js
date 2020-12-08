import { put, call, takeEvery, all } from "redux-saga/effects";
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
    const result = yield call(getData, "timersData");
    const task = JSON.parse(result).filter((t, i) => i === +id)[0];
    if (task) {
      yield put({ type: GET_TASK_SUCCESS, payload: { ...task } });
    } else {
      const error = {
        error: 404,
      };
      yield put({ type: GET_TASK_ERROR, payload: { ...error } });
    }
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
