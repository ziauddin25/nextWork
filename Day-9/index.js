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