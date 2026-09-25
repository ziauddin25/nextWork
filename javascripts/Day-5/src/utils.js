export function userInfo() {
    const userInfo = {
        name: 'john',
        email: 'john0069@gmail.com',
        phone: '+0889986767',
        city: 'lisborn'
    };
    
    return userInfo;
};

export default function discount(price, discount) {
    const discountAmount = (price * discount) / 100;

    const finalPrice = `$${price - discountAmount}`;

    return finalPrice;
};


export const userName = 'josef';


export const users = {
    name: 'john',
    email: 'john0069@gmail.com',
    phone: '+0889986767',
    city: 'lisborn'
};

// Alias: Alias is changes export value name. uses as.

const name = 'alfred';

export {name as nameData};


export function formatPrice (price) {
    return `$${price.toFixed(2)}`
};

export function formatDate (date) {
    return new Date (date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export function debounce (fn, delay =300) {

    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    }
};

export function className (...classes) {
    return classes.filter(Boolean).join(' ');
}
