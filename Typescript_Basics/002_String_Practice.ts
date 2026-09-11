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
console.log(str11.search(/\d+/)); //3   don't get confuse search always give index

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
const ana = ["listen", "silent", "ate", "tea", "go"];
let anaResult:Record<string,string[]> ={};
for(let word of ana){
    let sorted = word.split("").sort().join("");
    // if(!anaResult.hasOwnProperty(sorted)){
    //     anaResult[sorted] = [word];
    // }
    // else{
    //     anaResult[sorted]?.push(word);
    // }
    // //              OR
    (anaResult[sorted] ??= []).push(word);
}
console.log(anaResult)

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
const compressionString = "aaabbccb";
let listStr = [...compressionString];
let count4 = 1;
let finalResult = "";
for (let i in listStr) {
    if(listStr[i] === listStr[Number(i)+1]){
        count4+=1;
    }
    else{
        finalResult = finalResult + listStr[i] + count4
        count4=1
    }
}
console.log(finalResult)

// WAP to Check Rotation of Strings
const stg1 = "abcd";
const stg2 = "cdab";
if((stg1+stg1).includes(stg2)){
    console.log("rotation");
}
else{
console.log("rotation");
}

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
console.log(result3);
//                     OR
let result4 = value1.replaceAll(/\s/g, "")     // for removing (space, tab and next line)
console.log(result4);

// WAP to Find Maximum Occurring Character
const value2 = "shashank";
let max = 0;
let store:Record<string,number> = {};
for(let i of value2){
        store[i] = (store[i] ?? 0) + 1 ;
        if(store[i]>max){
            max = store[i];
        }
}
for(let i in store){
    if(store[i]===max){
        console.log(i);
    }
}

// WAP to Sort Characters in a String
const value3 = "shashank";
// let list = [...value3];
// list = list.sort();
// let result5 = list.join("");
// console.log(result5);

//      OR

console.log(([...value3].sort()).join(""));

// WAP to Convert String to Title Case
const sentence5 = "hello i am converting string to title case";
let result5 = "";
for(let word of sentence5.split(" ")){
    result5 = result5 + ( word.charAt(0) ).toUpperCase() + word.slice(1,word.length) + " ";
}
console.log(result5);

// ************************************ Scenario Based Question *************************************************

// 1. Check whether a URL starts with "https://"
//    Input: https://google.com
//    Output: Valid URL
const input =  "https://google.com";
if(input.startsWith("https://")){
    console.log("Valid URL");
}

// 2. Check whether a file name starts with "Report"
//    Input: Report_January.pdf
//    Output: true
const input1 =  "Report_January.pdf";
console.log(input1.startsWith("Report"));

// 3. Check whether an email ends with ".com"
//    Input: abc@gmail.com
//    Output: true
const input2 =  "abc@gmail.com";
console.log(input2.endsWith(".com"));

// 4. Check whether a file is a PDF
//    Input: Resume.pdf
//    Output: PDF File
const input3 =  "Resume.pdf";
console.log(input3.endsWith("pdf"));

// 5. Check if user entered an empty string after trimming spaces
//    Input: "      "
//    Output: Empty Input
const input4 =  "     ";
if(input4.trim()===""){
    console.log("Empty Input");
}

// 6. Count words after removing leading and trailing spaces
//    Input: "   hello world typescript   "
//    Output: 3
const input5 = "   hello world typescript   ";
console.log( ((input5.trim()).split(" ")).length );

// 7. Remove only leading spaces
//    Input: "     Shashank"
//    Output: "Shashank"
const input6 = "     Shashank";
console.log(input6.trimStart());

// 8. Remove only trailing spaces
//    Input: "Shashank     "
//    Output: "Shashank"
const input7 = "Shashank     ";
console.log(input7.trimEnd());

// 9. Replace only first occurrence of a word
//    Input: "hello hello hello"
//    Output: "hi hello hello"
const input8 = "hello hello hello";
console.log(input8.replace("hello","hi"))

// 10. Replace first digit with X
//     Input: "abc123"
//     Output: "abcX23"
const input9 = "abc123";
let input10 = "";
for(let i of input9){
    if(/[0-9]/.test(i)){
        input10 = input9.replace(i, "X");
        break;
    }
}
console.log(input10);

// 11. Print pattern using repeat()
//
//     *
//     **
//     ***
//     ****
//     *****
for(let i of [...Array(6).keys()]){
    console.log("*".repeat(Number(i)));
}
//           OR
for(let i=0 ; i<=5 ; i++){
    console.log("*".repeat(Number(i)));
}

// 12. Print ########## using repeat() only
const value4 = "##########".length;
console.log("#".repeat(value4));

// 13. Convert 7 into 007
//     Output: "007"
const value5 = "7";
console.log(value5.padStart(value5.length+2, "0"));

// 14. Convert 45 into 00045
//     Output: "00045"
const value6 = 45;
console.log(String(value6).padStart(String(value6).length + 3, "0"));

// 15. Format output using padEnd()
//
//     Apple.....100
//     Banana....50
//     Mango.....80
console.log("Apple".padEnd(10, ".") + "100");
console.log("Banana".padEnd(10, ".") + "50");
console.log("Mango".padEnd(10, ".") + "80");

// 16. Extract username from email
//     Input: shashank@gmail.com
//     Output: shashank
const value7 = "shashank@gmail.com";
console.log(value7.substring(0 , value7.indexOf("@") ));
//             OR
const value8 = "shashank@gmail.com";
console.log(value8.split("@")[0]);

// 17. Extract domain name from email
//     Input: shashank@gmail.com
//     Output: gmail.com
const value9= "shashank@gmail.com";
console.log(value9.substring( value9.indexOf("@")+1 ,value9.length ));

// 18. Count digits in a string
//     Input: abc123xyz45
//     Output: 5
console.log("abc123xyz45".match(/\d/g)?.length);       // ? is required here because if someone pass "abc" in that case there is no numbers so it will return null and null.lenght give error

// 19. Extract all digits from a string
//     Input: abc123xyz45
//     Output: ["1","2","3","4","5"]
console.log("abc123xyz45".match(/\d/g));

// 20. Extract all vowels from a string
//     Input: Shashank Singh
//     Output: ["a","a","a","i"]
console.log("Shashank Singh".match(/[aeiouAEIOU]/g));
console.log("Shashank Singh".match(/[aeiou]/gi));        //>>>  i indicates ignore case-sensitive

// 21. Find position of first digit
//     Input: abc123
//     Output: 3
console.log("abc123".search(/\d/));

// 22. Find position of first special character
//     Input: abc@123
//     Output: 3
console.log("abc@123".search(/[^a-zA-Z\d]/));

// 23. Case-insensitive palindrome
//     Input: Madam
//     Output: Palindrome
const value10 = "Madam";
let input11 = value10.toUpperCase();
let reverse = "";
for(let i=input11.length-1 ; i >= 0 ; i--){
    reverse = reverse + input11[i];
}
if(input11 === reverse){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}

// 24. Case-insensitive anagram
//     Input:
//     Listen
//     Silent
//     Output: Anagram
const val1 = "Listen";
const val2 = "Silent";
if(val1.toUpperCase().split("").sort().join("") === val2.toUpperCase().split("").sort().join("")){
    console.log("Anagram");
}

// 25. Compare two strings alphabetically using localeCompare()
//     Input:
//     apple
//     banana
//
//     Output: -1
console.log("apple".localeCompare("Banana"));

// 26. Sort array of strings alphabetically
//     Input:
//     ["banana","apple","cat"]
//
//     Output:
//     ["apple","banana","cat"]
console.log(["banana","apple","cat"].sort());

// 27. Extract file extension
//     Input: resume.pdf
//     Output: pdf
console.log("resume.pdf".substring("resume.pdf".indexOf(".")+1));

// 28. Mask credit card number
//     Input: 1234567890123456
//     Output: ************3456
const Input = "1234567890123456"
console.log("*".repeat(Input.length-4) + Input.substring(Input.length-4));

// 29. Convert snake_case to camelCase
//     Input: my_name_is_shashank
//     Output: myNameIsShashank
const input12 = "my_name_is_shashank";
let listOfInput = input12.split("_");
let res = "";
for(let word of listOfInput){
    if(res===""){
        res = res + word;
    }
    else{
        res = res + word[0]?.toUpperCase() + word.substring(1);
    }
}
console.log(res)

// 30. Convert camelCase to snake_case
//     Input: myNameIsShashank
//     Output: my_name_is_shashank
const input13 = "myNameIsShashank";
let res1 = "";
// for(let i of input13){
//     if(i.match(/[A-Z]/)){
//         console.log(i)
//         res1 = res1 + "_" + i.toLowerCase();
//     }
//     else{
//     res1 = res1 + i;
//     }
// }

//**********  OR   **********

for (let i of input13) {
    if (i !== i.toLowerCase()) {
        res1 += "_" + i.toLowerCase();
    } else {
        res1 += i;
    }
}
console.log(res1)
