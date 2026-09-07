//*************************************   ENUM NOTES *****************************************************
// Enum is used to define a fixed set of constant values.

enum Status {Pass, Fail, Skip}
let result: Status = Status.Pass;
console.log(result);               // 0

//*************************************   NUMERIC ENUM *****************************************************

enum Status1 {Pass, Fail, Skip}
console.log(Status1.Pass);         // 0
console.log(Status1.Fail);         // 1
console.log(Status1.Skip);         // 2


// Access Enum Value
let statusValue: Status1 = Status1.Fail;
console.log(statusValue);          // 1

//*************************************   CUSTOM NUMERIC ENUM *****************************************************

enum Status2 {Pass = 100, Fail = 200, Skip = 300}
console.log(Status2.Pass);         // 100
console.log(Status2.Fail);         // 200
console.log(Status2.Skip);         // 300

//*************************************   AUTO INCREMENT ENUM *****************************************************

enum Status3 {Pass = 1, Fail, Skip}
console.log(Status3.Pass);         // 1
console.log(Status3.Fail);         // 2
console.log(Status3.Skip);         // 3

//*************************************   STRING ENUM *****************************************************

enum Browser {Chrome = "chrome", Firefox = "firefox", Edge = "edge"}

console.log(Browser.Chrome);        // chrome
console.log(Browser.Firefox);       // firefox


// Enum Variable

let browser: Browser = Browser.Chrome;
console.log(browser);               // chrome


//*************************************   HETEROGENEOUS ENUM *****************************************************

enum Data {Name = "Shashank", Age = 28}
console.log(Data.Name);                     // Shashank
console.log(Data.Age);                      // 28

//*************************************   REVERSE MAPPING *****************************************************
enum TestStatus {Pass, Fail, Skip}
console.log(TestStatus[0]);                         // Pass
console.log(TestStatus[1]);                         // Fail
console.log(TestStatus[2]);                         // Skip

// Enum To Object
enum Color {Red, Green, Blue}
console.log(Color);
/*
{
  '0':'Red',
  '1':'Green',
  '2':'Blue',
  Red:0,
  Green:1,
  Blue:2
}
*/

//*************************************   GET ALL ENUM KEYS *****************************************************
enum Days {Monday, Tuesday, Wednesday}
console.log(Object.keys(Days));

/*
[
'0',
'1',
'2',
'Monday',
'Tuesday',
'Wednesday'
]
*/


//*************************************   GET ALL ENUM VALUES *****************************************************
console.log(Object.values(Days));

/*
[
'Monday',
'Tuesday',
'Wednesday',
0,
1,
2
]
*/


//*************************************   ENUM IN FUNCTION *****************************************************
enum Role {Admin, User, Guest}
function checkRole(role: Role) {
    console.log(role);
}
checkRole(Role.Admin);      // 0

//*************************************   ENUM IN SWITCH *****************************************************
enum Result {Pass, Fail, Skip}
let output = Result.Pass;
switch(output){
    case Result.Pass:
        console.log("Test Passed");
        break;

    // case Result.Fail:
    //     console.log("Test Failed");
    //     break;
    //
    // case Result.Skip:
    //     console.log("Test Skipped");
    //     break;
}

// Test Passed

//*************************************   CONST ENUM *****************************************************
const enum Environment {DEV, QA, PROD}
console.log(Environment.QA);                                // 1

