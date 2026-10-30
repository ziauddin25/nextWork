import { useState } from "react"

 type FormErrors = {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
};

type SignupData = {
    name: string;
    email: string;
    password: string;
    phone: string;
};

export default function Forms() {
    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    // const [phone, setPhone] = useState('');
    // function handeCahnges (e: any) {
    //     setName(e.target.value)
    //     console.log(e.target.name, "=", e.target.value);
    // }

    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phone: '',
        password: ''
    });
    const [error, setError] = useState<FormErrors>({});

    function handleChanegs (e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;

        setFormData((prev)=> ({
            ...prev,
            [name] : value,
        }));

        if (error[name as keyof FormErrors]) {
            setError((prev)=> ({
                ...prev,
                [name]: undefined
            }))
        }
    }

    function validationSignup (data: SignupData): string | null {
        const validationErrors: FormErrors = {};

        if (!data.name.trim()) {
            validationErrors.name = 'Name is required.'
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            validationErrors.email = 'Enter a valid email address.'
        }

        if (data.phone.length < 11) {
            validationErrors.phone = 'Phone Number must be at least 11 characters.'
        }

        if (data.password.length < 8) {
           validationErrors.password = 'Password must be at least 8 characters.'   
        }

        return validationErrors;
    };

     function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formErrors = validationSignup (formData);
        if (Object.keys(formErrors).length > 0) {
            setError(formErrors);

            return;
        };

        setError({});

        console.log('submitted all data', formData);
        
    };

    return (
        <div className="">
            <h2 className="">Day-005 forms handling</h2>
            {/* <input type="text" placeholder="Enter a name...." value={name} onChange={handeCahnges} className="" /> // controlled input: user can controlled, input value changes this, state→ vale→user changes→state update→  re-render ui update. */}

            <form action="submit" className="flex flex-col gap-1.5 max-w-[300px]" onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChanegs} className="p-3 rounded-md border-[#4D2A00] border outline-[#2D0000]" placeholder="eneter first name..." />
                {error.name && <p className="text-base text-red-500">{error.name}</p>}
                <input type="email" name="email" className="p-3 rounded-md border-[#4D2A00] border outline-[#2D0000]" value={formData.email} onChange={handleChanegs} placeholder="enter email address..." />
                {error.email && <p className="text-base text-red-500">{error.email}</p>}
                <input type="number" name="phone" className="p-3 rounded-md border-[#4D2A00] border outline-[#2D0000]" value={formData.phone} onChange={handleChanegs} placeholder="enter phone number..." />
                {error.phone && <p className="text-base text-red-500">{error.phone}</p>}
                <input type="password" name="password" className="p-3 rounded-md border-[#4D2A00] border outline-[#2D0000]" value={formData.password} onChange={handleChanegs} placeholder="enter a strong password...." />
                {error.password && <p className="text-base text-red-500">{error.password}</p>}
                <button className="p-3 bg-[#4D2A00] rounded-md text-white cursor-pointer" type="submit">Submit</button>
            </form>
        </div>
    )
};

/* 
 chanegs value: 
 e = event.
 e.target = current element. 
 e.target.value = user typing value.
 e.target.name = atr. name.
 e.taget.type = atr. type, text, email, password.
 e.target.checked = for checkbox or radio.
*/ 