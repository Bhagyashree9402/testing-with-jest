const { add } = require("../util/util");
describe("Add", () => {
    describe("success", () => {
        it("Should return the sum of 2 passed argumnets", () => {
            expect(add(2, 2)).toBe(4);
        })
    })

});