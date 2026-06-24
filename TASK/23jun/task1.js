
//Q1.
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort((a, b) => {
    return a - b;
});
console.log(numbers);


//Q2.
let numbers = [2, 4, 6, 8, 10,];
function evenNumber(arr) {
    return arr.every(num => num % 2 == 0);
}
let Even = evenNumber(numbers);
console.log(Even);


//Q3.
let numbers = [1, 3, 5, 7, 8, 9];
function Even_no(arr) {
    console.log(numbers)
    return arr.some(num => num % 2 === 0);
}

let Even_of_Number = Even_no(numbers);
console.log(Even_of_Number);



//Q4.
// 1.

const numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(" forEach:", numbers1);
numbers1.forEach(function (num) {
    console.log(num);
});


// 2.
const numbers2 = [1, 2, 3, 4, 5];
const squares = numbers2.map(function (num) {
    return num * num;
});
console.log("Squares:", squares);


// 3.
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const oddNumbers = numbers3.filter(function (num) {
    return num % 2 !== 0;
});
console.log("Odd Numbers:", oddNumbers);


// 4. 
const numbers4 = [15, 25, 35, 45, 55, 65, 75, 85, 95, 105];
const numb = numbers4.filter(function (num) {
    return num > 50;
});
console.log("Numbers :", numb);


// 5.:
const numbers5 = [10, 15, 20, 25, 30, 35, 40, 45];
const no = numbers5.map(function (num) {
    return num * 5;
});
const filtered = no.filter(function (num) {
    return num > 100;
});
console.log("Final Result:");
filtered.forEach(function (num) {
    console.log(num);
});
product.product();
