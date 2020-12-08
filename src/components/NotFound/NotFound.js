import React from "react";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.notFound}>
      <h2 className={classes.title}>
        =( Page not found -{" "}
        <Link className={classes.link} to="/">
          go home
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
