// Q1. 
function printHelloWorld() {
    console.log("Hello World");
}
printHelloWorld();


// Q4. 
function printName(name) {
    console.log(name);
}
printName("Nikhil");
printName("Alpesh");

// Q6. 
function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
console.log(randomNumber());

// Q7. 
function sum(a,b) {
    return a + b;
}
console.log(sum(20,30));
console.log(sum(50,75));


//  Q9.
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
console.log(factorial(10));