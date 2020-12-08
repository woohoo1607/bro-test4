import React from "react";
import { useStyles } from "./styles";
import { CircularProgress } from "@material-ui/core";

const Progress = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
};

export default Progress;
