import { loadProducts, filterInStock, sortByPrice, searchProducts } from "./products.js";
import { renderEmpty, renderError, renderLoading, renderProducts } from "./render.js";
import { userInfo, userName, users as userData, nameData, debounce } from "./utils.js";
import discount from "./utils.js";
// Alias: Alias is changes export value name. uses as.

console.log(userInfo());
console.log(discount(600, 15));
console.log(userName);
console.log(userData);
console.log(nameData);

// whole module import:
// import * as Utils from "./utils.js";

// Utils.discount(10);
// Utils.userInfo();


let allProducts = [];

async function init() {
    renderLoading ();

    try {
        allProducts = await loadProducts();

        if (allProducts.length === 0) {
            renderEmpty();

            return;
        }

        updateView ();
    } catch (error) {
        console.log(error.message);
        renderError('product no available!', init)
        
    }
};

function updateView(filters = {}) {
    let result = [...allProducts];

    if (filters.inStockOnly) {
        result = filterInStock(result);
    }

    if (filters.query) {
        result = searchProducts(result, filters.query);
    }

    result = sortByPrice(result, filters.sortOrder || 'asc');

    if (result.length === 0) {
        renderEmpty();
    } else {
        renderProducts(result)
    }
};


const searchInput = document.querySelector("#search");
searchInput?.addEventListener(
  "input",
  debounce((e) => updateView({ query: e.target.value }), 300)
);

init();