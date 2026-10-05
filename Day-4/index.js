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

//  practices: 

let hi = 'hi, josef';
const hello = 'welcome!';
console.log(hi + ' ' + hello);

const values = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < values.length; i++) {
    const sum = values[i] * 2;
    console.log(sum);
}

const hasValues = true;
if (hasValues === true) {
    console.log('value is true!');
} else {
    console.log('value is false!');
}


const empty = null;
if (empty === null) {
    console.log('value is null!');
} else {
    console.log('value is empty!');
}


const ages = [101, 43, 12, 22, 32, 13, 9, 90, 89];
for(let i = 0; i < ages.length; i++) {
    let age = ages[i];
    if (age % 2 === 0) {
        console.log(age);
    };
};


const nums = [22, 55, 44, 33, 22, 11, 89, 59];
const evn = [];
for(let i = 0; i <nums.length; i++) {
    let x = nums[i];
    if (x % 2 !==0) {
     evn.push(x);
    }
};

console.log(evn);

const originalNums = [1, 44, 55, 33, 33, 44, 69, 1, 22, 60, 22];
const seens = [];
const duplicates = [];

for (let i = 0; i < originalNums.length; i++) {
    const m = originalNums[i];
    if (seens.includes(m)) {
        duplicates.push(m);
    } else {
        seens.push(m)
    }
};

console.log(duplicates);

function shippingCalculate (order) {
    if (order >= 5000) {
        console.log('Free!');
    } else if (order >= 2000) {
        console.log(60);
    } else if (order >= 1000) {
        console.log(70);
    } else {
        console.log(75);
    }
};

shippingCalculate(999);


// const selected = document.getElementById('selected');
const inside = document.getElementById('inside');
const outside = document.getElementById('outside');

inside.addEventListener('click', ()=> {
    console.log(70);
});

outside.addEventListener('click', ()=> {
    console.log(120);
});

// function deliviry () {
//     if (inside) {
//         console.log(80);
//     } else if (outside) {
//         console.log(120);
//     } else {
//         console.log(80);
//     }
// };

// deliviry();


const users = {
    id: '001',
    name: 'josef nobel',
    email: 'nobel001@gmail.com',
    address: {
        post_code: '0009',
        city: 'east north town, mancester',
        country: 'United of Kindom.'
    },
    phone: '+0998676869',
    links: {
        linkdIn: 'https://www.linkedin.com/',
        github: 'https://github.com/ijosef008/git',
        facebook: 'https://www.facebook.com/josef'
    },
    bio: null,
};

const {id, name, email,} = users; // destructring.
console.log(id);
console.log(name);

const {...allData} = users; // rest.
console.log(allData);

console.log(allData.address.post_code.city?.lol); // optional chain.
const bio = allData.bio?? 'no bio available!'; 
console.log(bio);
const update_role = 'update_role'; // computed.

const newData = {
    ...allData.address, // spreed.
    [update_role]: 'frontend developer.',
};

console.log(newData);

const profileData = {
    id, name, email, bio, newData
};

console.log('profile data:', profileData);

function usersData () {
    console.log(profileData.id);
    console.log(profileData.name);
    console.log(profileData.email);
    console.log(profileData.bio);
    console.log(profileData.newData.city);
    console.log(profileData.newData.update_role);
};

usersData();
