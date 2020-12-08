import { SET_IS_MODAL } from "./actionsTypes";

export const openModal = (payload) => {
  return { type: SET_IS_MODAL, payload };
};

export const closeModal = () => {
  const payload = {
    msg: "",
    title: "",
    isModal: false,
  };
  return { type: SET_IS_MODAL, payload };
};
