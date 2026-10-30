import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext";

export default function UserList ({calculateDiscount}) {
    const [users, setUsers] = useState([{
        id: crypto.randomUUID(),
        name: 'Abid',
        address: 'Dhaka'
    }]);
    //context api:
    const user = useContext(UserContext);

    function changesUser (id, name) {
        console.log(id, name);
        const userCopy = [...users];

        const find = userCopy.find((item)=> item.id === id);
        find.name = name;
        setUsers(userCopy);

        console.log(userCopy);
    }

    function addUser () {
        const newUser = {
            id: crypto.randomUUID(),
            name: 'Jack',
            address: 'Titanic'
        };

        // users.push(newUser). this is a not main way. here return a new array but i want to not return new array.
        setUsers([...users, newUser]);
    };



    return (
        <div className="">
            <ul>
                {users.map((item)=> (
                    <li className="" key={item.id} style={{display: 'flex', gap:'12px'}}>
                        <p className="">{item.name} lives in {item.address}</p>
                        <a href="#" className="" onClick={(e)=> changesUser(item.id, 'Random', e.preventDefault())}>Changes</a>
                    </li>
                ))}

                <button className="" onClick={addUser} style={{background: '#000', color: '#fff', padding: '10px 20px', border: 'none'}}>Add User</button>
                <p>{calculateDiscount(800, 10)}</p>
                <p>{calculateTax(800, 1.5)}</p>
                <p>Result {getGrade(68)}</p>
                <p>Number is {isEven(55)}</p>
                <p>{isPalindrome('aba')}</p>
                <p className="text-blue-400">User: {user.name}</p>
                <p className="text-blue-400">Email: {user.email}</p>
            </ul>
        </div>
    )
};

// calculateDiscount()
// calculateTax()
// getGrade()
// isEven()
// isPalindrome()
// findLargest()
// convertTemperature()
// calculateAge()
// formatName()
// calculateShipping()

// function calculateDiscount(price, discount) {
//     let finalPrice = price - (price * discount / 100);

//     return `final price:$${finalPrice}`;
// };

// console.log(calculateDiscount(600, 20));

const calculateTax = (price:number, tax:number)=> {
    let taxValue = price * tax/100;
    let finalValue = price + taxValue;

    return `final value(included tax):$${finalValue}`
};

const getGrade = (grade:number)=> {
    if (grade >=80) {
        return 'A+'
    } else if (grade >=75) {
        return 'A'
    } else if (grade >=65) {
        return 'A-'
    } else if (grade >= 55) {
        return 'B'
    } else if (grade >= 45) {
        return 'C'
    } else if (grade >= 35) {
        return 'D'
    } else if (grade >= 33) {
        return 'E'
    } else {
        return 'Fail'
    }
};


function isEven (age:number) {
    if (age % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
};


function isPalindrome(text:string) {
    let left = 0;
    let right = text.length - 1;

    while (left < right) {
        if (text[left] !== text[right]) {
            return 'No!'
        }

        left++;
        right--;
    }

    return 'This is palindrome'
}