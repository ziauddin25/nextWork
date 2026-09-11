const cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartsCards = document.getElementById('carts-cards');
const cartTitle = document.querySelector('.cart-title');
const totalCarts = document.getElementById('total-cart');
const cartText = document.querySelector('.cart-text');

function renderCart () {

    cartTitle.textContent = `All Carts (${cart.length})`;
    totalCarts.textContent = cart.length;
    if (cart.length === 0) {
        cartText.textContent = 'No Cart available!';
        cartText.style.display = 'block';
    };

    cart.map((item)=> {
        const card = document.createElement('div');
        card.classList.add('cart-card');
        
        card.dataset.id = item.id;

        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img');
        cardImg.src = item.img;
        cardImg.alt = item.name;

        const cardText = document.createElement('div');
        cardText.classList.add('card-text');

        const cardTitleText = document.createElement('div');
        cardTitleText.classList.add('card-titleText');

        const cardTitle = document.createElement('h4');
        cardTitle.classList.add('card-title');
        cardTitle.textContent =item.name;

        const cardDeleteI = document.createElement('i');
        cardDeleteI.classList.add('card-i', 'fa-regular', 'fa-trash-can' );

        const cardDelete = document.createElement('button');
        cardDelete.classList.add('card-deleteBtn');
        cardDelete.append(cardDeleteI);
        cardDelete.addEventListener('click', (e)=> {
            const cartEl = e.target.closest('.cart-card');
            const cartId = Number(cartEl.dataset.id);
            const deleteCart = cart.filter((item)=> item.id !== cartId);

            cart.length = 0;
            cart.push(...deleteCart);

            localStorage.setItem('cart', JSON.stringify(cart));
            cartEl.remove();
            cartSubTotal();
        });

        const cardPrice = document.createElement('p');
        cardPrice.classList.add('card-price');
        cardPrice.textContent = `$${item.price}`;

        const cardPrices = document.createElement('div');
        cardPrices.classList.add('card-prices');

        function updatePrice () {
            quantityNumber.textContent = quantity;

            cardPrice.textContent = `$${(item.price * quantity).toFixed(2)}`;

            item.quantity = quantity;

            localStorage.setItem('cart', JSON.stringify(cart));
            cartSubTotal();
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

        let quantity = item.quantity;
        const quantityNumber = document.createElement('p');
        quantityNumber.classList.add('quantity-number');
        quantityNumber.textContent = quantity;

        const quantitiesBtns = document.createElement('div');
        quantitiesBtns.classList.add('quantities-btns');
        quantitiesBtns.append(decrease, quantityNumber, increase);

        const cardQuantities = document.createElement('div');
        cardQuantities.classList.add('card-quantities');
        cardQuantities.append(quantitiesBtns );

        cardTitleText.append(cardTitle, cardDelete);
        cardPrices.append(cardPrice, cardQuantities)
        cardText.append(cardTitleText, cardPrices);
        card.append(cardImg, cardText);
        cartsCards.append(card);
    });
};

renderCart();                                                               

const costSubTotal = document.querySelector('.cost-total');
const costShipping = document.querySelector('.cost-shipping');
const costTotal = document.querySelector('.total');

function cartSubTotal () {
    const subTotal = cart.reduce((total, i) => {
        return total + (i.price * i.quantity);
    }, 0);

    let shippingCost = '';

    if (subTotal >= 1000) {
        shippingCost = 0;
    } else {
        shippingCost = 60;
    };

    let totalPrice = (subTotal + shippingCost).toFixed(2);
    
    costSubTotal.textContent = `$${subTotal}`;
    costShipping.textContent = `$${shippingCost}`;
    costTotal.textContent = `$${totalPrice}`;
};

cartSubTotal();
