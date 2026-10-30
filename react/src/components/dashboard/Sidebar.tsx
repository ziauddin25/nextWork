import useCounter from "../../lib/useCounter.ts";

export default function Sidebar() {
  const {count, increment} = useCounter();
  return (
    <aside className='p-3'>
      <ul className="flex flex-col gap-1.5">
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Profile</li>
        <button className="" onClick={increment}>
          Counter: {count}
        </button>
      </ul>
    </aside>
  );
}
