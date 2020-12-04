import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { LogTable } from "../../components";
import { getTasks } from "./actions";

const TabPanel = ({ children, value, index }) => {
  return <div>{value === index && children}</div>;
};

const TasksContainer = ({ tasks, getTasks }) => {
  const [value, setValue] = React.useState(0);

  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === "/charts") {
      setValue(1);
    } else if (history.location.pathname === "/logs") {
      setValue(0);
    }
  }, [history.location.pathname]);

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
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Tasks Log" />
          <Tab label="Tasks Chart" />
        </Tabs>
      </AppBar>
      <LogTable tasks={tasks} index={0}>
        TASKS LOG
      </LogTable>
      <TabPanel value={value} index={1}>
        TASKS CHART
      </TabPanel>
    </div>
  );
};

const mapStateToProps = ({ tasks }) => ({
  error: tasks.error,
  isLoading: tasks.isLoading,
  tasks: tasks.tasks,
});
const mapDispatchToProps = { getTasks };

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
