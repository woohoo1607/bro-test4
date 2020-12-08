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

const Chart = ({ value, index, tasks }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(transformDataForChart(tasks));
  }, [tasks]);

  return (
    <>
      {value === index && (
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
            <Bar
              dataKey="minutes"
              name="Minutes in this hours"
              fill="#3248c7"
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default Chart;
