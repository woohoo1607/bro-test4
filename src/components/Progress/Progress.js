import React from "react";
import { CircularProgress } from "@material-ui/core";

import { useStyles } from "./styles";

const Progress = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
};

export default Progress;
