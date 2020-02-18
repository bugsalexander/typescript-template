// sample function
function f(a: number, b: number): number {
  return a + b;
}

// sample tests
it("adds properly", () => {
  expect(f(1, 2)).toEqual(3);
  expect(f(-1, 2)).toEqual(1);
  expect(f(0, 2)).toEqual(2);
  expect(f(5, 5)).toEqual(10);
});