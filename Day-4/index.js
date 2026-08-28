// 1. calculateDiscount
function calculateDiscount(price, discount) {
    let finalPrice = price - (price * discount / 100);
    return finalPrice;

}

console.log('Final price:', calculateDiscount(1200, 15));


// 2.calculateTax() 
function calculateTax(burgerPrice, tax) {
    let taxValue = burgerPrice * tax / 100;
    return taxValue;
}

console.log('Tax tk:', calculateTax(500, 5));

// 3.getGrade()
function getGrade(grade) {
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

getGrade(69);

//4.isEven()
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

//5.isPalindrome()
function isPalindrome(text) {
    let left = 0;
    let right = text.length - 1;

    while (left < right) {
        if (text[left] !== text[right]) {
            return 'No!'
        }

        left++;
        right--;
    }

    return 'This is palindrome'
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('hello'));

//6.findLargest()
let lNumber = [10, 20, 40, 20, 45, 10];
let largeNum = lNumber[0];
function findLargest() {
    for (let i = 0; i < lNumber.length; i++) {
        if (lNumber[i] > largeNum) {
            largeNum = lNumber[i]
        }
        // console.log(lNumber[i]);
    }
}

findLargest();
console.log(largeNum);

//7.convertTemperature()
function convertTemperature(celcius, fahrenheit) {
    let fahr = (celcius * 9/5) + 32;  //celcius to fahrenheit
    console.log('fahrenheit:', fahr.toFixed());
    
    let cel = (fahrenheit - 32) * 5/9; // fahrenheit to celcius
    console.log('celcius:', cel.toFixed());
    
}

convertTemperature(22, 78);

// 8.calculateAge()

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    let finalAge = currentYear - birthYear;
    console.log('finalAge:', finalAge);
    
}

calculateAge(2002);

//9.formatName()
function formatName(firstName, lastName) {
    let userName = firstName + lastName;
    console.log('user name:', userName);
    
}

formatName('Alfred', ' Josef')

//10.calculateShipping()
function calculateShipping(order) {
    if (order >= 5000) {
        console.log('Free Shipping');

    } else if (order >= 2000) {
        console.log('Shipping: ' + 60);

    } else if (order >= 1000) {
        console.log('Shipping: ' + 80);

    } else {
        console.log('Shipping: ' + 85);
        
    }
}

calculateShipping(3000);


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
}

console.log(duplicate);
