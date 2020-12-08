import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Task } from "../../components";
import { getTask } from "./actions";
import Progress from "../../components/Progress/Progress";

const TaskPageContainer = ({ getTask, match, task, isLoading }) => {
  const { id } = match.params;

  useEffect(() => {
    getTask(id);
  }, [id, getTask]);

  return (
    <>
      {isLoading && <Progress />}
      {!isLoading && !Object.keys(task).length && <Redirect to="/not-found" />}
      {!isLoading && <Task task={task} />}
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
