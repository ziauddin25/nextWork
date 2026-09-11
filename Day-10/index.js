import { productsData } from "./products.js";

const errorEl = document.getElementById('error-el');
const loaded = document.getElementById('loaded-el');
const emptyEl = document.getElementById('empty-el');
const productsCards = document.getElementById('products-cards');

function showError () {
    errorEl.textContent = 'Failed to fetch users';
    errorEl.style.display = 'block';
    loaded.style.display = 'none';
    productsCards.style.display = 'none';
};

function showLoading () {
    loaded.style.display = 'flex';
    errorEl.style.display = 'none';
    emptyEl.style.display = 'none';
    productsCards.style.display = 'none';
}

function showLoadingHide () {
    loaded.style.display = 'none';
    productsCards.style.display = 'grid';
}

function showEmpty () {
    emptyEl.textContent = 'Products are empty!';
    emptyEl.style.display = 'block';
    productsCards.style.display = 'none';
    
    showLoadingHide();
}

const localData = localStorage.getItem('products');
let allProducts = localData?JSON.parse(localData) : [];
// productData();

async function productsInit () {
    showLoading();

    try {

        allProducts = await productsData();
        if (allProducts.length === 0) {
            showEmpty();

            return;
        }

        renderProducts(allProducts);

    } catch (error) {
        showError(error.message);
    }
    finally {
        showLoadingHide();
    }
}
productsInit();


localStorage.setItem('products', JSON.stringify(allProducts));
const productData = JSON.parse(localStorage.getItem('products'));
console.log(productData);

// console.log('allProducts', allProducts);


let currentCategory = 'all';
function filterProducts () {
    const searchValue = findProduct.value.toLowerCase();
    const searchValueMob = mobileFindProduct.value.toLowerCase();

    const filterProduct = allProducts.filter((item)=> {
        const matchCategories = currentCategory === 'all' || item.category.toLowerCase() === currentCategory.toLowerCase();

        const matchSearch = item.name.toLowerCase().includes(searchValue);
        const matchSearchMob = item.name.toLowerCase().includes(searchValueMob);

        return matchCategories && matchSearch && matchSearchMob;
    });

    if (filterProduct.length === 0) {
        noProducts.textContent = 'No products available!';
        noProducts.style.display = 'block';

    } else {
        noProducts.style.display = 'none';
    }

    renderProducts(filterProduct);
};

const findProduct = document.getElementById('search-input');
const noProducts = document.getElementById('no-products');
findProduct.addEventListener('input', ()=> {
    filterProducts();
});

const mobileFindProduct = document.getElementById('search-inputMob');
mobileFindProduct.addEventListener('input', ()=> {
    filterProducts();
});

const categories = document.querySelectorAll('.bar-ul');
// const active = document.querySelector('.active');
categories.forEach(category => {
    category.addEventListener('click', (e)=> {

        categories.forEach((item)=> {
            item.classList.remove('active');
        });

        e.currentTarget.classList.add('active');
        currentCategory = e.currentTarget.dataset.category;

        filterProducts();
    });
    
});

const mainTitle = document.getElementById('main-title');
function renderProducts(allProducts) {
    productsCards.innerHTML = '';

    mainTitle.textContent = `Showing ${allProducts.length} products`

    allProducts.forEach(item => {
        const productCard = document.createElement('div');
        productCard.classList.add('pr-card');
        productCard.dataset.id = item.id;
        
        const cardImage = document.createElement('img');
        cardImage.classList.add('card-image');
        cardImage.src = item.images[0];
        cardImage.alt = item.name;

        const cardImg = document.createElement('div');
        cardImg.classList.add('card-img');
        cardImg.append(cardImage);

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = item.name;

        const cardStar = document.createElement('i');
        cardStar.classList.add('fa-solid', 'fa-star', 'card-i');

        const cardRatio = document.createElement('span');
        cardRatio.classList.add('card-ratio');
        cardRatio.textContent = item.ratio;

        const cardReviewNumber = document.createElement('span');
        cardReviewNumber.classList.add('card-ReviewNumber');
        cardReviewNumber.textContent = `(${item.vote_number})`;

        const cardReview = document.createElement('div');
        cardReview.classList.add('card-review');
        cardReview.append(cardStar, cardRatio, cardReviewNumber);

        const cardCurrentPrice = document.createElement('p');
        cardCurrentPrice.classList.add('card-currentPrice');
        cardCurrentPrice.textContent = `$ ${item.price}`;

        const cardOldPrice = document.createElement('p');
        cardOldPrice.classList.add('card-oldPrice');
        cardOldPrice.textContent = item.old_price;

        const cardPrices = document.createElement('div');
        cardPrices.classList.add('card-prices');
        cardPrices.append(cardCurrentPrice, cardOldPrice);

        const cardBtn = document.createElement('a');
        cardBtn.classList.add('card-btn');
        // cardBtn.href = './productsDetails.html';
        cardBtn.textContent = 'Add to Cart';
        cardBtn.addEventListener('click', (e)=> {
            const cardId = e.currentTarget.closest('.pr-card');
            const passId = cardId.dataset.id;

            window.location.href = `./productsDetails.html?id=${passId}`;
            
        });

        productCard.append(cardImg, cardTitle, cardReview, cardPrices, cardBtn);
        productsCards.append(productCard);
    });
};

// renderProducts();

const totalCarts = document.getElementById('total-cart');
const cart = JSON.parse(localStorage.getItem('cart')) || [];
totalCarts.textContent = cart.length;

const totalCartsMob = document.getElementById('total-cartMob');
const cartMob = JSON.parse(localStorage.getItem('cart')) || [];
totalCartsMob.textContent = cartMob.length;

// mobile view:

const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');
const popupContent = document.getElementById('popup-content');

openNav.addEventListener('click', ()=> {
    popupContent.style.display = 'block';
    openNav.style.display = 'none';

    closeNav.style.display = 'block';
});


closeNav.addEventListener('click', ()=> {
    popupContent.style.display = 'none';
    openNav.style.display = 'block';

    closeNav.style.display = 'none';
});


const categoryBtn = document.getElementById('category-btn');
const categoriesDropdown = document.getElementById('categories-dropdown');
const dropdownClose = document.getElementById('dropdown-close');

categoryBtn.addEventListener('click', ()=> {
    categoriesDropdown.style.display = 'block';
});

dropdownClose.addEventListener('click', ()=> {
    categoriesDropdown.style = 'none';
});
