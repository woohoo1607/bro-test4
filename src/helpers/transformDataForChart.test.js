import { transformDataForChart } from "./transformDataForChart";
import { mockTasks } from "../mocks/mockTasks";

describe("transformDataForChart - unit test", () => {
  it("it should success output data", () => {
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
