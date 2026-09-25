const BASE_URl = 'https://fakestoreapi.com';

async function request(endpoint, options = {}) {
    const res = await fetch(`${BASE_URl}${endpoint}`, {
        headers: {'Content-Type': 'application/json'},
        ...options
    });

    if (!res.ok) {
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

export async function getProducts() {
    return request('/products');
}

export async function getProduct(id) {
    return request(`products/${id}`);
};

export async function createData(data) {
    return request('products', {
        method: 'POST',
        body: JSON.stringify(data),
    });
};

export async function getUsers() {
    return request('users');
}
