import { useState } from 'react';
import LiftingStateUp from './components/LiftingStateUp.tsx';
import MovieWatch from './components/MovieWatch/MovieWatch.tsx';
import Practice from './components/Practice.tsx';
import State from './components/State.tsx';
import Toolbar from './components/Toalbar.tsx';
import UserList from './components/UserList.tsx';
import ProductsSearch from './components/ProductsSearch.tsx';
import ProductsList from './components/ProductsList.tsx';
import TotalPrice from './components/TotalPrice.tsx';
import QuantityControls from './components/QuantityControls.tsx';
import Forms from './components/Day-5/Forms.tsx';
import LiveClock from './components/LiftingStateUp.tsx';
import UserSearch from './components/UserSearch.tsx';
import { UserContext } from './context/UserContext.tsx';
import {ThemeProvider, useTheme} from './context/ThemeContext.tsx';
import Sidebar from './components/dashboard/Sidebar.tsx';
import Header from './components/dashboard/Header.tsx';
import Dashboard from './components/dashboard/Dashboard.tsx';


const usersData = {
  id: '005',
  name: 'jobbar',
  email: 'loljabbar@gmail.com',
  phone: '+08090090995',
  role: 'frontend developer'
};

const products = [
  { id: 1, name: "Keyboard", price: 2500 },
  { id: 2, name: "Mouse", price: 1500 },
  { id: 3, name: "Monitor", price: 18000 },
];

// const product = {
//   name: 'keyboard',
//   price: 669,
// };

// function handleBuy() {
//   alert('added this product!')
// };


function MainLayout() {
  const { theme } = useTheme();

  return (
    <div className={`flex gap-4 p-2 rounded-lg w-full transition-colors duration-200 ${
      theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Sidebar />
      <div className="flex flex-col gap-3 flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

function App() {
  const [searchText, setSearchText] = useState('');
  const [quantity, setQuantity] = useState(1);
  const filterProducts = products.filter((product)=> {
    return product.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const totalPrice = quantity * 200;

  function onIncrease () {
    setQuantity((prevQuantity)=> prevQuantity + 1);
  };

  function onDecrease () {
    if (quantity > 1) {
      setQuantity((prevQuantity)=> prevQuantity - 1);
    }
  };

  function calculateDiscount(price:number, discount:number) {
    let finalPrice = price - (price * discount / 100);

    return `final price:$${finalPrice}`;
  };


  const userValue = {
    first_Name: 'Josef',
    name: 'Josef nobel',
    email: 'josef33@gmail.com',
    role: 'Frontend Developer'
  };

  return (
    <UserContext.Provider value={userValue}>
      <div className="container">
        <Practice usersData={usersData} />
        <Toolbar onPlayMovie={() => alert('Playing!')} onUploadImage={() => alert('Uploading!')} />
        {/* <Dashboard product={product} handleBuy={handleBuy}/> */}
        <State />
        <UserList calculateDiscount={calculateDiscount} />
        <MovieWatch />
        <LiftingStateUp />
        <h2 className="">Products Dashboard</h2>
        <ProductsSearch searchText={searchText} onSearchChange={setSearchText}/>
        <ProductsList products={filterProducts}/>
        <TotalPrice totalPrice={totalPrice} />
        <QuantityControls onIncrease={onIncrease} onDecrease={onDecrease} />
        <Forms />
        <LiveClock />
        <UserSearch />
        {/* <UserDashboard /> */}
        {/* <TodoMain /> */}
        <ThemeProvider>
          <MainLayout />
        </ThemeProvider>
      </div>
    </UserContext.Provider>
  )
}

export default App;