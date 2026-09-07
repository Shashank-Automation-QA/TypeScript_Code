// Syntax:-

// var_declaration var_name: data_type = value;

//*********************************************  Any Type  ************************************************

let data1: any = "Shashank";
console.log(data1);     // Shashank

data1 = 100;
console.log(data1);     // 100

data1 = true;
console.log(data1);     // true


// Mixed Data
let data2: any = ["Shashank", 100, true];
console.log(data2);                             // ["Shashank",100,true]


// Object
let data3: any = {name: "Shashank", age: 28};
console.log(data3);                             // {name:"Shashank", age:28}


// Function
let data4: any = function () {
    return "Hello";
};
console.log(data4());       // Hello


// Any Allows Wrong Operations
let data5: any = "Shashank";
console.log(data5.toUpperCase());       // SHASHANK

data5 = 100;
console.log(data5.toUpperCase());       // Runtime Error

//*******************************************   Unknown Type   ***************************************************

let value1: unknown = "Shashank";
console.log(value1);                    // Shashank


// Reassign Different Values
let value2: unknown = "Hello";
value2 = 100;
value2 = true;
console.log(value2);                    // true


// Type Checking Required
let value3: unknown = "Shashank";
if(typeof value3 === "string"){
    console.log(value3.toUpperCase());      // SHASHANK
}

// Without Type Check
let value4: unknown = "Hello";
// console.log(value4.toUpperCase());
// Error

// Unknown Array
let value5: unknown = [10,20,30];
console.log(value5);                    // [10,20,30]

//************************************* VOID DATA TYPE *****************************************************
// when function is not returning anything we use void return type

function showMessage(): void {
    console.log("Hello");
}
showMessage();                   // Hello


// Return Nothing
function greet(): void {
    return;
}
console.log(greet());           // undefined


// Arrow Function
const show = (): void => {
    console.log("Welcome");
};
show();                         // Welcome


// Function With Parameters
function printName(name: string): void {
    console.log(name);
}
printName("Shashank");      // Shashank

//************************************* NEVER DATA TYPE *****************************************************
// never is a special TypeScript type used when a function can never
// successfully complete, such as when it always throws an error or runs
// in an infinite loop.

function throwError(): never {
    throw new Error("Something went wrong");
}


// Infinite Loop
function infiniteLoop(): never {
    while(true){
        console.log("Running...");
    }
}


// Usage Example
function checkAge(age: number): string {
    if(age >= 18){
        return "Adult";
    }
    throw new Error("Invalid Age");
}


// Never Variable
let value: never;
// value = 100;
// Error

//************************************* NULL DATA TYPE *****************************************************

let value6: null = null;
console.log(value6);                            // null

// Only Null Allowed
let value7: null = null;
// value7 = "Hello";                            // Error

// Object Reset Example
let user: string | null = "Shashank";
console.log(user);                              // Shashank

user = null;
console.log(user);                              // null

//*************************************  UNDEFINED DATA TYPE *****************************************************

let value8: undefined = undefined;
console.log(value8);                            // undefined


// Variable Not Assigned
let name1;
console.log(name1);                             // undefined


// Function Without Return
function test() {}
console.log(test());                            // undefined


// Optional Parameter
function greet1(name?: string) {
    console.log(name);
}
greet1();                                        // undefined