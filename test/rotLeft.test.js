const { expect } = require("@jest/globals");
const rotLeft = require("../rotLeft");

describe("test rotLeft", () => {
  it("Test Case 1", () => {
    expect(rotLeft([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 1]);
  });
  it("Test Case 2", () => {
    expect(
      rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97])
    ).toStrictEqual([
      47,
      70,
      37,
      8,
      53,
      13,
      93,
      71,
      72,
      51,
      100,
      60,
      87,
      97,
      33,
    ]);
  });
  it("Test Case 3", () => {
    expect(
      rotLeft([
        41,
        73,
        89,
        7,
        10,
        1,
        59,
        58,
        84,
        77,
        77,
        97,
        58,
        1,
        86,
        58,
        26,
        10,
        86,
        51,
      ])
    ).toStrictEqual([
      73,
      89,
      7,
      10,
      1,
      59,
      58,
      84,
      77,
      77,
      97,
      58,
      1,
      86,
      58,
      26,
      10,
      86,
      51,
      41,
    ]);
  });
  it("Test Case 4", () => {
    expect(rotLeft([3, 2, 1])).toStrictEqual([2, 1, 3]);
  });
});
