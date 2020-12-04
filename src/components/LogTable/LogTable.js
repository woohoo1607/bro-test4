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

const LogTable = ({ tasks }) => {
  console.log(tasks);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Time start</TableCell>
            <TableCell>Time end</TableCell>
            <TableCell>Time spend</TableCell>
            <TableCell>Info</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{task.taskName}</TableCell>
              <TableCell>
                {moment.utc(task.timeStart).format("HH:mm:ss")}
              </TableCell>
              <TableCell>
                {moment.utc(task.timeEnd).format("HH:mm:ss")}
              </TableCell>
              <TableCell>
                {moment.utc(task.timeEnd - task.timeStart).format("HH:mm:ss")}
              </TableCell>
              <TableCell>Info Button</TableCell>
              <TableCell>Delete Button</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default LogTable;
