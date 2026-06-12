const students =
[
{
name: "Ritu Raj",
totalMarks: 85,
age: 22,
city: "Delhi",
isGraduated: true,
registrationNumber: 12345,
hobbies: ["Reading", "Traveling", "Cooking"],
},
{
name: "Mradul",
age: 19,
totalMarks: 90,
city: "Delhi",
isGraduated: true,
registrationNumber: 5678,
hobbies: ["Reading", "Traveling", "Cooking"],
},
{
name: "Harsh",
age: 20,
totalMarks: 88,
city: "Delhi",
isGraduated: true,
registrationNumber: 78910,
hobbies: ["Reading", "Traveling", "Cooking"],
},
{
name: "Anandi",
age: 19,
totalMarks: 92,
city: "Delhi",
isGraduated: true,
registrationNumber: 7789,
hobbies: ["Reading", "Traveling", "Cooking"],
}
];

//console.log(students);

const arr=[2,3,4,5,6];

const doubledArr= arr.map((num)=>{
return num*2;
});

console.log("Original Array:", arr);
console.log("Doubled Array:", doubledArr);

// map, filter, reduce, function of objects, destructuring, spread operator, rest operator, classes, inheritance, encapsulation, polymorphism, abstraction, modules, promises, async/await, error handling, callbacks, event loop, closures, hoisting, scope, this keyword, prototype chain, ES6 features (let, const, arrow functions, template literals), DOM manipulation, AJAX, JSON parsing/stringifying.



const studentsAbove85 = students.filter(student => student.totalMarks > 85);

console.log("Students with Total Marks above 85:", studentsAbove85);

