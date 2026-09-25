const app = document.querySelector("#app");

function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

export function renderLoading() {
  app.innerHTML = "";
  const loader = createElement("div", "loader", "loading...");
  app.appendChild(loader);
}

export function renderError(message, onRetry) {
  app.innerHTML = "";
  const errorDiv = createElement("div", "error", message);

  const retryBtn = createElement("button", "retry", "try again");
  retryBtn.addEventListener("click", onRetry);

  app.appendChild(errorDiv);
  app.appendChild(retryBtn);
}

export function renderEmpty() {
  app.innerHTML = "";
  app.appendChild(createElement("p", "empty", "no products available!"));
}

export function renderProducts(products) {
  app.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.id = product.id;

    const img = document.createElement('img');
    img.classList.add('card-img');
    img.url = product.image;

    const title = document.createElement('h4');
    title.classList.add('card-title');
    title.textContent = product.title;

    // const desc = document.createElement('p');
    // desc.classList.add('card-desc');
    // desc.textContent = product.description;
    
    const price = document.createElement('p');
    price.classList.add('card-price');
    price.textContent = product.formattedPrice;

    const ratingRate = document.createElement('span');
    ratingRate.classList.add('card-ratingRate');
    ratingRate.textContent = product.ratingRate;

    const ratingCount = document.createElement('span');
    ratingCount.classList.add('card-ratingCount');
    ratingCount.textContent = product.ratingCount;

    const ratings = document.createElement('div');
    ratings.classList.add('card-ratings');
    
    ratings.append(ratingRate, ratingCount);
    card.append(img, title, price, ratings);
    app.append(card);
  });
}