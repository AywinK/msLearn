// let multitype: number | boolean;
// multitype = 20;
// multitype = true;
// multitype = "str";

// function add(x: number | string, y: number | string) {
//     if (typeof x === "number" && typeof y === "number") {
//         return x + y;
//     }
//     if (typeof x === "string" && typeof y === "string") {
//         return x.concat(y);
//     }

//     throw new Error("Parameters must be numbers or strings")
// }

// console.log(add("one", "two"));
// console.log(add(1, 2));
// console.log(add("one", 2));

// interface Employee {
//     employeeID: number;
//     age: number;
// }

// interface Manager {
//     stockPlan: boolean;
// }

// type ManagementEmployee = Employee & Manager;
// let newManager: ManagementEmployee = {
//     employeeID: 12345,
//     age: 34,
//     stockPlan: true,
// };

// type testResult = "pass" | "fail" | "incomplete";
// let myResult: testResult;
// myResult = "incomplete";
// myResult = "pass";
// myResult = "failure";

// type dice = 1|2|4|3|5|6;
// let diceRoll: dice;
// diceRoll = 1;
// diceRoll = 2;
// diceRoll = 7;