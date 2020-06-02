const { add, minus } = require("../util/util");
describe("Add", () => {
    describe("success", () => {
        it("Should return the sum of 2 passed argumnets", () => {
            expect(add(2, 2)).toBe(4);
        })
    })
    describe("Failure", () => {
        it("Should throw an error if the first argument is not a number", () => {
            expect(() => add("2", 2)).toThrowError()
        })
        it("Should throw an error if the second argument is not a number", () => {
            expect(() => add(2, "2")).toThrowError()
        })
        it("Should throw an error if no arguments were received", () => {
            expect(() => add()).toThrowError()
        })
    })

});

describe("Minus", () => {
    describe("success", () => {
        it("Should return the subtraction of 2 passed argumnets", () => {
            expect(minus(4, 2)).toBe(2);
        })
    })
    describe("Failure", () => {
        it("Should throw an error if the first argument is not a number", () => {
            expect(() => minus("4", 2)).toThrowError()
        })
        it("Should throw an error if the second argument is not a number", () => {
            expect(() => minus(4, "2")).toThrowError()
        })
        it("Should throw an error if no arguments were received", () => {
            expect(() => minus()).toThrowError()
        })
    })

})