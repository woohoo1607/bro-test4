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
  const [name, setName] = useState(taskName);
  const [isModal, setIsModal] = useState(false);

  const closeModal = () => {
    setIsModal(false);
  };

  const onChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  useEffect(() => {
    let updateTimer;
    if (timeStart) {
      setTimer(new Date().getTime() - timeStart);
      setName(taskName);
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
  }, [getTimer]);

  const changeTimerStatus = () => {
    if (timeStart) {
      if (name) {
        stop({
          taskName: name,
          time,
          timeStart,
          timeEnd: new Date().getTime(),
        });
        setName("");
      } else {
        setIsModal(true);
      }
    } else {
      start({ timeStart: new Date().getTime(), taskName: name });
    }
  };
  return (
    <Timer
      changeTimerStatus={changeTimerStatus}
      error={error}
      time={time}
      taskName={name}
      isLoading={isLoading}
      onChangeName={onChangeName}
      isModal={isModal}
      closeModal={closeModal}
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
