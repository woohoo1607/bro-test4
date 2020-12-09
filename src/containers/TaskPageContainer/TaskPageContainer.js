import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { Task, Progress } from "../../components";
import { getTask } from "./actions";

const TaskPageContainer = ({ match }) => {
  const task = useSelector((state) => state.task.task);
  const error = useSelector((state) => state.task.error);
  const isLoading = useSelector((state) => state.task.isLoading);

  const dispatch = useDispatch();
  const fetchTask = useCallback((id) => dispatch(getTask(id)), [dispatch]);

  const { id } = match.params;
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {
    fetchTask(id);
  }, [id, fetchTask]);

  return (
    <>
      {isLoading ? <Progress /> : <Task task={task} goHome={goHome} />}
      {error === 404 && <Redirect to="/not-found" />}
    </>
  );
};

TaskPageContainer.propTypes = {
  match: PropTypes.object,
};

export default TaskPageContainer;
