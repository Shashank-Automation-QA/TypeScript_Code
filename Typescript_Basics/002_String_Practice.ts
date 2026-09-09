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


//***************************************** Activity **********************************************************

// WAP to Reverse String
const name = "Shashank";
let revName = "";
for (let i of name) {
    revName = i + revName}
console.log(revName);

// WAP to Check Palindrome
let name1 = "madam";
let rev = "";
for (let i of name1){
    rev = i + rev;
}
if (name1 === rev){
    console.log("string is palindrome");
}
else{
    console.log("String not palindrome");
}

// WAP to Check Anagram

// WAP to Count Vowels
const name2 = "Shashank";
let count=0;
for (let i of name2){
    if ("AEIOUaeiou".includes(i)) {
        count++;
    }
}
console.log(count)

// WAP to Count Frequency of Characters
const name3 = "shashank";
let frequency :Record<string, number> = {};
for(let i of name3){
    if (!frequency.hasOwnProperty(i)) {
        frequency[i] =  1;
    }
    else{
        // frequency[i] = frequency[i]! + 1;
        //             OR
        frequency[i] = (frequency[i] ?? 0) + 1;
    }
}
console.log(frequency);

// Note: We can optimize this code by using nullish coalescing
const name4 = "shashank";
let frequency1: Record<string,number> = {};
for(let i of name4){
    frequency1[i] = (frequency1[i] ?? 0) + 1;
}
console.log(frequency1)

// WAP to Remove Duplicates from String
const name5 = "shashank";
let result = "";
for(let i of name5){
    if(!result.includes(i)){
        result += i;
    }
}
console.log(result);

// Note: We can optimize this code by using Set concept see below example
const name6 = "shashank";
// let result1;
// result1 = new Set(name6);
// result1= [...result1];
// result1 = result1.join("");
// console.log(result1);
//                       OR
console.log( [...new Set(name6)].join("") );

// WAP to Find Duplicate Characters
const name7 = "shashank";
let check = ""
let withoutDuplicate = new Set<string>();
for(let i of name7){
    if(!check.includes(i)){
        check = check + i;
    }
    else{
        withoutDuplicate.add(i);
    }
}
console.log([...withoutDuplicate]);

// WAP to Find Longest Words
const sentence = "Hello my name is Shashank i am doing training and watching movie Godzilla";
let count1 = 0;
let longestWord: string[] = []
for(let i of sentence.split(" ")){
    if(i.length > count){
        count1 = i.length;
        longestWord = [i];
    }
    else if(i.length === count){
        longestWord.push(i);
    }
}
console.log(longestWord);

// WAP to Reverse Each Word in a String
const sentence1 = "Hello my name is Shashank i am doing training and watching movie Godzilla";
let result1 = "";
for(let word of sentence1.split(" ")){
    let reverseWord = "";                 // In python, we were using slicing concepts to this was not required but there also if we want to follow up this
    for(let char of word){                      // approach then we need to reset the value
        reverseWord = char + reverseWord;
    }
    result1 = result1 + reverseWord + " ";
}
console.log(result1);

// WAP to Count Words in a String
const sentence2 = "Hello my name is Shashank i am doing training and watching movie Godzilla";
let count2 = 0;
for(let word of sentence2.split(" ")){
    count+=1;
}
console.log(count2);
//                   OR
const sentence3 = "Hello my name is Shashank i am doing training and watching movie Godzilla";
let words = sentence3.split(" ");
console.log(words.length);

// WAP to Find First Non-Repeated Character
const name8 = "shashank";
let dict : Record<string,number> = {};
for(let i of name8){
    dict[i] = (dict[i] ?? 0) + 1;
}
for(let i of name8){
    if(dict[i]===1){
        console.log(i);
        break;
    }
}
//             OR
const name9 = "shashank";

for (const ch of name9) {
    if (name9.indexOf(ch) === name9.lastIndexOf(ch)) {
        console.log(ch);
        break;
    }
}

// WAP to Perform String Compression

// WAP to Check Rotation of Strings

// WAP to Capitalize First Letter of a String
const sentence4 = "Hello my name is Shashank i am doing training and watching movie Godzilla";
let result2 = "";
for(let word of sentence4.split(" ")){
    result2 = result2 + word.charAt(0).toUpperCase() + word.slice(1) + " ";   // word[0] = word.charAt(0) we have to write like this
}
console.log(result2);

// WAP to Check Substring in a String
const name10 = "shashank";
let sub = "sha";
if(name10.includes(sub)){
    console.log("Yes, Its a substring");
}
else{
    console.log("No, Its not substring");
}

// WAP to Count Special Characters in a String
const value = "sha123@$%";
let count3 = 0;
for(let i of value){
    if(/[^a-zA-Z0-9]/.test(i)){       //There is no method for identify string and special character like python
        count3+=1;        //              so by regex only we are identifying this is the easiest way
    }
}
console.log(count3);

// WAP to Remove Spaces from a String
const value1= " Hi I am here to remove spaces "
let result3 = value1.replaceAll(" ", "");
console.log(result3)
//                     OR
let result4 = value1.replaceAll(/\s/g, "")     // for removing (space, tab and next line)
console.log(result4)

// WAP to Find Maximum Occurring Character
//
// WAP to Sort Characters in a String
//
// WAP to Convert String to Title Case