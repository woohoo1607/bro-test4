import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Progress, Timer } from "../../components";
import { getTimer, start, stop, saveTaskName } from "./actions";
import { openModal } from "../ModalContainer/actions";

const TimerContainer = () => {
  const timeStart = useSelector((state) => state.timer.timeStart);
  const taskName = useSelector((state) => state.timer.taskName);
  const error = useSelector((state) => state.timer.error);
  const isLoading = useSelector((state) => state.timer.isLoading);

  const dispatch = useDispatch();
  const fetchTimer = useCallback(() => dispatch(getTimer()), [dispatch]);
  const startTimer = useCallback((payload) => dispatch(start(payload)), [
    dispatch,
  ]);
  const stopTimer = useCallback((payload) => dispatch(stop(payload)), [
    dispatch,
  ]);
  const toOpenModal = useCallback((payload) => dispatch(openModal(payload)), [
    dispatch,
  ]);
  const taskNameSave = useCallback(
    (payload) => dispatch(saveTaskName(payload)),
    [dispatch]
  );

  const [time, setTimer] = useState(0);

  const onChangeName = (e) => {
    const value = e.target.value;
    taskNameSave({ taskName: value });
  };

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
    return () => {
      clearInterval(updateTimer);
    };
  }, [timeStart]);

  useEffect(() => {
    fetchTimer();
  }, [fetchTimer]);

  const changeTimerStatus = () => {
    if (timeStart) {
      if (taskName) {
        stopTimer({
          taskName: taskName,
          time: +time,
          timeStart: +timeStart,
          timeEnd: +new Date().getTime(),
        });
      } else {
        const payload = {
          title: "Empty task name",
          msg:
            "You are trying close your task without name, enter the title and try again!",
          isModal: true,
        };
        toOpenModal(payload);
      }
    } else {
      startTimer({ timeStart: +new Date().getTime(), taskName: taskName });
    }
  };
  return (
    <>
      {isLoading ? (
        <Progress />
      ) : (
        <Timer
          changeTimerStatus={changeTimerStatus}
          error={error}
          time={time}
          taskName={taskName}
          isLoading={isLoading}
          onChangeName={onChangeName}
        />
      )}
    </>
  );
};

export default TimerContainer;
