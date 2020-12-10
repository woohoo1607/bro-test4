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
