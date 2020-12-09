import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Switch, Route } from "react-router-dom";
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

  const [activeTab, setActiveTab] = useState(0);
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
    if (pathname === "/charts" && activeTab !== 1) {
      setActiveTab(1);
    } else if (pathname === "/logs" && activeTab !== 0) {
      setActiveTab(0);
    }
  }, [pathname, activeTab]);

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
          value={activeTab}
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
        <Switch>
          <Route
            exact
            path="/logs"
            render={(props) => (
              <LogTable
                tasks={tasks}
                goToTask={goToTask}
                removeTask={removeTask}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/charts"
            render={(props) => (
              <Chart
                tasks={tasks}
                generateTasks={autoGenerateTasks}
                {...props}
              />
            )}
          />
          <Route
            render={(props) => (
              <LogTable
                tasks={tasks}
                goToTask={goToTask}
                removeTask={removeTask}
                {...props}
              />
            )}
          />
        </Switch>
      )}
    </div>
  );
};

export default TasksContainer;
