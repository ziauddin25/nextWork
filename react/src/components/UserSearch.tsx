import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
};

type SearchStatus  = 'idle' | 'loading' | 'success' | 'error';


export default function UserSearch () {
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [status, setStatus] = useState<SearchStatus>('idle');
    const [error, setError] = useState('');
    const user = useContext(UserContext)

    useEffect(()=> {
        const query = search.trim();

        if (!query) {
            setUsers([]);
            setStatus('idle');
            setError('');

            return;
        }

        const controller = new AbortController();

        const timeoutId = setTimeout(async () => {
            setStatus('loading');
            setError('');

            try {
                const res = await fetch(`https://dummyjson.com/users/search?q=${encodeURIComponent(query)}`,
            {signal:controller.signal}
            );

            if (!res.ok) {
                throw new Error('Failed to fetch users.')
            }

            const data:{users:User[]} = await res.json();

            setUsers(data.users);
            setStatus('success');
            } catch (error) {
                if (error instanceof Error && error.name === 'AbortError') {
                    return;
                }

                setError(
                    error instanceof Error ? error.message:  "Something went wrong."
                );

                setStatus('error');
            }
            
        }, 500);

        return ()=> {
            clearInterval(timeoutId);
            controller.abort();
        };
    }, [search]);

    return (
        <div className="">
            <h3 className="">Search Users</h3>
            <input type="text" placeholder="Search users..." 
             value={search}
             onChange={(e)=> setSearch(e.target.value)}
            />

            {status === 'idle' && <p>Type to search for users.</p>}
            {status === 'loading' && <p>Loading users...</p>}
            {status === 'error' && <p role="alert">{error}</p>}
            {status === 'success' && users.length === 0 && (<p><p>No users found.</p></p>)}

            {status === 'success' && users.length > 0 && (
                <ul className="">
                    {users.map((user)=> (
                        <li className="" key={user.id}>
                            <strong>{user.firstName} {user.lastName}</strong>
                            '-'
                            {user.email}
                        </li>
                    ))}
                </ul>
            )}

            <div className="">
                <h3 className="text-red-500">Api Context Check:</h3>
                <p className="">User name: {user.name}</p>
                <p className="">User email: {user.email}</p>
            </div>
        </div>
    )
};
