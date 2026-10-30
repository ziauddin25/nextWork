import { useState } from "react";

export default function StateStructure() {
    // avoid redundant: 

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [fullName, setFullName] = useState(''); avoid these.

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    //  Avoid duplication in state.

    // const [items, setItems] = useState(initialItems);
    // const [selectedItem, setSelectedItem] = useState(items[0]);

    // ✅ শুধু ID সংরক্ষণ করুন
    const initialItems = [{id:crypto.randomUUID(), name: 'john'}];
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState(0);
    const selectedItem = items.find(item => item.id === selectedId);

    // Avoid deeply nested state.
    // const [travelPlan, setTravelPlan] = useState({
    // planets: [
    //     {
    //     id: 0,
    //     name: 'Earth',
    //     continents: [
    //         {
    //         id: 0,
    //         name: 'Asia',
    //         countries: [/* ... */]
    //         }
    //     ]
    //     }
    // ]
    // });

    const [planets, setPlanets] = useState({
    0: { id: 0, name: 'Earth', continentIds: [0] }
    });

    const [continents, setContinents] = useState({
    0: { id: 0, name: 'Asia', planetId: 0, countryIds: [0] }
    });

    const [countries, setCountries] = useState({ 
    0: { id: 0, name: 'India', continentId: 0 }
    });

    // Group related state: যে স্টেট ভেরিয়েবলগুলো সবসময় একসাথে পরিবর্তিত হয়, সেগুলো একটি স্টেট ভেরিয়েবলে একত্রিত করুন।

    // Avoid contradictions: একাধিক boolean-এর বদলে একটি status স্টেট ব্যবহার করুন, যা একসাথে শুধু একটি মান ধারণ করে।

    // Avoid redundant state: props বা অন্য স্টেট থেকে গণনা করা যায়—এমন ডেটা স্টেটে রাখবেন না।

    // Avoid duplication: একই ডেটা দুই জায়গায় রাখবেন না—শুধু ID সংরক্ষণ করুন এবং রেন্ডারের সময় বাকি ডেটা খুঁজে বের করুন।

    // Avoid deeply nested state: স্টেটকে যতটা সম্ভব ফ্ল্যাট রাখুন—একটি আইটেম পরিবর্তন করতে অন্য স্টেটে হাত দিতে না হয়।
    return (
        <div className=""></div>
    )
}