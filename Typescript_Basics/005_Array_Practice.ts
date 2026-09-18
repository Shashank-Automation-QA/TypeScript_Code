//Syntax:-

//var_declaration var_name: data_type = data;

const user_name: (number|string)[] = ["Shahank", "singh",29];

console.log(user_name[0]);    //  >>  Shashank
console.log(user_name[1]);    //  >>  singh
console.log(user_name[2]);    //  >>  29

//*************************************   Array Methods *****************************************************/

// Array Add Methods
let arr1 = [10, 20, "shashank"];
console.log(arr1.push(30)); // 4                        //push method always add at the end
console.log(arr1); // [10, 20, "shashank", 30]

let arr2 = [20, 30];
console.log(arr2.unshift(10)); // 3                     //unshift always add at the front
console.log(arr2); // [10, 20, 30]

// Array Remove Methods
let arr3 = [10, 20, 30];
console.log(arr3.pop()); // 30                          //pop always remove from last
console.log(arr3); // [10, 20]

let arr4 = [10, 20, 30];
console.log(arr4.shift()); // 10                        //shift always remove from front
console.log(arr4); // [20, 30]


// Array Search Methods
let arr5 = [10, 20, 30, 20];
console.log(arr5.indexOf(20)); // 1
console.log(arr5.lastIndexOf(20)); // 3
console.log(arr5.includes(30)); // true

// Array Slice & Splice Methods
let arr6 = [10, 20, 30, 40, 50];
console.log(arr6.slice(1, 4)); // [20, 30, 40]           //slice always don't consider the stop value and do not change original array
console.log(arr6); // Original array unchanged

let arr7 = [10, 20, 30, 40];
console.log(arr7.splice(1, 2)); // [20, 30]              //splice always consider the stop value and change original array
console.log(arr7); // [10, 40]

// Array Join & Convert Methods
let arr8 = ["A", "B", "C"];
console.log(arr8.join("-")); // A-B-C
console.log(arr8.toString()); // A,B,C

// Array Reverse & Sort Methods
let arr9 = [10, 20, 30];                                 // ** Important
console.log(arr9.reverse()); // [30,20,10]              // only array is having reverse() so we can use with only array so if we need any
//                                                          other data type to be reverse then first we need to convert to array

let arr10 = [30, 10, 20];
console.log(arr10.sort()); // [10,20,30]               // only array is having sort() method so we can use only with array like reverse()

let arr11 = [100, 5, 25];
console.log(arr11.sort((a, b) => a - b)); // [5,25,100]     //sort method sort numbers on the bases of -ve, +ve or 0 so always give expression when dealing with numbers


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
console.log(arr18.reduce((acc, curr) => acc + curr, 0)); // 10

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

//************************************************* Activity **************************************************************
// WAP to Reverse Array
const array1 = [1,2,3,4,5]
console.log(array1.reverse())

// WAP to Find Largest Element
const array2 = [1,2,5,4,3];
let large = array2[0];
for( let i of array2){
    if(i>large!){
        large =i;
    }
}
console.log(large)
//                  OR
console.log(Math.max(...array2))

// WAP to Find Smallest Element
const array3 = [1,2,5,4,3];
let small = array3[0];
for( let i of array3){
    if(i<small!){
        small = i;
    }
}
console.log(small)
//                  OR
console.log(Math.min(...array3))

// WAP to Find Sum of Array
const array4 = [1,2,5,4,3];
let sum = 0;
for(let i of array4){
    sum = sum +i;
}
console.log(sum)

// WAP to Find Average of Array
const array5 = [1,2,5,4,3];
let sum1 = 0;
for(let i of array5){
    sum1 = sum1 +i;
}
console.log(sum1/array5.length)

// WAP to find Second Largest
const array6 = [1,2,5,4,3,6,9];
let sortedArray = array6.sort((a,b) => a-b);
console.log(sortedArray[sortedArray.length-1]);

// WAP to find Second Smallest
const array7 = [1,2,5,4,3,6,9];
let sortedArray1 = array7.sort((a,b) => a-b);
console.log(sortedArray1[1]);

// WAP to Remove Duplicates
const array8 = [1,2,2,3,3,5,4,3,6,9];
console.log([...new Set(array8)]);

// WAP to find Frequency Count
const array9 = [1,2,2,3,3,5,4,3,6,9];
let frequency : Record<number,number> = {};
for(let i of array9){
    // if(!frequency.hasOwnProperty(i)){
    //     frequency[i] = 1;
    // }
    // else{
    //     frequency[i] =  frequency[i]! + 1;
    // }
    //              OR
    frequency[i] = (frequency[i] ?? 0) + 1;
}
console.log(frequency)

// WAP to find Duplicate Elements
const array10 = [1,2,2,3,3,5,4,3,6,9];
for(let i of array10){
    if(array10.indexOf(i) !== array10.lastIndexOf(i)){
        console.log(i);
    }
}

// WAP to Count Even Numbers
const array11 = [1,2,3,4,5,6];

// WAP to Count Odd Numbers
const array12 = [1,2,3,4,5,6];

// WAP to Find Sum of Even Numbers
const array13 = [1,2,3,4,5,6];

// WAP to Find Sum of Odd Numbers
const array14 = [1,2,3,4,5,6];

// WAP to Count Positive Numbers
const array15 = [-2,-1,0,1,2,3];

// WAP to Count Negative Numbers
const array16 = [-2,-1,0,1,2,3];

// WAP to Print Array in Reverse without using reverse()
const array17 = [1,2,3,4,5];

// WAP to Find First Element of Array
const array18 = [10,20,30,40,50];

// WAP to Find Last Element of Array
const array19 = [10,20,30,40,50];

// WAP to Check Whether an Element Exists in Array using includes()
const array20 = [10,20,30,40,50];

// WAP to Find Index of Element using indexOf()
const array21 = [10,20,30,40,50];

// WAP to Find Last Occurrence of Element using lastIndexOf()
const array22 = [10,20,30,20,40,20,50];

// WAP to Count Occurrences of Specific Element
const array23 = [10,20,30,20,40,20,50];

// WAP to Find All Indices of Specific Element
const array24 = [10,20,30,20,40,20,50];

// WAP to Find First Duplicate Element using indexOf() and lastIndexOf()
const array25 = [1,2,3,4,2,5,6];

// WAP to Find First Non-Repeating Element using Frequency Count
const array26 = [1,2,2,3,3,4,5,5];

// WAP to Check Whether Array is Sorted
const array27 = [1,2,3,4,5];

// WAP to Sort Array in Ascending Order using sort()
const array28 = [5,2,8,1,9];

// WAP to Sort Array in Descending Order using sort()
const array29 = [5,2,8,1,9];

// WAP to Find Third Largest Element using sort()
const array30 = [5,2,8,1,9,7,6];

// WAP to Find Third Smallest Element using sort()
const array31 = [5,2,8,1,9,7,6];

// WAP to Add Element at End of Array using push()
const array32 = [1,2,3,4];

// WAP to Remove Element from End of Array using pop()
const array33 = [1,2,3,4];

// WAP to Add Element at Beginning of Array using unshift()
const array34 = [1,2,3,4];

// WAP to Remove Element from Beginning of Array using shift()
const array35 = [1,2,3,4];

// WAP to Insert Element at Specific Position using splice()
const array36 = [1,2,4,5];

// WAP to Remove Element at Specific Position using splice()
const array37 = [1,2,3,4,5];

// WAP to Replace Element at Specific Position using splice()
const array38 = [1,2,3,4,5];

// WAP to Extract First N Elements using slice()
const array39 = [1,2,3,4,5,6,7];

// WAP to Extract Last N Elements using slice()
const array40 = [1,2,3,4,5,6,7];

// WAP to Create Copy of Array using slice()
const array41 = [1,2,3,4,5];

// WAP to Create Copy of Array using Spread Operator (...)
const array42 = [1,2,3,4,5];

// WAP to Merge Two Arrays using concat()
const array43a = [1,2,3];
const array43b = [4,5,6];

// WAP to Merge Two Arrays using Spread Operator (...)
const array44a = [1,2,3];
const array44b = [4,5,6];

// WAP to Find Common Elements Between Two Arrays using filter() and includes()
const array45a = [1,2,3,4,5];
const array45b = [4,5,6,7,8];

// WAP to Find Difference Between Two Arrays using filter() and includes()
const array46a = [1,2,3,4,5];
const array46b = [4,5,6,7,8];

// WAP to Find Union of Two Arrays using Set()
const array47a = [1,2,3,4];
const array47b = [3,4,5,6];

// WAP to Remove Duplicate Elements using filter()
const array48 = [1,2,2,3,3,4,5,5];

// WAP to Square Every Element using map()
const array49 = [1,2,3,4,5];

// WAP to Double Every Element using map()
const array50 = [1,2,3,4,5];

// WAP to Add 10 to Every Element using map()
const array51 = [1,2,3,4,5];

// WAP to Convert Number Array into String Array using map()
const array52 = [1,2,3,4,5];

// WAP to Get All Even Numbers using filter()
const array53 = [1,2,3,4,5,6,7,8];

// WAP to Get All Odd Numbers using filter()
const array54 = [1,2,3,4,5,6,7,8];

// WAP to Get All Positive Numbers using filter()
const array55 = [-3,-2,-1,0,1,2,3];

// WAP to Get All Negative Numbers using filter()
const array56 = [-3,-2,-1,0,1,2,3];

// WAP to Get Numbers Greater Than Given Value using filter()
const array57 = [5,10,15,20,25,30];

// WAP to Find Sum of Array using reduce()
const array58 = [1,2,3,4,5];

// WAP to Find Product of Array using reduce()
const array59 = [1,2,3,4,5];

// WAP to Find Largest Element using reduce()
const array60 = [5,2,8,1,9];

// WAP to Find Smallest Element using reduce()
const array61 = [5,2,8,1,9];

// WAP to Find Frequency Count using reduce()
const array62 = [1,2,2,3,3,3,4,5];

// WAP to Find First Even Number using find()
const array63 = [1,3,5,8,10];

// WAP to Find First Odd Number using find()
const array64 = [2,4,6,7,8];

// WAP to Find First Negative Number using find()
const array65 = [5,3,0,-1,-2];

// WAP to Find First Number Greater Than Given Value using find()
const array66 = [5,10,15,20,25];

// WAP to Find Index of First Even Number using findIndex()
const array67 = [1,3,5,8,10];

// WAP to Find Index of First Negative Number using findIndex()
const array68 = [5,3,0,-1,-2];

// WAP to Find Index of First Number Greater Than Given Value using findIndex()
const array69 = [5,10,15,20,25];

// WAP to Check Whether Array Contains Any Even Number using some()
const array70 = [1,3,5,8,9];

// WAP to Check Whether Array Contains Any Negative Number using some()
const array71 = [1,2,3,-1,4];

// WAP to Check Whether Array Contains Any Number Greater Than Given Value using some()
const array72 = [5,10,15,20,25];

// WAP to Check Whether All Numbers are Even using every()
const array73 = [2,4,6,8];

// WAP to Check Whether All Numbers are Positive using every()
const array74 = [1,2,3,4,5];

// WAP to Check Whether All Numbers are Greater Than Zero using every()
const array75 = [1,2,3,4,5];

// WAP to Find Missing Number using reduce()
const array76 = [1,2,3,5];

// WAP to Rotate Array Left by One Position using shift() and push()
const array77 = [1,2,3,4,5];

// WAP to Rotate Array Right by One Position using pop() and unshift()
const array78 = [1,2,3,4,5];

// WAP to Move All Zeros to End using filter()
const array79 = [0,1,0,3,12];

// WAP to Move All Zeros to Beginning using filter()
const array80 = [0,1,0,3,12];

// WAP to Separate Even and Odd Numbers using filter()
const array81 = [1,2,3,4,5,6];

// WAP to Find Pair With Given Sum using Nested Loop
const array82 = [1,2,3,4,5,6];

// WAP to Solve Two Sum Problem using Object or Map
const array83 = [2,7,11,15];

// WAP to Remove Falsy Values using filter()
const array84 = [0,1,false,2,'',3,null,undefined];

// WAP to Flatten Nested Array using flat()
const array85 = [1,[2,3],[4,5]];

// WAP to Flatten Nested Array of Any Depth using flat(Infinity)
const array86 = [1,[2,[3,[4,[5]]]]];

// WAP to Check Whether Two Arrays are Equal using every()
const array87a = [1,2,3,4];
const array87b = [1,2,3,4];

// WAP to Find Longest Consecutive Sequence using Set()
const array88 = [100,4,200,1,3,2];

// WAP to Find Majority Element using Frequency Count
const array89 = [2,2,1,1,1,2,2];

// WAP to Find Product of Array Except Self
const array90 = [1,2,3,4];

// WAP to Find Maximum Subarray Sum (Kadane's Algorithm)
const array91 = [-2,1,-3,4,-1,2,1,-5,4];

// WAP to Find Best Time to Buy and Sell Stock
const array92 = [7,1,5,3,6,4];

// WAP to Perform Binary Search
const array93 = [1,2,3,4,5,6,7,8,9];

// WAP to Merge Two Sorted Arrays using Two Pointer Approach
const array94a = [1,3,5,7];
const array94b = [2,4,6,8];
``