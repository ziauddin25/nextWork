const promise = new Promise ((resolve, rejected)=> {
    const success = true;

    if (success) {
        resolve('Task Success!');
    } else {
        rejected('Task Failed!')
    }
});

console.log(promise);

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// promise final:
promise 
    .then (result => {
        console.log(result);
    })
    .catch (error => {
        console.log(error);;
        
    })
    .finally (()=> {
        console.log('Finished!');
    });

// promise chaining:
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


// async/await:
async function loadData() {
    try {
        const user = await getUsers(user);
        const post = await getPosts(user.id);

        console.log(post);
        
    } catch (error) {
        console.log(error);
        
    }
};



async function getUsers() {
    try {
        const response = await fetch( "https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        console.log(data);
    }
    catch(error) {
        console.log(error);   
    }
};

getUsers();

async function postData() {
    console.log('loading.....');
    
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',

            headers: {
                "Content-type" : 'application/json'
            },

            body: JSON.stringify ([
                {
                    id: '001',
                    name: 'Josef',
                    email: 'josef69@gmail.com',
                },
                {
                    id: '002',
                    name: 'Afred nobel',
                    email: 'nobel89@gmail.com',
                },
                {
                    id: '003',
                    name: 'Atif Donald',
                    email: 'donald909@gmail.com',
                },
                {
                    id: '004',
                    name: 'Abraham',
                    email: 'abraham33@gmail.com',
                },{
                    id: '005',
                    name: 'Mojes',
                    email: 'mojes009@gmail.com',
                },
            ])

        });

        if (res.ok) {
            const data = await res.json();
            console.log(data);
        } else {
            console.log('server error status', res.status);
        }
        
    } catch (error) {
        console.log('network error', error);
    }
};

postData();

async function patchData() {
   try {
        const res = await fetch ('https://jsonplaceholder.typicode.com/posts/101', {
            method: 'PATCH',
    
            headers: {
                'Content-type': 'application/json'
            },
    
            body: JSON.stringify({
                email: 'abid@gmail.com'
            })
        });
    
        if (res.ok) {
            const data = await res.json();
            console.log(data);
        } else {
            console.log('server error:', res.status);
        }
   } catch (error) {
        console.log(error);
   }
};
