import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { useStyles } from "./styles";

const Task = ({ task }) => {
  const classes = useStyles();
  const { taskName, timeStart, timeEnd } = task;
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{taskName}</h2>
      <p className={classes.p}>
        Time start:{" "}
        <span className={classes.time}>
          {moment(timeStart).format("HH:mm:ss")}
        </span>
      </p>
      <p className={classes.p}>
        Time end:{" "}
        <span className={classes.time}>
          {moment(timeEnd).format("HH:mm:ss")}
        </span>
      </p>
      <p className={classes.p}>
        Time spend:{" "}
        <span className={classes.time}>
          {moment.utc(timeEnd - timeStart).format("HH:mm:ss")} minutes
        </span>
      </p>
    </div>
  );
};

export default Task;
