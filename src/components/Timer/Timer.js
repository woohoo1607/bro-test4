import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { TextField } from "@material-ui/core";

import { useStyles } from "./styles";
import { MyButton } from "../index";

const Timer = ({ changeTimerStatus, time, taskName, onChangeName }) => {
  const classes = useStyles();
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
    </div>
  );
};

Timer.propTypes = {
  changeTimerStatus: PropTypes.func,
  time: PropTypes.number,
  taskName: PropTypes.string,
  onChangeName: PropTypes.func,
};

export default Timer;
