import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Task = ({ task }) => {
  const { taskName, timeStart, timeEnd } = task;
  return (
    <div>
      <h2>{taskName}</h2>
      <p>Time start: {moment(timeStart).format("HH:mm:ss")}</p>
      <p>Time end: {moment(timeEnd).format("HH:mm:ss")}</p>
      <p>Time spend: {moment.utc(timeEnd - timeStart).format("HH:mm:ss")}</p>
    </div>
  );
};

export default Task;
