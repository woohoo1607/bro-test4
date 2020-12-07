import React from "react";
import moment from "moment";
import { TextField } from "@material-ui/core";

import { useStyles } from "./styles";
import { Modal, MyButton } from "../index";

const Timer = ({
  changeTimerStatus,
  error,
  time,
  taskName,
  isLoading,
  onChangeName,
  isModal,
  closeModal,
}) => {
  const classes = useStyles();
  const modalTitle = "Empty task name";
  const modalText =
    "You are trying close your task without name, enter the title and try again!";
  return (
    <div className={classes.container}>
      <TextField
        id="taskName"
        placeholder="Name of your task"
        value={taskName || ""}
        className={classes.input}
        inputProps={{ style: { textAlign: "center", color: "#3248c9" } }}
        onChange={onChangeName}
      />
      <div className={classes.timer}>{moment.utc(time).format("HH:mm:ss")}</div>
      <MyButton onClick={changeTimerStatus}>{time ? "STOP" : "START"}</MyButton>
      <Modal
        isOpen={isModal}
        handleClose={closeModal}
        title={modalTitle}
        msg={modalText}
      />
    </div>
  );
};

export default Timer;
