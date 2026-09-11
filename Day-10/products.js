const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export async function productsData() {
    await delay(1000);
    const response = await fetch('./data.json');

    if (!response.ok) {
        throw new Error(`HTTP Error:, ${response.status}`)
    }

    const products = await response.json();

    return products;
    
};