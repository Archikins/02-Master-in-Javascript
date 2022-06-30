
const { computeSquareRoot } = require('./app.js')

describe("Function computeSquareRoot", function () {
  it("computeSquareRoot must exists", function () {
    const number = 2
    expect(computeSquareRoot(number)).toBeDefined();
  });
  it("square of 4 is 2", function () {
    const number = 4
    expect(computeSquareRoot(number)).toBe(2);
  });

});