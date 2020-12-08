import { put, takeEvery, all } from "redux-saga/effects";
import { SET_IS_MODAL, SET_IS_MODAL_SUCCESS } from "./actionsTypes";

export function* changeModalSaga({ payload }) {
  try {
    yield put({ type: SET_IS_MODAL_SUCCESS, payload });
  } catch (error) {}
}

export function* watchChangeModalSaga() {
  yield takeEvery(SET_IS_MODAL, changeModalSaga);
}

export default function* modalSaga() {
  yield all([watchChangeModalSaga()]);
}
