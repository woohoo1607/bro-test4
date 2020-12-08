import React from "react";

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
