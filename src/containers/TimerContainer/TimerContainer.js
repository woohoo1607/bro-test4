import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Timer } from "../../components";
import { getTimer, start, stop } from "./actions";

const TimerContainer = ({
  start,
  getTimer,
  error,
  timeStart,
  taskName,
  isLoading,
  stop,
}) => {
  const [time, setTimer] = useState(0);

  useEffect(() => {
    let updateTimer;
    if (timeStart) {
      setTimer(new Date().getTime() - timeStart);
      updateTimer = setInterval(() => {
        setTimer((time) => time + 1000);
      }, 1000);
    } else {
      setTimer(timeStart);
    }
    return () => clearInterval(updateTimer);
  }, [timeStart]);

  useEffect(() => {
    getTimer();
  }, []);
  const changeTimerStatus = () => {
    if (timeStart) {
      stop({ taskName, time, timeStart, timeEnd: new Date().getTime() });
    } else {
      start({ timeStart: new Date().getTime(), taskName });
    }
  };
  return (
    <Timer
      changeTimerStatus={changeTimerStatus}
      error={error}
      time={time}
      taskName={taskName}
      isLoading={isLoading}
    />
  );
};

const mapStateToProps = ({ timer }) => ({
  error: timer.error,
  timeStart: timer.timeStart,
  taskName: timer.taskName,
  isLoading: timer.isLoading,
});

const mapDispatchToProps = { start, stop, getTimer };

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
