import moment from "moment";

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const minutes10 = 600000;
const minutes90 = 5400000;

export const generator = () => {
  const tasks = [];
  const today = new Date();
  const todayMS = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ).getTime();
  const tasksCount = randomInteger(10, 15);
  for (let i = 0; i < tasksCount; i++) {
    const time = randomInteger(minutes10, minutes90);
    let timeStart;
    if (!tasks.length) {
      timeStart = todayMS;
    } else {
      timeStart = tasks[i - 1].timeEnd + randomInteger(0, minutes10);
    }
    tasks.push({
      taskName: `task${i + 1}`,
      time,
      timeStart,
      timeEnd: time + timeStart,
    });
  }
  return tasks;
};
export const transformDataForChart = (tasks) => {
  generator();
  const minInHour = 60;
  const data = [];
  const result = [];

  tasks.map((task) => {
    const hourStart = +moment(task.timeStart).format("H");
    const hourEnd = +moment(task.timeEnd).format("H");
    if (hourEnd === hourStart) {
      data.push({ name: hourStart, minutes: +moment(task.time).format("m") });
    } else {
      const diffHours = hourEnd - hourStart;
      data.push({
        name: hourStart,
        minutes: minInHour - +moment(task.timeStart).format("m"),
      });
      if (diffHours > 1) {
        for (let i = hourStart + 1; i < hourEnd; i++) {
          data.push({ name: i, minutes: 60 });
        }
      }

      data.push({
        name: hourEnd,
        minutes: +moment(task.timeEnd).format("m"),
      });
    }
  });

  for (let i = 0; i <= 23; i++) {
    const dataPerHour = data.filter((d) => d.name === i);
    if (dataPerHour.length === 0) {
      result.push({ name: i, minutes: 0 });
    } else if (dataPerHour.length === 1) {
      result.push(dataPerHour[0]);
    } else {
      result.push({
        name: i,
        minutes: dataPerHour.reduce((sum, data) => sum + +data.minutes, 0),
      });
    }
  }
  return result;
};
