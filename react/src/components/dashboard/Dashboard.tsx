import { useContext } from "react";
import { useTheme } from "../../context/ThemeContext";
import { UserContext } from "../../context/UserContext";
import useCounter from "../../lib/useCounter.ts";
import useToggle from "../../lib/useToggle.ts";
import useFatch from "../../lib/useFetch.ts";

export default function Dashboard() {
  const { theme }:any = useTheme();
  const user:any = useContext(UserContext);
  const {count,increment} = useCounter();
  const password = useToggle();
  const isShow = useToggle();
  const {data:users, loading, error} = useFatch('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <p className="">Loading users....</p>
  };

  if (error) {
    return <p className="">Error:{error}</p>
  };

  if (!users?.length) {
    return <p className="">Users not found.</p>
  }
  return (
    <main className='p-4'>
      {/* <h2>Dashboard Overview</h2> */}
      <h5>Welcome back, {user.first_Name}!</h5>
      <div className={`p-2 rounded-lg border mb-2 transition-colors duration-200  ${theme === 'light'? 'bg-white text-black border-gray-200' : 'bg-gray-800 text-white border-gray-500'}`}>
        <h4 className="">{user.name}</h4>
        <div className="flex gap-4">
          <p className="">{user.role}</p>
          <p className="">{user.email}</p>
        </div>
      </div>
      <button className="px-3 py-2 bg-[#290044] text-white rounded-md cursor-pointer my-1.5" onClick={increment}>
        Count Number: {count}
      </button>
      <div className="flex gap-1 items-center">
        <input type={password.value? 'text': 'password'} placeholder="Enter a password..."  />
        <button className="" onClick={password.toggle}>
          {password.value ? 'Hide': 'Show'}
        </button>
      </div>
      {/* <button className="px-3 py-2 bg-[#290044] text-white rounded-md cursor-pointer my-1.5" onClick={inc}>
        Count Number: {lol}
      </button> */}
      <div>
        <button onClick={
          isShow.toggle}>
          {
          isShow.value ? "Close Menu" : "Open Menu"}
        </button>

        {
        isShow.value && <nav>Navigation Links</nav>}
      </div>
      <h3 className="">Users</h3>
      {users.map((item)=> (
        <div className="" key={item.id}>
          <h4 className="">{item.name}</h4>
          <p className="">{item.email}</p>
        </div>
      ))}
      <p>current theme:<strong>{theme}</strong></p>
    </main>
  );
};