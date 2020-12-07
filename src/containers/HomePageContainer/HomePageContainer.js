import React, { useEffect } from "react";
import PropTypes from "prop-types";

import TimerContainer from "../TimerContainer/TimerContainer";
import TasksContainer from "../TasksContainer/TasksContainer";

const HomePageContainer = (props) => {
  return (
    <>
      <TimerContainer {...props} />
      <TasksContainer {...props} />
    </>
  );
};

export default HomePageContainer;
