const add = (num1, num2) => {
    if (typeof num1 != "number") throw new Error("1st argument must be a number")
    if (typeof num2 != "number") throw new Error("2st argument must be a number")
    return num1 + num2;
};

const minus = (num1, num2) => {
    if (typeof num1 != "number") throw new Error("1st argument must be a number")
    if (typeof num2 != "number") throw new Error("2st argument must be a number")
    return num1 - num2;
};
//console.log(add(2, 2));

module.exports = { add, minus };
