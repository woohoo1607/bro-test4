import { transformDataForChart } from "./transformDataForChart";

describe("transformDataForChart - unit test", () => {
  it("it should success output data", () => {
    const mockTasks = [
      {
        taskName: "task1",
        time: 600000,
        timeStart: 1607400891167,
        timeEnd: 1607401491167,
      },
      {
        taskName: "task2",
        time: 1200000,
        timeStart: 1607401500000,
        timeEnd: 1607402700000,
      },
      {
        taskName: "task3",
        time: 4000000,
        timeStart: 1607402700000,
        timeEnd: 1607406700000,
      },
      {
        taskName: "task4",
        time: 3000000,
        timeStart: 1607406700000,
        timeEnd: 1607409700000,
      },
      {
        taskName: "task5",
        time: 1000000,
        timeStart: 1607409700000,
        timeEnd: 1607410700000,
      },
      {
        taskName: "task6",
        time: 2000000,
        timeStart: 1607417700000,
        timeEnd: 1607419700000,
      },
      {
        taskName: "task7",
        time: 5000000,
        timeStart: 1607421700000,
        timeEnd: 1607426700000,
      },
      {
        taskName: "task8",
        time: 700000,
        timeStart: 1607429700000,
        timeEnd: 1607430400000,
      },
      {
        taskName: "task9",
        time: 1000000,
        timeStart: 1607430400000,
        timeEnd: 1607431400000,
      },
      {
        taskName: "task10",
        time: 2800000,
        timeStart: 1607431400000,
        timeEnd: 1607434200000,
      },
    ];

    const output = [
      { name: 0, minutes: 0 },
      { name: 1, minutes: 0 },
      { name: 2, minutes: 0 },
      { name: 3, minutes: 0 },
      { name: 4, minutes: 0 },
      { name: 5, minutes: 0 },
      { name: 6, minutes: 45 },
      { name: 7, minutes: 60 },
      { name: 8, minutes: 57 },
      { name: 9, minutes: 0 },
      { name: 10, minutes: 5 },
      { name: 11, minutes: 28 },
      { name: 12, minutes: 59 },
      { name: 13, minutes: 25 },
      { name: 14, minutes: 44 },
      { name: 15, minutes: 30 },
      { name: 16, minutes: 0 },
      { name: 17, minutes: 0 },
      { name: 18, minutes: 0 },
      { name: 19, minutes: 0 },
      { name: 20, minutes: 0 },
      { name: 21, minutes: 0 },
      { name: 22, minutes: 0 },
      { name: 23, minutes: 0 },
    ];
    expect(transformDataForChart(mockTasks)).toEqual(output);
  });
});
