import { useState } from "react";
import { sculptureList } from './data.js';

export default function State() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('Josef nobel');
    

    function updatedName () {
        const names = ['alfred nobel', 'josef', 'mojes', 'donald j.'];
        let random = names[Math.floor(Math.random() * names.length)];
        
        setName(random);
    };

    function handleCount () {
        setCount(count + 1);

        console.log(count);
    };
    const [email, setEmail] = useState('');

    function emailFunc (e:any) {
        const userEmail = e.target.value;
        setEmail(userEmail);

        console.log(userEmail);
    };

    const [isShow, setIsShow] = useState(false);

    // let index = 0;

    // function handleClick() {
    //     index = index + 1;
    // }

    // let sculpture = sculptureList[index]; it's not working beacuse of here not ui update and no re-render.

    const [index, setIndex] = useState(0);
    function handleImg () {
        setIndex(index + 1);
    };

    let sculpture = sculptureList[index];

    return (
        <div className="">
            <p className="">{count}</p>
            <button className="" onClick={handleCount}>Added Number</button>
            <p className="">{name}</p>
            <button onClick={updatedName}>Changes name</button>
            <input type="text" className="" value={email} onChange={emailFunc} placeholder="added a valid email...." />
            <button className="" onClick={()=> setIsShow(!isShow)}>Open</button>
            {isShow && (
                <div className="">
                    <h2 className="">hello!</h2>
                    <p className="">welcome my page</p>
                </div>
            )}

             <button onClick={handleImg}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
        </div>
    )
};

/* 
state is a component memory.
state is a updated value. state has first initial value, setState is a update value or update of state. every call of state then re-render component and UI update.
state have any type: string, boolean, number, array, object.
*/ 