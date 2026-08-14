//Syntax:-

//var_declaration var_name: data_type = data;

const user_name: string = "singh";
console.log(user_name);

//*************************************   String Methods *****************************************************/

// String Case Converse Methods
let str = "Shashank";
console.log(str.toUpperCase()); // SHASHANK
console.log(str.toLowerCase()); // shashank

// String Character Access Methods
let str1 = "Hello";
console.log(str1.charAt(1)); // e
console.log(str1.at(-1)); // o
console.log(str1[0]); // H

// String Search Methods
let str2 = "Hello World";
console.log(str2.indexOf("o")); // 4
console.log(str2.lastIndexOf("o")); // 7
console.log(str2.includes("World")); // true
console.log(str2.startsWith("Hello")); // true
console.log(str2.endsWith("World")); // true

// String Extracting Methods
let str3 = "JavaScript";
console.log(str3.slice(0, 4)); // Java
console.log(str3.substring(0, 4)); // Java

// String Modification Methods
let str4 = "Hello World";
console.log(str4.replace("World", "TS")); //Hello TS
console.log(str4.replaceAll("o", "*")); //Hell* W*rld

// String Split and Join Methods
let str5 = "a,b,c,d";
console.log(str5.split(",")); //["a", "b", "c", "d"]

// String Remove Spaces Methods
let str6 = " Hello ";
console.log(str6.trim());
console.log(str6.trimStart());
console.log(str6.trimEnd());

// String Repeat Method
let str7 = " Hello ";
console.log(str7.repeat(3)); //Hi Hi Hi

// String Repeat Method
let str8 = "5";
console.log(str8.padStart(3, "0")); //005
console.log(str8.padEnd(3, "0")); //500

// String Concatenation Method
let str9 = "Hello";
let str10 = "World";
console.log(str9.concat(" ", str10)); //Hello World

// String Match and Search Method
let str11 = "abc123xyz";
console.log(str11.match(/\d+/));  //['123']
console.log(str11.search(/\d+/)); //3

// String Extract Matching Parts Methods
let str12 = "cat bat rat";
console.log(str12.matchAll(/at/g));

// String Compare Methods
console.log("a".localeCompare("b")); // -1
console.log("b".localeCompare("a")); // 1
console.log("a".localeCompare("a")); // 0

// String Unicode Methods
let str13 = "A";
console.log(str13.charCodeAt(0)); // 65
console.log(str13.codePointAt(0)); // 65

// String Conversion Methods
let str14 = "Hello";
console.log(str14.toString());
console.log(str14.valueOf());

// String New ES2022 Methods
let str15 = "Hello World";
console.log(str15.isWellFormed());
console.log(str15.toWellFormed());


