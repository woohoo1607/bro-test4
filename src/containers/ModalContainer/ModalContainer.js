import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../../components";
import { closeModal } from "./actions";

const ModalContainer = () => {
  const title = useSelector((state) => state.modal.title);
  const msg = useSelector((state) => state.modal.msg);
  const isModal = useSelector((state) => state.modal.isModal);

  const dispatch = useDispatch();
  const close = useCallback(() => dispatch(closeModal()), [dispatch]);

  return <Modal title={title} msg={msg} handleClose={close} isOpen={isModal} />;
};

export default ModalContainer;
