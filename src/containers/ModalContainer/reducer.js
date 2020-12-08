import { SET_IS_MODAL_SUCCESS } from "./actionsTypes";

const initialState = {
  title: "",
  msg: "",
  isModal: false,
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IS_MODAL_SUCCESS: {
      return {
        ...state,
        title: payload.title,
        msg: payload.msg,
        isModal: payload.isModal,
      };
    }
    default:
      return state;
  }
};
export default modalReducer;
