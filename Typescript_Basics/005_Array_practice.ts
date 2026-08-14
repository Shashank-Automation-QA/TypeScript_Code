//Syntax:-

//var_declaration var_name: data_type = data;

const user_name: string[] = ["Shahank", "singh"];

console.log(user_name[0]);    //  >>  Shashank
console.log(user_name[1]);    //  >>  singh

//*************************************   String Methods *****************************************************/

// Array Add Methods
let arr1 = [10, 20, "shashank"];
console.log(arr1.push(30)); // 4
console.log(arr1); // [10, 20, "shashank", 30]

let arr2 = [20, 30];
console.log(arr2.unshift(10)); // 3
console.log(arr2); // [10, 20, 30]

// Array Remove Methods
let arr3 = [10, 20, 30];
console.log(arr3.pop()); // 30
console.log(arr3); // [10, 20]

let arr4 = [10, 20, 30];
console.log(arr4.shift()); // 10
console.log(arr4); // [20, 30]


// Array Search Methods
let arr5 = [10, 20, 30, 20];
console.log(arr5.indexOf(20)); // 1
console.log(arr5.lastIndexOf(20)); // 3
console.log(arr5.includes(30)); // true

// Array Slice & Splice Methods
let arr6 = [10, 20, 30, 40, 50];
console.log(arr6.slice(1, 4)); // [20, 30, 40]
console.log(arr6); // Original array unchanged

let arr7 = [10, 20, 30, 40];
console.log(arr7.splice(1, 2)); // [20, 30]
console.log(arr7); // [10, 40]

// Array Join & Convert Methods
let arr8 = ["A", "B", "C"];
console.log(arr8.join("-")); // A-B-C
console.log(arr8.toString()); // A,B,C

// Array Reverse & Sort Methods
let arr9 = [10, 20, 30];
console.log(arr9.reverse()); // [30,20,10]

let arr10 = [30, 10, 20];
console.log(arr10.sort()); // [10,20,30]

let arr11 = [100, 5, 25];
console.log(arr11.sort((a, b) => a - b)); // [5,25,100]


// Array Iteration Methods
let arr12 = [10, 20, 30];
arr12.forEach(x => console.log(x));
// 10
// 20
// 30

let arr13 = [1, 2, 3];
console.log(arr13.map(x => x * 2)); // [2,4,6]

let arr14 = [10, 15, 20, 25];
console.log(arr14.filter(x => x > 15)); // [20,25]

let arr15 = [10, 20, 30];
console.log(arr15.find(x => x > 15)); // 20

let arr16 = [10, 20, 30];
console.log(arr16.findIndex(x => x > 15)); // 1

// Array Validation Methods
let arr17 = [10, 20, 30];
console.log(arr17.some(x => x > 25)); // true
console.log(arr17.every(x => x > 5)); // true

// Array Reduce Methods
let arr18 = [1, 2, 3, 4];
console.log(
    arr18.reduce((acc, curr) => acc + curr, 0)
); // 10

let arr19 = ["A", "B", "C"];
console.log(
    arr19.reduceRight((a, b) => a + b)
); // CBA

// Array Merge Methods
let arr20 = [1, 2];
let arr21 = [3, 4];
console.log(arr20.concat(arr21)); // [1,2,3,4]

// Array Fill & Copy Methods
let arr22 = [1, 2, 3, 4];
console.log(arr22.fill(0));   // [0,0,0,0]

let arr23 = [1, 2, 3, 4, 5];
console.log(arr23.copyWithin(0, 3));    // [4,5,3,4,5]

// Array Flat Methods
let arr24 = [1, 2, [3, 4]];
console.log(arr24.flat());   // [1,2,3,4]

let arr25 = [1, 2, 3];
console.log(arr25.flatMap(x => [x, x * 2]));  // [1,2,2,4,3,6]

// Array Entries, Keys, Values
let arr26 = ["A", "B", "C"];
console.log([...arr26.keys()]);   // [0,1,2]
console.log([...arr26.values()]);   // ['A','B','C']
console.log([...arr26.entries()]);   // [[0,'A'],[1,'B'],[2,'C']]

// Array ES2023 Methods
let arr27 = [1, 2, 3];
console.log(arr27.toReversed());   // [3,2,1]

let arr28 = [30, 10, 20];
console.log(arr28.toSorted());   // [10,20,30]

let arr29 = [10, 20, 30, 40];
console.log(arr29.toSpliced(1, 2));   // [10,40]

let arr30 = [10, 20, 30];
console.log(arr30.with(1, 99));   // [10,99,30]