const products = [
    {
        id: 101,
        name: 'Premium Leather Watch',
        price: 999,
        category: 'Accessories',
        stock: true
    },
    {
        id: 102,
        name: 'Wireless Bluetooth Earbuds',
        price: 1499,
        category: 'Electronics',
        stock: false
    },
    {
        id: 103,
        name: 'Running Sports Shoes',
        price: 2499,
        category: 'Fashion',
        stock: false
    },
    {
        id: 104,
        name: 'Ergonomic Gaming Mouse',
        price: 850,
        category: 'Electronics',
        stock: true
    },
    {
        id: 105,
        name: 'Casual Cotton T-Shirt',
        price: 599,
        category: 'Fashion',
        stock: true
    },
    {
        id: 106,
        name: 'Smart Fitness Band',
        price: 1999,
        category: 'Electronics',
        stock: false
    },
    {
        id: 107,
        name: 'Anti-Theft Laptop Backpack',
        price: 1250,
        category: 'Accessories',
        stock: true
    },
    {
        id: 108,
        name: 'UV Protection Sunglasses',
        price: 799,
        category: 'Fashion',
        stock: true
    }
];

// 1. Get all product names

const allPrName = products.map((product) => {
    return product.name;
});

console.log('All products name:', allPrName);

//2. Products > 1000

const priceUp1000 = products.filter(product => product.price > 1000);
console.log(priceUp1000);

//3. Find product by ID

const findProduct = products.find(find => find.id === 108);
console.log(findProduct);


//4. Calculate total price
const totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);
console.log('Total Price:', totalPrice);

//5. Find cheapest
const cheapest = products.reduce((prev, current)=> {
    return (current.price < prev.price) ? current: prev;
});
console.log(cheapest);


//6. Find most expensive
const expensive = products.reduce((prev, current) => {
    return (current.price > prev.price) ? current: prev;
});
console.log(expensive);

//7. Sort low → high

const lowToHigh = products.sort((x, y) => x.price - y.price);
console.log(lowToHigh);


// 8. Sort high → low

const highToLow = products.sort((a, b) => b.price - a.price);
console.log(highToLow);

//9. Check stock

const checkStock = products.every(every => every.stock === true);
console.log('Check products stock', checkStock);


// 10. Group/filter by category

const prCategory = products.filter(cat => cat.category === 'Electronics');
console.log(prCategory);
