import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import { useStyles } from "./styles";

const DialogModal = ({ isOpen, title, msg, close, successModal }) => {
  const classes = useStyles();
  return (
    <Dialog open={isOpen} onClose={close} maxWidth={"md"} fullWidth={true}>
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.text}>{msg}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary" className={classes.btn}>
          Close
        </Button>
        <Button onClick={successModal} color="primary" className={classes.btn}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DialogModal.propTypes = {
  isOpen: PropTypes.bool,
  func: PropTypes.func,
  title: PropTypes.string,
  msg: PropTypes.string,
};

export default DialogModal;
