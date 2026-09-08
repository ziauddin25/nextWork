// const promise = new Promise ((resolve, rejected)=> {
//     const success = true;

//     if (success) {
//         resolve('Task Success!');
//     } else {
//         rejected('Task Failed!')
//     }
// });

// console.log(promise);

// promise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// // promise final:
// promise 
//     .then (result => {
//         console.log(result);
//     })
//     .catch (error => {
//         console.log(error);;
        
//     })
//     .finally (()=> {
//         console.log('Finished!');
//     });

// // promise chaining:
// getUser ()
//     .then(user => {
//        return getPosts(user.id);
//     })

//     .then (post => {
//         return getComments (post[0].id)
//     })

//     .then (comments => {
//         console.log(comments);
//     })
//     .catch (error => {
//         console.log(error);
        
//     });


// // async/await:
// async function loadData() {
//     try {
//         const user = await getUsers(user);
//         const post = await getPosts(user.id);

//         console.log(post);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// };



// async function getUsers() {
//     try {
//         const response = await fetch( "https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();

//         console.log(data);
//     }
//     catch(error) {
//         console.log(error);   
//     }
// };

// getUsers();

// async function postData() {

//     console.log('loading.....');
    
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',

//             headers: {
//                 "Content-type" : 'application/json'
//             },

//             body: JSON.stringify ([
//                 {
//                     id: '001',
//                     name: 'Josef',
//                     email: 'josef69@gmail.com',
//                 },
//                 {
//                     id: '002',
//                     name: 'Afred nobel',
//                     email: 'nobel89@gmail.com',
//                 },
//                 {
//                     id: '003',
//                     name: 'Atif Donald',
//                     email: 'donald909@gmail.com',
//                 },
//                 {
//                     id: '004',
//                     name: 'Abraham',
//                     email: 'abraham33@gmail.com',
//                 },{
//                     id: '005',
//                     name: 'Mojes',
//                     email: 'mojes009@gmail.com',
//                 },
//             ])

//         });

//         if (res.ok) {
//             const data = await res.json();
//             console.log(data);
//         } else {
//             console.log('server error status', res.status);
//         }
        
//     } catch (error) {
//         console.log('network error', error);
//     }
// };

// postData();

// async function patchData() {
//    try {
//         const res = await fetch ('https://jsonplaceholder.typicode.com/posts/101', {
//             method: 'PATCH',
    
//             headers: {
//                 'Content-type': 'application/json'
//             },
    
//             body: JSON.stringify({
//                 email: 'abid@gmail.com'
//             })
//         });
    
//         if (res.ok) {
//             const data = await res.json();
//             console.log(data);
//         } else {
//             console.log('server error:', res.status);
//         }
//    } catch (error) {
//         console.log(error);
//    }
// };

// patchData(); 




// task:  make a card using data.
const loading = document.getElementById('loading-el');
const errorEl = document.getElementById('error-el');
const emptyEl = document.getElementById('empty-el');
const btn = document.getElementById('btn');


function showLoading () {
    loading.style.display = 'flex';
    errorEl.style.display = 'none';
    emptyEl.style.display = 'none';
    allCards.style.display = 'none';
    btn.style.display = 'none' 
};

function showLoadingHide () {
    loading.style.display = 'none';
    allCards.style.display = 'grid';

}

function showError () {
    errorEl.textContent = 'Failed to fetch users';
    errorEl.style.display = 'block';
    btn.style.display = 'block';
    allCards.style.display = 'none';

}

function showEmpty () {
    emptyEl.style.display = 'block';
    btn.style.display = 'block';
    allCards.style.display = 'none';
    
    showLoadingHide();
};


const allCards = document.getElementById('all-cards');
async function userData() {
    showLoading();

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // error check:
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const users = await response.json();
        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.id = user.id;

            const cardTitle = document.createElement('h4');
            cardTitle.classList.add('cd-title');
            cardTitle.textContent = `Name: ${user.name}`;

            const cardSubTitle = document.createElement('p');
            cardSubTitle.classList.add('cd-subTitle');
            cardSubTitle.textContent = `Email: ${user.email}`;

            const cardAddress = document.createElement('p');
            cardAddress.classList.add('cd-address');
            cardAddress.textContent = `Address: ${user.address.street} ${user.address.suite} ${user.address.city}`;

            const cardPhone = document.createElement('p');
            cardPhone.classList.add('cd-phone');
            cardPhone.textContent = `Phone ${user.phone}`;

            const cardWebsite = document.createElement('p');
            cardWebsite.classList.add('cd-website');
            cardWebsite.textContent = `Web: ${user.website}`;
            // console.log(cardWebsite);
            

            card.append(cardTitle, cardSubTitle, cardAddress, cardWebsite, cardPhone);
            allCards.append(card);
        });


        // empty check:
        if (users.length === 0) {
            showEmpty();

            return
        };
        
    } catch (error) {
        showError(error.message);
    }
    finally{
        showLoadingHide();
    }

};

userData();