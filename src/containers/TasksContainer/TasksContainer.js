import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppBar, Tab, Tabs } from "@material-ui/core";

import { Chart, LogTable, Progress } from "../../components";
import { getTasks, deleteTask, generateTasks } from "./actions";

const TasksContainer = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const isLoading = useSelector((state) => state.tasks.isLoading);

  const dispatch = useDispatch();
  const fetchTasks = useCallback(() => dispatch(getTasks()), [dispatch]);
  const taskDelete = useCallback((newTasks) => dispatch(deleteTask(newTasks)), [
    dispatch,
  ]);
  const autoGenerateTasks = useCallback(() => dispatch(generateTasks()), [
    dispatch,
  ]);

  const [value, setValue] = useState(0);
  const history = useHistory();
  const pathname = history.location.pathname;

  const goToTask = (id) => () => {
    history.push(`/task/${id}`);
  };

  const removeTask = (index) => () => {
    const newTasks = tasks.filter((task, i) => i !== index);
    taskDelete(newTasks);
  };

  useEffect(() => {
    if (pathname === "/charts" && value !== 1) {
      setValue(1);
    } else if (pathname === "/logs" && value !== 0) {
      setValue(0);
    }
  }, [pathname, value]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

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
      {isLoading && <Progress />}
      {!isLoading && (
        <>
          <LogTable
            tasks={tasks}
            goToTask={goToTask}
            removeTask={removeTask}
            index={0}
            value={value}
          >
            TASKS LOG
          </LogTable>
          <Chart
            value={value}
            index={1}
            tasks={tasks}
            generateTasks={autoGenerateTasks}
          >
            TASKS CHART
          </Chart>
        </>
      )}
    </div>
  );
};

export default TasksContainer;
