import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Progress, Timer } from "../../components";
import { getTimer, start, stop } from "./actions";
import { openModal } from "../ModalContainer/actions";

const TimerContainer = ({
  start,
  getTimer,
  error,
  timeStart,
  taskName,
  isLoading,
  stop,
  openModal,
}) => {
  const [time, setTimer] = useState(0);
  const [name, setName] = useState(taskName);

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
          time: +time,
          timeStart: +timeStart,
          timeEnd: +new Date().getTime(),
        });
        setName("");
      } else {
        const payload = {
          title: "Empty task name",
          msg:
            "You are trying close your task without name, enter the title and try again!",
          isModal: true,
        };
        openModal(payload);
      }
    } else {
      start({ timeStart: +new Date().getTime(), taskName: name });
    }
  };
  return (
    <>
      {isLoading && <Progress />}
      {!isLoading && (
        <Timer
          changeTimerStatus={changeTimerStatus}
          error={error}
          time={time}
          taskName={name}
          isLoading={isLoading}
          onChangeName={onChangeName}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ timer }) => ({
  error: timer.error,
  timeStart: timer.timeStart,
  taskName: timer.taskName,
  isLoading: timer.isLoading,
});

const mapDispatchToProps = { start, stop, getTimer, openModal };

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
