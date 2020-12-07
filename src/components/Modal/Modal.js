import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import { useStyles } from "./styles";

const Modal = ({ isOpen, handleClose, title, msg }) => {
  const classes = useStyles();
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth={"md"}
      fullWidth={true}
    >
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.text}>{msg}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" className={classes.btn}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
