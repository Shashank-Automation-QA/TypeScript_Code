//Syntax:-

//var_declaration var_name: data_type = data;

const user_age: number = 32;
const user_body_temp: number = 97.8;
console.log(user_age);
console.log(user_body_temp);

// ************************************** declaration with constructor *****************************************

// Number Constructor
let num3 = new Number(100);

//*************************************   Number Methods *****************************************************/

// Number Formatting Methods
let num = 123.4567;
console.log(num.toFixed(2)); // 123.46
console.log(num.toPrecision(4)); // 123.5
console.log(num.toExponential()); // 1.234567e+2
console.log(num.toExponential(2)); // 1.23e+2

// Number Conversion Methods
let num1 = 123;
console.log(num1.toString()); // "123"
console.log(num1.valueOf()); // 123

// Number Locale Formatting Methods
let num2 = 1234567;
console.log(num2.toLocaleString()); // 1,234,567
console.log(num2.toLocaleString("en-IN")); // 12,34,567

// Number Validation Methods
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10)); // false

console.log(Number.isSafeInteger(100)); // true
console.log(Number.isSafeInteger(10.5)); // false

// Number Parsing Methods
console.log(Number.parseInt("123")); // 123
console.log(Number.parseInt("101", 2)); // 5

console.log(Number.parseFloat("123.45")); // 123.45
console.log(Number.parseFloat("10.5abc")); // 10.5

// Number Constants / Properties
console.log(Number.MAX_VALUE); // Largest possible number
console.log(Number.MIN_VALUE); // Smallest positive number

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

console.log(Number.NaN); // NaN