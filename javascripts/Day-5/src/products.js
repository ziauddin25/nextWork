import { formatPrice } from "./utils.js";
import { getProducts } from "./api.js";

export default class Product {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.category = data.category;
    this.description = data.description;
    this.image = data.image;
    this.ratingRate = data.rating?.rate || 0;
    this.ratingCount = data.rating?.count || 0;
    this.inStock = data.stock > 0;
  }

  get formattedPrice() {
    // console.log(formatPrice(this.price));
    return formatPrice(this.price);
  }

  get isAffordable() {
    return this.price < 100;
  }
};

export function filterInStock (products) {
    return products.filter((p)=> p.inStock)
};

export function sortByPrice (products, order='asc') {
    return [...products].sort((a,b) => {
        order === 'asc' ? a.price - b.price : b.price - a.price;
    });
};

export function searchProducts (products, query) {
    const q = query.toLowerCase();
    return products.filter((p)=> p.title.toLowerCase().includes(q))
};


export async function loadProducts() {
  const raw = await getProducts();
  return raw.map((item) => new Product(item));
}