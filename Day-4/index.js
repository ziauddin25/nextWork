let price = 1000;
let discount = 20;
function calculateDiscount() {
    let finalPrice = price - (price * discount / 100);
    return finalPrice;

}

console.log('Final price:', calculateDiscount());


let burgerPrice = 500;
let tax = 5; // 5%

function calculateTax() {
    let taxValue = burgerPrice * tax / 100;
    return taxValue;
}

console.log('Tax tk:', calculateTax());


let grade = 69;
function getGrade() {
    if (grade >= 80) {
        console.log('A+');
    } else if (grade >= 70) {
        console.log('A');
        
    } else if (grade >= 60) {
        console.log('A-');
    } else if (grade >= 50) {
        console.log('B');
    } else if (grade >= 40) {
        console.log('C');
    } else if (grade >= 33) {
        console.log('D');
    }
    else {
        console.log('Fail');
    }
}

getGrade();


let number = [1,2,3,4,5,6,7,8,9,10];
let evenNum = [];

function isEven() {
    for(let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            evenNum.push(number[i]);
        }
    }
}

isEven();
console.log('even num:', evenNum);


let word = 'madam';
let real = [];
let reverse = [];

function isPalindrome() {
    for (let i = 0; i < word.length; i++) {
        real.push(word[i]);
    }

    for (let i = word.length - 1; i >= 0; i--) {
       reverse.push(word[i])
    }

    if (real === reverse) {
        console.log('same');
    } else {
        console.log('no');
        
    }
}

isPalindrome();
console.log(real);
console.log(reverse);


let numS = [1,2,3,4,5,4, 3, 2,1]

let seen = [];
let duplicate = [];

for (let i = 0; i < numS.length; i++) {
    let y = numS[i];

    if (seen.includes(y)) {
        duplicate.push(y);
    } else {
        seen.push(y)
    }

    if (seen.includes(y) === discount.includes(y)) {
        console.log('lol');
        
    } else {
        console.log('chod');
        
    }

    
}

console.log(duplicate);


// for(let i = 5; i > 0; i--) {
//     console.log(i);
    
// }


// let user = 'abia';
// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
    
// }
// for (let i = user.length - 1; i >= 0; i--) {
//     console.log(user[i]);
    
// }

// let ll = 'ppp';
// console.log(ll.includes());
