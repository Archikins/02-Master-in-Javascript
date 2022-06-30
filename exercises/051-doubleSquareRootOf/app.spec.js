const {doubleSquareRootOf} = require('./app.js');

describe("DoubleSquareRoot", () => {
    it("should exist function", () => {
        expect(doubleSquareRootOf(2)).toBeDefined();
    });
    it("Result must be", () => {
        expect(doubleSquareRootOf(121)).toBe(22)
        expect(doubleSquareRootOf(21)).toBe(9.16515138991168)
    })
});

