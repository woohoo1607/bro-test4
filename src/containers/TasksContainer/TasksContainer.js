import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { Chart, LogTable } from "../../components";
import { getTasks, deleteTask } from "./actions";

const TasksContainer = ({ tasks, getTasks, deleteTask }) => {
  const [value, setValue] = useState(0);

  const history = useHistory();
  const pathname = history.location.pathname;

  const goToTask = (id) => () => {
    history.push(`/task/${id}`);
  };

  const removeTask = (index) => () => {
    const newTasks = tasks.filter((task, i) => i !== index);
    deleteTask(newTasks);
  };

  useEffect(() => {
    if (pathname === "/charts" && value !== 1) {
      setValue(1);
    } else if (pathname === "/logs" && value !== 0) {
      setValue(0);
    }
  }, [pathname, value]);

  useEffect(() => {
    getTasks();
  }, []);

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      history.push("/logs");
    } else {
      history.push("/charts");
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          style={{ backgroundColor: "#01bcd5" }}
        >
          <Tab label="Tasks Log" fullWidth={true} style={{ minWidth: "50%" }} />
          <Tab
            label="Tasks Chart"
            fullWidth={true}
            style={{ minWidth: "50%" }}
          />
        </Tabs>
      </AppBar>
      <LogTable
        tasks={tasks}
        goToTask={goToTask}
        removeTask={removeTask}
        index={0}
        value={value}
      >
        TASKS LOG
      </LogTable>
      <Chart value={value} index={1} tasks={tasks}>
        TASKS CHART
      </Chart>
    </div>
  );
};

const mapStateToProps = ({ tasks }) => ({
  error: tasks.error,
  isLoading: tasks.isLoading,
  tasks: tasks.tasks,
});
const mapDispatchToProps = { getTasks, deleteTask };

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
