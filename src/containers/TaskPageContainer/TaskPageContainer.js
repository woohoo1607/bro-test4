import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { Task, Progress } from "../../components";
import { getTask } from "./actions";

const TaskPageContainer = ({ getTask, match, task, isLoading, error }) => {
  const { id } = match.params;
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {
    getTask(id);
  }, [id, getTask]);

  return (
    <>
      {isLoading && <Progress />}
      {!isLoading && <Task task={task} goHome={goHome} />}
      {error === 404 && <Redirect to="/not-found" />}
    </>
  );
};

const mapStateToProps = ({ task }) => ({
  isLoading: task.isLoading,
  task: task.task,
  error: task.error,
});

const mapDispatchToProps = { getTask };

export default connect(mapStateToProps, mapDispatchToProps)(TaskPageContainer);
