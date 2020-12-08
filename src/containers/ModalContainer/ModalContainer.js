import React from "react";
import { connect } from "react-redux";

import { Modal } from "../../components";
import { closeModal } from "./actions";

const ModalContainer = ({ title, msg, isModal, closeModal }) => {
  return (
    <Modal title={title} msg={msg} handleClose={closeModal} isOpen={isModal} />
  );
};

const mapStateToProps = ({ modal }) => ({
  title: modal.title,
  msg: modal.msg,
  isModal: modal.isModal,
});

const mapDispatchToProps = { closeModal };

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
