//Syntax:-

//var_declaration var_name: data_type = data;

const is_user_sick: boolean = false;
console.log(is_user_sick);

// ************************************** declaration with constructor *****************************************

// Number Constructor
let bool5 = new Boolean(true);

//*************************************   Boolean Methods *****************************************************/

// Boolean toString() Method
let bool1 = true;
console.log(bool1.toString()); // "true"

let bool2 = false;
console.log(bool2.toString()); // "false"

// Boolean valueOf() Method
let bool3 = true;
console.log(bool3.valueOf()); // true

let bool4 = false;
console.log(bool4.valueOf()); // false

// Boolean Constructor Function
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log(Boolean(NaN)); // false

console.log(Boolean([])); // true
console.log(Boolean({})); // true

// Boolean Type Check
let bool7 = true;
let bool8 = new Boolean(true);

console.log(typeof bool7); // "boolean"
console.log(typeof bool8); // "object"