const { expect } = require("@jest/globals");
const rotLeft = require("../rotLeft-2");

describe("test rotLeft-2", () => {
  it("Test Case 1", () => {
    expect(rotLeft([1, 2, 3, 4, 5], 4)).toStrictEqual([5, 1, 2, 3, 4]);
  });
  it("Test Case 2", () => {
    expect(
      rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13)
    ).toStrictEqual([
      87,
      97,
      33,
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
    ]);
  });
  it("Test Case 3", () => {
    expect(
      rotLeft(
        [
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
        ],
        10
      )
    ).toStrictEqual([
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
      73,
      89,
      7,
      10,
      1,
      59,
      58,
      84,
      77,
    ]);
  });
  it("Test Case 4", () => {
    expect(rotLeft([3, 2, 1], 0)).toStrictEqual([3, 2, 1]);
  });
  it("Test Case 5", () => {
    expect(rotLeft([3, 2, 1], 3)).toStrictEqual([3, 2, 1]);
  });
});
