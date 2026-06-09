 
 // Task 1 - Variables with Prompt
let studentName = prompt("Enter Student Name:");
const collegeName = prompt("Enter College Name:");
var age = prompt("Enter Age:");

console.log("Student Name:", studentName);
console.log("College Name:", collegeName);
console.log("Age:", age);

// Task 2 
let city = prompt("Enter City Name:");
console.log("Before Change:", city);

city = "Ahmedabad";
console.log("After Change:", city);


// Task 3
const country = prompt("Enter Country Name:");
console.log(country);

Error
country = "India";
console.log(country);

// Task 4

let a = 25;
let b = 10;

prompt("Press OK to see Arithmetic Operations");

console.log("Addition = " + (a + b));
console.log("Subtraction = " + (a - b));
console.log("Multiplication = " + (a * b));
console.log("Division = " + (a / b));
console.log("Modulus = " + (a % b));

// Task 5

let count = 5;
console.log("Original Value =", count);
count++;
console.log("After Increment =", count);
count--;
console.log("After Decrement =", count);

//Task 6
let marks = 50;
marks += 10;
console.log("After += 10 :", marks);
marks -= 5;
console.log("After -= 5 :", marks);
marks *= 2;
console.log("After *= 2 :", marks);
marks /= 5;
console.log("After /= 5 :", marks);

//Task 7

let salary = 10000
salary += 2000;
console.log("Updated Salary =", salary);

//Task 8

let x = 20;
let y = 30;

console.log("x == y :", x == y);
console.log("x != y :", x != y);
console.log("x > y :", x > y);
console.log("x < y :", x < y);
console.log("x >= y :", x >= y);
console.log("x <= y :", x <= y);

//Task 9
let num1 = '10';
let num2 = 10;

console.log("num1 == num2 :", num1 == num2);
console.log("num1 === num2 :", num1 === num2);

//Task 10
let age = 22;
let hasLicense = true;

console.log("Can Drive =", age >= 18 && hasLicense);

//Task 11
let isWeekend = false;
let isHoliday = true;

console.log("Office Closed =", isWeekend || isHoliday);

//Task 12
let isLoggedIn = prompt("Are you logged in? (true/false)") === "true";
console.log("isLoggedIn =", isLoggedIn);
console.log("After ! Operator =", !isLoggedIn);

//Task 13
console.log("This is a normal message.");
console.warn("This is a warning message.");
console.error("This is an error message.");

//Task 14
console.time("test");

for (let i = 1; i <= 100000; i++) {
    console.log(i);
}

console.timeEnd("test");

//Task 15
let students = [];

for(let i = 0; i < 5; i++) {
    students[i] = prompt("Enter Student " + (i + 1) + " Name:");
}

console.table(students);

// Task 16
console.log("Hello JavaScript");
console.clear(); 

// Task 17
let heading = document.getElementById("heading");
console.log(heading);

// Task 18
let paragraphs = document.getElementsByClassName("demo");
console.log(paragraphs);

// Task 19
let listItems = document.getElementsByTagName("li");
console.log(listItems);

// Task 20
let title = document.querySelector("#title");
console.log(title);

let allTitles = document.querySelectorAll("#title");
console.log(allTitles);

// innerHTML
title.innerHTML = "<b>Hello JavaScript</b>";
console.log(title.innerHTML);

// innerText
title.innerText = "Hello JS";
console.log(title.innerText);

// textContent
title.textContent = "Hello JavaScript World";
console.log(title.textContent);