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
