import React from "react";
import moment from "moment";
import { Button, TextField } from "@material-ui/core";

import { useStyles } from "./styles";

const Timer = ({ changeTimerStatus, error, time, taskName, isLoading }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        id="taskName"
        placeholder="Name of your task"
        defaultValue={taskName}
        className={classes.input}
        inputProps={{ style: { textAlign: "center" } }}
      />
      {moment.utc(time).format("HH:mm:ss")}
      <Button
        variant="contained"
        className={classes.button}
        onClick={changeTimerStatus}
      >
        {time ? "STOP" : "START"}
      </Button>
    </div>
  );
};

export default Timer;
