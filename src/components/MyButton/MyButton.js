import React from "react";
import PropTypes from "prop-types";
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

MyButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default MyButton;
