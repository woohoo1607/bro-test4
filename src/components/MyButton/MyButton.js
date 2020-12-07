import React from "react";
import { Button } from "@material-ui/core";

import { useStyles } from "./styles";

const MyButton = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.button} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MyButton;
