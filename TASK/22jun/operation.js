//Q1
var arr = [1, 2, 3];
console.log(arr);
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);


//Q2
var queue = [];
queue.push(1,2,3);
console.log(queue);
queue.shift();
console.log(queue);
queue.shift();
console.log(queue);
queue.shift();
console.log(queue);


//Q3
var stack = [];
stack.push(1,2,3);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);


//Q4
var letters = ['b', 'c'];
letters.unshift('a');
console.log(letters);
letters.shift();
console.log(letters);

//Q5

var original = [1, 2, 3, 4, 5];
var reversed = [];
while (original.length > 0) {
    reversed.unshift(original.pop());
} 
console.log(reversed);




//Q6
var names = ['jash', 'Janish', 'rajesh'];
console.log(names);
names.push('Smith');
console.log(names);
names.pop();
console.log(names);
names.unshift('krish');
console.log(names);
names.shift();
console.log(names);



//Q7
var fruits = ['apple', 'orange', 'banana'];
console.log(fruits);
fruits.push('grape');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('pear');
console.log(fruits);
fruits.shift();
console.log(fruits);


//Q8
var arr = [1, 2, 3];
console.log(arr);
arr.splice(0, 1);
console.log(arr);