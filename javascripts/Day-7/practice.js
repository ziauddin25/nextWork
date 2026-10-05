const global = 'hello!';

function outer() {
    const A = 'A';

    function innner() {
        const B = 'B';

        console.log(A);
        console.log(B);
        console.log(global);

        function childInner() {
            const C = 'C';
            console.log(A);
            console.log(C);
        }

        childInner();
        // console.log(C); // here showing refError.
        
        
    }

    innner();

    // console.log(B); here showing reference error.
}; 

outer();



// closuers.
function makeGreeting (greet) {
    return function (name) {
        return `${greet} ${name}`
    }
};


const sayHi = makeGreeting('Hi,'); 
console.log(sayHi('josef'));
const sayHello = makeGreeting('Hello,');
console.log(sayHello('alfred!'));


const users = {
    name: 'john doe',
    age: 33,
    email: 'john009@gmial.com',
    skills: ['react', 'next.js', 'javascript'],

    showSkills() {
        this.skills.forEach((skill)=> {
            console.log(`${this.name} knows ${skill}`);
            
        });
    },
};

users.showSkills();


const usersData = [
    {
        id: '009',
        name: 'john doe',
        age: 22,
        skills: ['Javascript', 'React', 'Next.js', 'Node.js']
    },
    {
        id: '008',
        name: 'john doe',
        age: 22,
        skills: ['Javascript', 'React', 'Next.js', 'Node.js']
    },
    {
        id: '007',
        name: 'john doe',
        age: 22,
        skills: ['Javascript', 'React', 'Next.js', 'Node.js']
    },
];

console.log(usersData.pop());
console.log(usersData);
console.log(usersData.push({
    id: '006',
    name: 'abul',
    age: 20,
    skills: ['Java', 'Kotlin', 'Swift']
}));

console.log(usersData);
console.log(usersData.shift());
console.log(usersData.unshift({
    id: '005',
    name: 'abul',
    age: 20,
    skills: ['Java', 'Kotlin', 'Swift']
}));

console.log(usersData);
console.log(usersData.slice(0, 1));
console.log(usersData.splice(1, 2));
console.log(usersData.includes({
    id: '005',
    name: 'abul',
    age: 20,
    skills: ['Java', 'Kotlin', 'Swift']
}));
console.log(usersData.indexOf({
        id: '009',
        name: 'john doe',
        age: 22,
        skills: ['Javascript', 'React', 'Next.js', 'Node.js']
}));

const promise = new Promise ((resolve, rejected) => {
    const success = true;
    if (success) {
        resolve('data is success!')
    } else {
        rejected('rejected your fetch!')
    }
});

console.log(promise);


async function dataCall() {
    try {
        const res = await fetch ('https://jsonplaceholder.typicode.com/todos/1');

        if (!res.ok) {
            throw new Error ('fetching is failed!')
        }

        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
    finally {
        console.log('data fetching completed!');
        
    }
};

dataCall();


async function getData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id: 101,
                name: 'josef',
                email: 'josef08@gmail.com'
            })
        });

        if (!res.ok) {
            throw new Error("get data failed!");
        }

        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getData();


function first () {
    console.log('call func first!');

    second();
}


function second () {
    console.log('call func second!');

    third();

    function secondChild() {
        console.log('second child call!');
    };

    secondChild();
}


function third () {
    console.log('call func third!');

    fourth();

    function thirdChild () {
        console.log('call third child!');
    }

    thirdChild();
}


function fourth () {
    console.log('call func fourth!');
};

first();

