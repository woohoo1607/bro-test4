import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { transformDataForChart } from "../../helpers/transformDataForChart";
import { useStyles } from "./styles";
import { MyButton } from "../index";

const Chart = ({ tasks, generateTasks }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(transformDataForChart(tasks));
  }, [tasks]);

  return (
    <>
      <ResponsiveContainer
        className={classes.chartContainer}
        width="99%"
        height={350}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="minutes" name="Minutes in this hours" fill="#3248c7" />
        </BarChart>
      </ResponsiveContainer>
      <div className={classes.generateBtnContainer}>
        <MyButton onClick={generateTasks}>Generate</MyButton>
      </div>
    </>
  );
};

Chart.propTypes = {
  tasks: PropTypes.array,
  generateTasks: PropTypes.func,
};

export default Chart;
