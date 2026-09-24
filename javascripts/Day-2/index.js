// first here added a gec: global execution context.
// first have this and window. these keyword default.
console.log(this === window); // true.

/*
global execution context: have 2 phase: 
1. creation phase. window object and this.
2. execution phase.

. Global Execution Context (GEC)
যখন JS ফাইল চালু হয়, সবার আগে GEC তৈরি হয়

মাত্র একটা GEC থাকে পুরো প্রোগ্রামে

এখানে this = window (ব্রাউজারে) বা globalThis (Node.js)

যতক্ষণ প্রোগ্রাম চলে, ততক্ষণ GEC বেঁচে থাকে.

২. Function Execution Context (FEC)
প্রতিবার কোনো ফাংশন কল করলে একটা নতুন FEC তৈরি হয়

ফাংশন শেষ হলে সেই FEC মুছে যায়

প্রতিটা FEC-এর নিজের আলাদা this, variables, arguments থাকে.
গুরুত্বপূর্ণ: একই ফাংশন দুইবার কল করলে দুইবার আলাদা FEC তৈরি হয় — একটার data অন্যটার সাথে মেশে না। 

*/ 


const userName = 'josef'; // this variables is under GEC. 
console.log(userName);

function userSay () { 
    // here all varibles, arguments , this under FEC.
    let name = 'abul';
    let age = 69;

    console.log(`user info: ${name} ${age}`);
    
};

userSay(); // call func then create a FEC. every func call make a FEC. 
userSay(); // call this func then create a FEC.


// 🔹 Creation Phase (তৈরি হওয়ার ধাপ)
// এই ধাপে JavaScript কোড চালায় না, শুধু স্ক্যান করে মেমোরি সাজায়।

// তিনটা কাজ হয়:

// this নির্ধারণ করে (Global-এ window, Function-এ কল-এর উপর নির্ভর)

// Lexical Environment তৈরি করে (variable + ফাংশন কোথায় আছে)

// Hoisting করে — variable/function-দের জন্য আগেই জায়গা বানায়

console.log(a);        // undefined (hoisting-এর কারণ)
console.log(greet());  // "Hello" (ফাংশন পুরোপুরি hoist হয়)

var a = 10;

function greet() {
  return "Hello";
}
// কেন undefined এলো? কারণ Creation Phase-এ var a মেমোরিতে রাখা হলো কিন্তু তার মান 10 এখনো সেট হয়নি — execution phase-এ হবে।

// 🔹 Execution Phase (চালানোর ধাপ)
// এখন কোড উপর থেকে নিচে এক লাইন এক লাইন চলে।

// var a = 10; → এখন a-তে 10 বসলো

// ফাংশন কল হলে → নতুন FEC তৈরি হলো

let plate = '🍽️';
console.log(plate); // এখন 🍽️

// function infinite() {
//     infinite();
// }

// infinite();

// function countdown (n) {
//     if (n === 0) return;

//     console.log(n);
//     countdown(n-1);
// }

// countdown(20000);


//  call stack. LIFO, last in first out. here call stack check hole func and call out 1 by 1 last to first. stack frame: here take func data.

console.log('A');

function first () {
    console.log('B');

    second();
    console.log('C');
    
}

function second() {
    console.log('D');

}

first();
console.log('E');

// here first call one, then here check and call two then check two func here get func three then call this and finall all execution completed and empty stack, clear FEC then return GEC and check this then stop the execution term): it's really execution and call stack workflow.

function one() {
    console.log('001');
    two();
    console.log('final call it(: 00000....):');
    
}

function two() {
    three();
    console.log('after call func three):');
    
}

function three() {
    console.log("Hello");
}

one();
console.log('finally call it. this is a under of GEC.');



// hoisting: hoisting is a javacript value execute. this take top under scope. 
// var is hiosting but get a undefind. let/const refError, tdz- temporry dead zone. funcion hoisting is clear but func expressition not hiosting. 

console.log(v);

var v = 69;

// console.log(l); // refError. so, let don't hoisting. 
let l = 'let';
// console.log(cons); // refError.
const cons = 'const!';

sayFunc();

function sayFunc () {
    console.log('say func):');
};

varFunc(); // here show typeError.
var varFunc = function() {
    console.log('var func):');
}

varFunc(); // here show typeError.
var varFunc = function() {
    console.log('var func):');
}

constFunc(); // here show refError.
const constFunc = function() {
    console.log('var func):');
}