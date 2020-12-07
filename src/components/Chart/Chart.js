import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "0",
    minutes: 0,
  },
  {
    name: "1",
    minutes: 0,
  },
  {
    name: "2",
    minutes: 0,
  },
  {
    name: "3",
    minutes: 0,
  },
  {
    name: "4",
    minutes: 0,
  },
  {
    name: "5",
    minutes: 0,
  },
  {
    name: "6",
    minutes: 0,
  },
  {
    name: "7",
    minutes: 0,
  },
  {
    name: "8",
    minutes: 0,
  },
  {
    name: "9",
    minutes: 0,
  },
  {
    name: "10",
    minutes: 0,
  },
  {
    name: "11",
    minutes: 0,
  },
  {
    name: "12",
    minutes: 0,
  },
  {
    name: "13",
    minutes: 0,
  },
  {
    name: "14",
    minutes: 0,
  },
  {
    name: "15",
    minutes: 0,
  },
  {
    name: "16",
    minutes: 0,
  },
  {
    name: "17",
    minutes: 0,
  },
  {
    name: "18",
    minutes: 0,
  },
  {
    name: "19",
    minutes: 0,
  },
  {
    name: "20",
    minutes: 0,
  },
  {
    name: "21",
    minutes: 0,
  },
  {
    name: "22",
    minutes: 0,
  },
  {
    name: "23",
    minutes: 0,
  },
];

const minInHour = 60;

const Chart = ({ value, index, tasks }) => {
  /*  console.log(tasks);
  console.log(data[0]);
  tasks.map((task) => {
    const hourStart = moment(task.timeStart).format("H");
    const hourEnd = moment(task.timeEnd).format("H");
    if (hourEnd === hourStart) {
      data[hourStart].minutes = moment(task.time).format("m");
    } else {
      data[hourStart].minutes = minInHour - moment(task.timeStart).format("m");

      data[hourEnd].minutes = moment(task.timeEnd).format("m");
    }
  });*/

  return (
    <>
      {value === index && (
        <BarChart width={1300} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="minutes" fill="#8884d8" />
        </BarChart>
      )}
    </>
  );
};

export default Chart;
