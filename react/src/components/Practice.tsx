import PropsData from "./PropsData";

function Avatar () { // props type func. always uses camel case. first word is uppercase.
    return (
        <img 
            src="https://react.dev/images/docs/scientists/1bX5QH6.jpg" 
            alt="avatar" 
            width={100}
            height={100} 
        />
    )
}; 

const users = [
    {
        id: '001',
        name: 'alfred josef',
        email: 'josef009@gmail.com',
        role: 'full stack developer',
        bio: null,
        address: '23/25 ecosurv EN tower, mancester, uk.',
        skills: ['Node.js', 'React', 'Next.js', 'Python', 'Rust']
    },
    {
        id: '001',
        name: 'Abul josef',
        email: 'abul008@gmail.com',
        role: 'backend developer',
        bio: 'passinate software engenneir',
        address: 'south pallabi, mancester, uk.',
        skills: ['Node.js', 'React', 'Next.js', 'Python', 'Rust']
    },
    {
        id: '001',
        name: 'Rahim akbar',
        email: 'rahim006@gmail.com',
        role: 'frontend developer',
        bio: null,
        address: '23/25 ecosurv EN tower, pallabi, dhaka.',
        skills: ['Node.js', 'React', 'Next.js', 'Javascript']
    },
    {
        id: '001',
        name: 'John doe',
        email: 'john04@gmail.com',
        role: 'frontend developer',
        bio: 'passinate frontend developer',
        address: '23/25 ecosurv EN tower, mancester, uk.',
        skills: ['Node.js', 'React', 'Next.js', 'Javascript']
    },
];

const products = [
    { name: "Laptop", price: 900, category: "electronics" },
    { name: "Shirt", price: 40, category: "clothing" },
    { name: "Phone", price: 700, category: "electronics" },
];

const electronics = products.filter((item)=> {
    return item.category === 'electronics';
});

console.log(electronics);

const productsName = products.map((item)=> {
    return item.name;
});

console.log(productsName);

const totalPrice = products.reduce((total, product)=> {
    return total + product.price;
}, 0)

console.log('total price:', `$${totalPrice}`);

const avobe500 = products.filter((product)=> {
    return product.price > 500;
});

console.log(avobe500);

function Practice({usersData}:any) {
    const name = 'abul borkat';
    const isOffLine = false;

    return (
        <div className="">
            <div className="">
                <h2 className="title">Welcome to React app!</h2>
                <h4 className="">{name}</h4>
                <p className="">{isOffLine ? 'Online' : 'Off line'}</p>
                <Avatar /> 
                <div className="cards">
                    {users.map((item)=> (
                        <div className="card" key={item.id}>
                            <h3 className="card-title">{item.name}</h3>
                            <p className="">{item.bio?? 'No bio available!'}</p>
                            <p className="card-sub_title">{item.email}</p>
                            <p className="">{item.role}</p>
                            <p className="">{item.address}</p>

                            <div className="skills">
                                {item.skills.map((i)=> (
                                    <div className="skill">{i}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <PropsData name='abul kuddus' email= 'kuddus012@gmial.com' address= 'pallabi, mirpu-12, dhaka.'/>
                <div className="">
                    <h3>{usersData.name}</h3>
                    <p className="">{usersData.email}</p>
                    <p className="">{usersData.role}</p>
                    <p className="">{usersData.phone}</p>
                </div>
            </div>
        </div>
    )
};

export default(Practice);



/* 
react is reusble javascript library. 
react js extension- jsx(javascript XML). jsx write same to html but it's a javascript code. 
root e under a div or fragment <></>. uses camel case.
SPA: single page application.
*/ 