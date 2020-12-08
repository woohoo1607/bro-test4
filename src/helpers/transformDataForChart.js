import moment from "moment";

const minInHour = 60;
export const transformDataForChart = (tasks) => {
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
