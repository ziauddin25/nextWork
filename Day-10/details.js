import {productsData } from './products.js';


async function detailsInit () {
    const detailsProduct = await productsData();

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    const detailsAll = detailsProduct.find((item)=> {
        return item.id === Number(productId);
    });

    renderDetailsProducts(detailsAll);
    productsDetails(detailsAll);
    
};


const productsAll = document.getElementById('details-product');
function renderDetailsProducts(detailsAll) {
    const productsImg = document.createElement('div');
    productsImg.classList.add('products-imgs');

    detailsAll.images.forEach((item, i)=> {
        const smallImg = document.createElement('img');
        smallImg.classList.add('thumbnail-imgs');
        smallImg.src = item;
        smallImg.alt = detailsAll.name;

         if (i === 0) {
            smallImg.classList.add('thumbnail-imgActive');
        }

        smallImg.addEventListener('click', ()=> {
            detailsImage.src = item;

            document.querySelectorAll('.thumbnail-imgActive')
            .forEach((img) => {
                img.classList.remove('thumbnail-imgActive');
            });

            smallImg.classList.add('thumbnail-imgActive');
        });

        productsImg.append(smallImg);
    });

    const detailsImage = document.createElement('img');
    detailsImage.classList.add('details-image');
    detailsImage.src = detailsAll.images[0];
    detailsImage.alt = detailsAll.name;

    const detailsImg = document.createElement('div');
    detailsImg.classList.add('details-img');
    detailsImg.append(detailsImage);

    const iamgesSection = document.createElement('div');
    iamgesSection.classList.add('images-section');
    iamgesSection.append(productsImg, detailsImg);

    const detailsText = document.createElement('div');
    detailsText.classList.add('details-text');

    const detailsTitle = document.createElement('h3');
    detailsTitle.classList.add('details-title');
    detailsTitle.textContent = detailsAll.name;

    const detailsStar = document.createElement('i');
    detailsStar.classList.add('fa-solid', 'fa-star', 'details-i');

    const detailsReviewNumber = document.createElement('span');
    detailsReviewNumber.classList.add('details-ReviewNumber');
    detailsReviewNumber.textContent = `(${detailsAll.vote_number} reviews)`;

    const detailsReviews = document.createElement('div');
    detailsReviews.classList.add('details-reviews');
    detailsReviews.append(detailsStar, detailsReviewNumber);

    const currentPrice = document.createElement('p');
    currentPrice.classList.add('current-price');
    currentPrice.textContent = `$${detailsAll.price}`;

    const oldPrice = document.createElement('span');
    oldPrice.classList.add('old-price');
    oldPrice.textContent = `$${detailsAll.old_price}`;

    const productsPrices = document.createElement('div');
    productsPrices.classList.add('products-prices');
    productsPrices.append(currentPrice, oldPrice);

    const detailsStock = document.createElement('span');
    detailsStock.classList.add('details-stock');
    detailsStock.textContent = `Stock ${detailsAll.stock}`;

    const detailsDesc = document.createElement('p');
    detailsDesc.classList.add('details-desc');
    detailsDesc.textContent = detailsAll.description;

    const detailsQuanTitle = document.createElement('h4');
    detailsQuanTitle.classList.add('details-quanTitle');
    detailsQuanTitle.textContent = 'Quantity';

    function updatePrice () {
        quantityNumber.textContent = quantity;

        currentPrice.textContent = `$${detailsAll.price * quantity}`;
        oldPrice.textContent = `$${detailsAll.old_price * quantity}`;
    };

    const incI = document.createElement('i');
    incI.classList.add('fa-solid', 'fa-plus');

    const decI = document.createElement('i');
    decI.classList.add('fa-solid', 'fa-minus');

    const increase = document.createElement('button');
    increase.classList.add('quantity-btn');
    increase.append(incI);

    increase.addEventListener('click', ()=> {
        quantity++;

        updatePrice();
    });
    
    const decrease = document.createElement('button');
    decrease.classList.add('quantity-btn');
    decrease.append(decI);
    decrease.addEventListener('click', ()=> {
        if (quantity > 1) {
            quantity--;
        }

        updatePrice();
    });

    let quantity = 1;
    const quantityNumber = document.createElement('p');
    quantityNumber.classList.add('quantity-number');
    quantityNumber.textContent = quantity;

    const quantitiesBtns = document.createElement('div');
    quantitiesBtns.classList.add('quantities-btns');
    quantitiesBtns.append(decrease, quantityNumber, increase);

    const detailsQuantities = document.createElement('div');
    detailsQuantities.classList.add('details-quantities');
    detailsQuantities.append(detailsQuanTitle, quantitiesBtns );

    const addToBtn = document.createElement('a');
    addToBtn.classList.add('cart-btn');
    addToBtn.textContent = 'Add to Cart';
    addToBtn.addEventListener('click', ()=> {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        const existingProduct  = cart.find((item)=> {
            return item.id === detailsAll.id;
        });

        if (existingProduct) {
            existingProduct.quantity += quantity
        } else {
            cart.push({
                id: detailsAll.id,
                name: detailsAll.name,
                price:detailsAll.price,
                img: detailsAll.images[0],
                quantity: quantity
            });
        };


        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = './addToCart.html';
    });
    
    const buyBtn = document.createElement('a');
    buyBtn.classList.add('buy-btn');
    buyBtn.textContent = 'Buy now';
    buyBtn.href = 'lol'

    // productsImg.append()
    detailsText.append(detailsTitle, detailsReviews, productsPrices, detailsStock, detailsDesc, detailsQuantities, addToBtn, buyBtn);
    productsAll.append(iamgesSection, detailsText);
};

const prDetails = document.getElementById('pr-details');
function productsDetails(detailsAll) {
    const prDetailsTitle = document.createElement('h3');
    prDetailsTitle.classList.add('prDetails-title');
    prDetailsTitle.textContent = 'Product Details';

    const prDetailsSubTitle = document.createElement('p');
    prDetailsSubTitle.classList.add('prDetails-subTitle');
    prDetailsSubTitle.textContent = detailsAll.product_details;

    const prDetailsFeatures = document.createElement('ul');
    prDetailsFeatures.classList.add('prDetails-ul');

    detailsAll.features.forEach((item)=> {
        const prDetailsFtText = document.createElement('li');
        prDetailsFtText.classList.add('prDetails-featurese');

        prDetailsFtText.textContent = item;

        prDetailsFeatures.append(prDetailsFtText);
    });


    prDetails.append(prDetailsTitle, prDetailsSubTitle, prDetailsFeatures);

};

detailsInit();

const totalCarts = document.getElementById('total-cart');
const cart = JSON.parse(localStorage.getItem('cart')) || [];
totalCarts.textContent = cart.length;