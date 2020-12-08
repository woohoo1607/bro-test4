import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import moment from "moment";

import { MyButton } from "../index";

import { useStyles } from "./styles";

const LogTable = ({ tasks, removeTask, goToTask, value, index }) => {
  const classes = useStyles();
  return (
    <TableContainer>
      {value === index && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.headCell}>№</TableCell>
              <TableCell className={classes.headCell}>Task</TableCell>
              <TableCell className={classes.headCell}>Time start</TableCell>
              <TableCell className={classes.headCell}>Time end</TableCell>
              <TableCell className={classes.headCell}>Time spend</TableCell>
              <TableCell className={classes.headCell}>Info</TableCell>
              <TableCell className={classes.headCell}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, i) => (
              <TableRow key={i} className={classes.bodyRow}>
                <TableCell className={classes.bodyCell}>{i + 1}</TableCell>
                <TableCell className={classes.bodyCell}>
                  {task.taskName}
                </TableCell>
                <TableCell className={classes.bodyCell}>
                  {moment(task.timeStart).format("HH:mm:ss")}
                </TableCell>
                <TableCell className={classes.bodyCell}>
                  {moment(task.timeEnd).format("HH:mm:ss")}
                </TableCell>
                <TableCell className={classes.bodyCell}>
                  {moment.utc(task.timeEnd - task.timeStart).format("HH:mm:ss")}
                </TableCell>
                <TableCell className={classes.bodyCell}>
                  <MyButton onClick={goToTask(i)}>Info</MyButton>
                </TableCell>
                <TableCell className={classes.bodyCell}>
                  <MyButton onClick={removeTask(i)}>Delete</MyButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};
export default LogTable;
