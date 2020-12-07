import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Task } from "../../components";
import { getTask } from "./actions";

const TaskPageContainer = ({ getTask, match, task }) => {
  const { id } = match.params;

  useEffect(() => {
    getTask(id);
  }, [id, getTask]);
  return <Task task={task} />;
};

const mapStateToProps = ({ task }) => ({
  isLoading: task.isLoading,
  task: task.task,
  error: task.error,
});

const mapDispatchToProps = { getTask };

export default connect(mapStateToProps, mapDispatchToProps)(TaskPageContainer);
