// first execute sync code. when call sack is empty then working event loop. and execute first mirco tasks then macro tasks.
console.log('sync code first execute):'); 
const nums = [1,2,3,4,5];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i]);
    }
}

Promise.resolve().then(()=> {
    console.log('micro task. promise resolved):');
});

console.log('third call it):');
function sayCall () {
    console.log('say call....');
}

sayCall();

async function dataCall() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const data = await res.json();

    console.log(data);
};

dataCall();

setTimeout(() => {
    console.log('timeout!');
    
}, 3000);

console.log('call....');


// Promise:

const newPromise = new Promise ((resolve, rejected)=> {
    const success = true;

    if (success) {
        resolve('promise is success!');
    } else {
        rejected(new Error('promise is rejected!'))
    }
});

console.log(newPromise);

// promise chain:
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((user)=> {
     console.log(`user title: ${user.title}`)
     console.log(`status: ${user.completed}`)
    
    })
    .catch((err) => console.log(err))
    .finally(()=> console.log('finally promise is success!'));


Promise.resolve(3)
    .then((x)=> console.log(x * 6)
    )
    .then((x)=> x + 5)
    .then((x) => x *2)
    .catch((err)=> console.log(err))


// promiseAll:
// parallel promise. if all promise fulfilled return a array. if one rejected promise failed.Fail-fast

const ordersCards = document.getElementById('orders');
async function dashboardData() {
    
    try {
        const [users, products, orders] = await Promise.all ([
            fetch('users.json').then((res)=> {
                if (!res.ok) {
                    console.log('users api call is failled!');
                }
                return res.json()}),
            fetch('products.json').then((res)=> {
                if (!res.ok) {
                    console.log('products api call is failled!');
                }
                return res.json()}),
            fetch('orders.json').then((res)=> {
                if (!res.ok) {
                    console.log('orders api call is failled!');
                }
                return res.json()})
        ]);

        console.log('Users:', users);
        console.log('Products:', products);
        console.log('orders:', orders);

        orders.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.id = item.userId;

            const title = document.createElement('h4');
            title.classList.add('title');
            title.textContent = item.orderId;

            const quantity = document.createElement('p');
            quantity.classList.add('quantity');
            quantity.textContent = item.quantity;

            const status = document.createElement('p');
            status.classList.add('status');
            status.textContent = item.status;

            const orderDate = document.createElement('p');
            orderDate.classList.add('orderDate');
            orderDate.textContent = item.orderDate;
            
            card.append(title, quantity, status, orderDate);
            ordersCards.append(card);
        });

    } catch (error) {
        console.log(error);
    }
    finally {
        console.log('dashboard data is final!');
        
    }
}

dashboardData();


// promise allSettled: promise all settled is a all promise call and if one promise is rejected then others fulfilled promise call.here gives 2 objects: status, value or reson. if fulfilled value, rejected: reason.
// Fail-safe / Wait-all.

async function dashboardDataAllSettled() {
    try {
        const [usersRes, productsRes, ordersRes] = await Promise.allSettled([
            fetch('users.json').then((res)=> res.json()),
            fetch('/products.json').then((res)=> res.json()),
            fetch('orders.json').then((res)=> res.json())
        ]);

        if (usersRes.status === "fulfilled") {
            console.log(usersRes.value);
        } else {
            console.log(usersRes.reason.message);
        }

        if (productsRes.status === "fulfilled") {
            console.log(productsRes.value);
        } else {
            console.log(productsRes.reason.message);
        }

        if (ordersRes.status === "fulfilled") {
            console.log(ordersRes.value);
        } else {
            console.log(ordersRes.reason.message);
        }

        
    } catch (error) {
        console.log(error);
        
    }
    
}

dashboardDataAllSettled();