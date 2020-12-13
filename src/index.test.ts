import { add1 } from "src";

describe("add1 adds one", () => {
  expect(add1(1)).toBe(2);
  expect(add1(-1)).toBe(0);
});
