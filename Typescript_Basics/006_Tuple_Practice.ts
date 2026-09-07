// Syntax:-

// var_declaration var_name: [data_type1, data_type2, ...] = [data1, data2, ...]

let user: [string, number] = ["Shashank", 28];

console.log(user[0]);   // Shashank
console.log(user[1]);   // 28

//*************************************   Tuple Notes *****************************************************/


// Tuple Creation
let emp1: [string, number] = ["Shashank", 101];

console.log(emp1);
// ["Shashank", 101]


// Access Tuple Values
let emp2: [string, number] = ["Rahul", 102];

console.log(emp2[0]);   // Rahul
console.log(emp2[1]);   // 102


// Tuple Length
let emp3: [string, number, boolean] = ["Amit", 103, true];

console.log(emp3.length);   // 3


// Update Tuple Values
let emp4: [string, number] = ["Raj", 104];

emp4[0] = "Rohit";
emp4[1] = 105;

console.log(emp4);
// ["Rohit", 105]


// Tuple Push Method
let emp5: [string, number] = ["Shashank", 101];

emp5.push("QA");

console.log(emp5);
// ["Shashank", 101, "QA"]

console.log(emp5.length);
// 3


// Tuple Pop Method
let emp6: [string, number] = ["Shashank", 101];

console.log(emp6.pop());
// 101

console.log(emp6);
// ["Shashank"]


// Tuple Shift Method
let emp7: [string, number] = ["Shashank", 101];

console.log(emp7.shift());
// Shashank

console.log(emp7);
// [101]


// Tuple Unshift Method
let emp8: [string, number] = ["Shashank", 101];

emp8.unshift("Mr.");

console.log(emp8);
// ["Mr.", "Shashank", 101]


// Tuple Destructuring
let emp9: [string, number] = ["Shashank", 101];

let [name, id] = emp9;

console.log(name);   // Shashank
console.log(id);     // 101


// Tuple With Optional Value
let emp10: [string, number?] = ["Shashank"];

console.log(emp10);
// ["Shashank"]

let emp11: [string, number?] = ["Shashank", 101];

console.log(emp11);
// ["Shashank", 101]


// Tuple With Rest Operator
let emp12: [string, ...number[]] = ["Shashank", 90, 85, 95];

console.log(emp12);
// ["Shashank", 90, 85, 95]


// Readonly Tuple
const emp13: readonly [string, number] = ["Shashank", 101];

console.log(emp13[0]);   // Shashank
console.log(emp13[1]);   // 101

// emp13[0] = "Rahul";   Error


// Tuple With Different Data Types
let emp14: [string, number, boolean] = ["Shashank", 101, true];

console.log(emp14);
// ["Shashank", 101, true]


// Nested Tuple
let emp15: [string, [number, string]] =
["Shashank", [101, "QA"]];

console.log(emp15[1][0]);
// 101

console.log(emp15[1][1]);
// QA


// Tuple Using Type Alias
type Employee = [string, number];

let emp16: Employee = ["Shashank", 101];

console.log(emp16);
// ["Shashank", 101]


// Tuple Spread Operator
let emp17: [string, number] = ["Shashank", 101];

let emp18 = [...emp17];

console.log(emp18);
// ["Shashank", 101]


// Tuple Convert To Array
let emp19: [string, number] = ["Shashank", 101];

console.log(Array.from(emp19));
// ["Shashank", 101]


// Tuple Iteration Using For Of
let emp20: [string, number] = ["Shashank", 101];

for (let value of emp20) {
    console.log(value);
}

// Shashank
// 101


// Tuple Iteration Using ForEach
let emp21: [string, number] = ["Shashank", 101];

emp21.forEach(value => console.log(value));

// Shashank
// 101


// Tuple Entries, Keys, Values
let emp22: [string, number] = ["Shashank", 101];

console.log([...emp22.keys()]);
// [0,1]

console.log([...emp22.values()]);
// ["Shashank",101]

console.log([...emp22.entries()]);
// [[0,"Shashank"],[1,101]]


// Tuple Slice Method
let emp23: [string, number, boolean] =
["Shashank", 101, true];

console.log(emp23.slice(1));
// [101,true]


// Tuple Join Method
let emp24: [string, number] =
["Shashank", 101];

console.log(emp24.join("-"));
// Shashank-101


// Tuple Includes Method
let emp25: [string, number] =
["Shashank", 101];

console.log(emp25.includes(101));
// true


// Tuple IndexOf Method
let emp26: [string, number] =
["Shashank", 101];

console.log(emp26.indexOf(101));
// 1


// Tuple Reverse Method
let emp27: [string, number] =
["Shashank", 101];

console.log(emp27.reverse());
// [101,"Shashank"]