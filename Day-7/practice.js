const btn = document.getElementById('btn');
btn.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log('btn is clicked!');
    console.log('type of event', e.type);
    console.log('target', e.target);
    console.log('current target', e.currentTarget);
    console.log(`mouse coordinates: X= ${e.clientX} Y= ${e.clientY}`);
    e.stopPropagation();
})

    // <div class="">
    //     <a href="#" id="btn">click me</a>
    //     <input type="text" id="search-box" placeholder="search....">
    //     <input type="text" id="name-input" placeholder="search....">
    // </div>

    // <div id="parent">
    //     <div class="">
    //         <button id="btn-click">Click me</button>
    //     </div>
    // </div>

    // <div id="parent-container">
    //     <h2 class="">welcome!</h2>
    //     <button class="delete">Delete me</button>
    //     <a href="#ll" class="open">Open new</a>
    //     <a href="https://www.google.com" class="click-btn2">Open google</a>
    // </div>

    // <form action="" id="form">
    //     <input type="text" class="" name="fullName">
    //     <input type="number" class="" name="number">
    //     <button class="" type="submit">Submit</button>
    // </form>

    // <h2 class="title-card">Card container</h2>
    // <div class="" id="card-container">
    // </div>


const searchBox = document.getElementById('search-box');
searchBox.addEventListener('input', (e)=> {
    console.log('current text:', e.target.value);
    
})

const inputField = document.getElementById('name-input');
inputField.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        console.log("clicked enter!");
    }

    console.log('key pressed', e.key);
    
});

// event bubbling:
const parentDiv = document.getElementById('parent');
parentDiv.addEventListener('click', (click) => {
    console.log('click parent', click);
});

const childBtn = document.getElementById('btn-click');
childBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked child button!');
    
});


// Event Delegation:

const parentContainer = document.getElementById('parent-container');
parentContainer.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('delete')) {
        console.log('btn is delete!');
    };

    if (event.target.classList.contains('open')) {
        console.log('clicked open btn!');
        event.preventDefault();
    };
    
    if (event.target.classList.contains('click-btn2')) {
        console.log('click google btn!');
        event.preventDefault();
    }
});

// DOMContentLoaded: it's wrapper full html element, it's excute first, no showing error for delay. it's finally wrapper a parent element type all element in DOM.

document.addEventListener('DOMContentLoaded', function() {
    // here added all elements and all logic.
    console.log('all element is execute under this element!');

    //forms: here execute forms data after submit.
    const form = document.getElementById('form');
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        console.log(form.fullName.value);
        console.log(form.number.value);
        
    });

    
});

// create element
const newDiv = document.createElement('div');
newDiv.innerHTML = 'Welcome to a new element!';
newDiv.style.backgroundColor = '#000';
newDiv.style.marginTop = '20px';
newDiv.style.maxWidth = '400px';
newDiv.style.borderRadius = '16px';
newDiv.style.padding = '16px';
newDiv.style.color = '#fff';
newDiv.style.fontSize = '22px';

// append: append is a add methods, if you want added a new element in your project then using append.append is added element in last.
const cardContainer = document.getElementById('card-container');
cardContainer.append(newDiv); // here added newDiv element under card-container div.

// prepend : prepend is a add methods in first under parent element. 

const imgFirst = document.createElement('img');
if (imgFirst) {
    imgFirst.src ='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuc3xlbnwwfHwwfHx8MA%3D%3D';
} else {
    imgFirst.src = 'no img here!'
}

imgFirst.style.width = '200px';
imgFirst.style.height = '200px';
imgFirst.style.objectFit = 'cover';
imgFirst.style.borderRadius = '100%';

cardContainer.prepend(imgFirst); // here added this element first in parent.


// rmove: a element remove in parent.

const cardTitle = document.querySelector('.title-card');
cardTitle.remove();


// localStorage save data local storage. here have key , value relations.
localStorage.setItem('userName', 'Alfred');
localStorage.setItem('email', 'alfred69@gmail.com');
const user = localStorage.getItem('userName');
console.log(user);
localStorage.removeItem('email');
// console.log(localStorage);
localStorage.clear();
// if you want to added object or array data not set this, here useing a JSON.stringify() then it's create a text. local storage not take others without text so, convert text array and object. 

const userData = [
    {
        id: 101,
        name: 'alfred sadip',
        email: 'sadip001@gmail.com',
        phone: '0921032598',
        city: 'sydnee'
    },
    {
        id: 102,
        name: 'josef',
        email: 'josef003@gmail.com',
        phone: '0921032698',
        city: 'california'
    },
    {
        id: 103,
        name: 'donald pithu',
        email: 'donald55@gmail.com',
        phone: '0921032500',
        city: 'rome'
    }
];

localStorage.setItem('user', JSON.stringify(userData)); // json.parse is set data as a array or object.
const users = JSON.parse(localStorage.getItem('user')); // json.parse is get data as a array or object.
console.log(users);

// same to session storage, but session storage is session type save data.