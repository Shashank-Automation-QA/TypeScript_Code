//*************************************   OBJECT DATA TYPE *****************************************************

// Syntax
let user: {name: string, age: number} = { name: "Shashank", age: 28};
console.log(user.name);                      // Shashank
console.log(user.age);                       // 28


// Object Creation
let user1 = {name: "Shashank", age: 28};
console.log(user1);                          // { name: 'Shashank', age: 28 }


// Access Properties
console.log(user1.name);                    // Shashank
console.log(user1["age"]);                  // 28


// Update Property
user1.age = 29;
console.log(user1);                         // { name: 'Shashank', age: 29 }


// Add Property
let user2: any = {name: "Shashank"};
user2.city = "Bangalore";
console.log(user2);                          // { name: 'Shashank', city: 'Bangalore' }


// Delete Property
delete user2.city;
console.log(user2);                          // { name: 'Shashank' }


// Mixed Data Types
let user3 = {name: "Shashank", age: 28, isEmployee: true};
console.log(user3);                         // { name:'Shashank', age:28, isEmployee:true }


// Nested Object
let user4 = {name: "Shashank", address: {city: "Bangalore", state: "Karnataka"}};
console.log(user4.address.city);        // Bangalore
console.log(user4.address.state);       // Karnataka


// Object With Array
let user5 = {name: "Shashank", skills: ["Playwright", "TypeScript", "Python"]};
console.log(user5.skills);              // ['Playwright','TypeScript','Python']
console.log(user5.skills[0])            // Playwright


// Object Method
let user6 = {
    name: "Shashank",

    greet() {
        return "Hello";
    }
};
console.log(user6.greet());               // Hello


// Object Keys
console.log(Object.keys(user1));          // ['name','age']


// Object Values
console.log(Object.values(user1));        // ['Shashank',29]


// Object Entries
console.log(Object.entries(user1));       // [['name','Shashank'],['age',29]]


// Has Own Property
console.log(user1.hasOwnProperty("name"));      // true
console.log(user1.hasOwnProperty("city"));      // false


// Object Assign
let personal = {name: "Shashank"};
let location = {city: "Bangalore"};
console.log(Object.assign({}, personal, location));         // {name:'Shashank', city:'Bangalore'}


// Spread Operator
let mergedUser = {...personal, city: "Bangalore"};
console.log(mergedUser);            // {name:'Shashank', city:'Bangalore'}


// Object Destructuring
let employee = {name: "Shashank", age: 28};
let { name, age } = employee;
console.log(name);                  // Shashank
console.log(age)                    // 28


// Optional Property
let user7: { name: string, age?: number } = {name: "Shashank"};
console.log(user7);         // {name:'Shashank'}


// Readonly Property
let user8: { readonly id: number, name: string } = {id: 101, name: "Shashank"};
console.log(user8.id);      // 101
// user8.id = 102;
// Error


// Loop Through Object Keys
for (let key in employee) {
    console.log(key);
}

// name
// age


// Loop Through Object Values
for(let key in employee){
    console.log(employee[key as keyof typeof employee]);
}

// Shashank
// 28


// Object Freeze
let user9 = {name: "Shashank"};
Object.freeze(user9);

// user9.name = "Rahul";
// Error

console.log(user9);    // {name:'Shashank'}


// Object Seal
let user10 = {name: "Shashank"};
Object.seal(user10);

user10.name = "Rahul";
console.log(user10);        // {name:'Rahul'}

// After seal can not add or delete properties


// Object From Entries
let entries = [["name", "Shashank"], ["age", 28]];
console.log(Object.fromEntries(entries));            // {name:'Shashank', age:28}

