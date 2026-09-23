const nums = [69, 96, 79];
const [first, second, third] = nums;  // array destructuring.
console.log(first); // 69.


// products data: 

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 850,
        category: "Electronics",
        stock: 5,
        available: true
    },
    {
        id: 2,
        name: "T-Shirt",
        price: 25,
        category: "Clothing",
        stock: 0,
        available: false
    },
    {
        id: 3,
        name: "Headphones",
        price: 120,
        category: "Electronics",
        stock: 12,
        available: true
    },
    {
        id: 4,
        name: "Shirt",
        price: 24,
        category: "Clothing",
        stock: 9,
        available: true
    },
    {
        id: 5,
        name: "Light",
        price: 33,
        category: "Electronics",
        stock: 6,
        available: false
    }
];

const {id, stock} = products[0];
console.log(stock);


const totalProducts = products.reduce((total, item) => {
    return total + 1;
}, 0);
console.log(totalProducts);

const totalPrice = products.reduce((total, item) => {
    return total + item.price;
}, 0);
console.log(`$${totalPrice}`);


const averagePrice = products.reduce((total, item) => {
    return total + item.price / totalProducts;
}, 0);
console.log(`$${averagePrice}`);


// Available products
// Electronics products
// Products above $100
// Products currently out of stock

const availableProducts = products.filter((item)=> {
    return item.available === true;
});

console.log(availableProducts);


const electronicsProducts = products.filter((item)=> {
    return item.category.toLocaleLowerCase() === 'electronics';
});

console.log(electronicsProducts);


const productsAbove100 = products.filter((product)=> {
    return product.price >= 100;
});

console.log(productsAbove100);

const productsOutofstock = products.filter((item)=> {
    return item.stock === 0;
});

console.log(productsOutofstock);


const mostexpensiveProduct = products.reduce((total, item)=> {
    return item.price > total.price ? item:total;
})
console.log(mostexpensiveProduct);

const findbyId = products.filter((item)=> {
    return item.id === 6;
});

console.log(findbyId);


const hasUnavailableProduct = products.some(item => {
    return item.available === false;
});

console.log(hasUnavailableProduct);

const above = products.filter((item)=> {
    return item.price > 10;
});
console.log(above);


// Electronics count
// Clothing count
// Home count


const electronicsCount = products.reduce((total, item) => {
    return total + (item.category.toLocaleLowerCase() === 'electronics');
}, 0);

console.log(electronicsCount);

const clothingCount = products.reduce((total, item) => {
    return total + (item.category.toLocaleLowerCase() === 'clothing');
}, 0);

console.log(clothingCount);

const homeCount = products.reduce((total, item) => {
    return total + (item.category.toLocaleLowerCase() === 'home');
}, 0);

console.log(homeCount);



// scope:
// scope is a variables access in code):
// global scope: global scope is a out of func or block. 

const global = 'global scope):';
console.log(global);

function globalCatch() {
    console.log(global);
}

globalCatch();


// function scope: it's just catch inside of func not outside):

function func () {
    const age = 44;
    const email = 'func0069@gmail.com';

    console.log(`name: func, age: ${age}, mail: ${email}`);
}

func();

// console.log(email); // syntaxerror): 


// block scope: let and const block scope. block: {}

const block = false;
if (block !=true) {
    let name = 'block scope):';
    const agee = 55;

    console.log(agee + ' ' + name);
}

// console.log(agee); // error 


// scope chain:

const country = 'Bangladesh';

function outer () {
    const city = 'Mirpur-12';

    function inner () {
        const area = 'Pallabi';

        console.log(area);
        console.log(city);
        console.log(country);
    }

    inner();

    // console.log(area); // error: beacuse outer can't access in inner but inner can access outer): 
    
}

outer();


// closures A closure is a function that remembers and retains access to variables from its outer lexical scope, even after the outer function has finished executing.
function createMultiplier (number) {
    return (value)=> {
        return value * number;
    }
}

const double = createMultiplier(2);
const tripple = createMultiplier(3);

console.log(double(10));
console.log(tripple(5)); 

const numbers = [1, 2, 3, 4, 5, 69, 33, 44];
const result = numbers.map(double);
console.log(result);

function createCounter () {
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement () {
            count--;
        },

        getValue() {
            return count;
        }
    }
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

counter.decrement();

console.log(counter.getValue());



// this: this is a javascript special keywords. it's uses for access function call):
const user = {
    age: 69,

    sayAge() {
        console.log(this.age);
    },

    address: {
        city: 'Dhaka',

        sayCity () {
            console.log(this.city);
        }
    },

    array: {
        lol: 'josef',
        sayAr: ()=> {
            console.log(this.lol);
        }

    }

}

user.sayAge();
user.address.sayCity();
user.array.sayAr(); // error: 


//  event: this):

const button = document.getElementById('btn');

button.addEventListener('click', function(e) {
    console.log(this);
    e.preventDefault();
    this.style.color = 'red';
});


const users = {
    name: 'josef'
}

function sayCall (age, role) {
    console.log(this.name, age, role);
}

sayCall.call(users, 69, 'frontend developer'); // call: call is manual set is this):
sayCall.apply(users, [67, 'backend developer']); // apply give a array arguments.
const bindFunc = sayCall.bind(users, 78, 'prompt engineers'); // bind is make a new func): 
sayCall.bind(users, 90, 'lol enginners')();

bindFunc();

const bankAccount = {
    owner: 'josef',
    balance: 5000,

    deposit(amount) {
        this.balance += amount;
        console.log(`${this.owner} her current balance: $${this.balance}`);

    },

    withdraw(amount) {
        if (amount > this.balance) {
            return console.log('no balance available!');
        }

        this.balance -= amount;
        console.log(`${this.owner} her current balance: $${this.balance}`);
    }
};

bankAccount.deposit(5000);
bankAccount.withdraw(4000);