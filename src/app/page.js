
"use client";
import Logo from '../../public/Loge/download.svg';
import Shop from '../../public/Shop.svg';
import { FaShoppingCart } from "react-icons/fa";
import Sidebar from "./components/Sidebar";
import Carid from "./components/Carid";
import { Suspense, useState } from "react";
import { useRouter } from 'next/navigation';


export default function Home() {
    const [selectedCategories,setselectedCategories]=useState([''])
    const [searchQuery, setSearchQuery] = useState('');
 const [price, setPrice] = useState(1000);
const [secelektBrand , setsecelektBrand]= useState(['All'])
    
const router = useRouter()
  return (
   <div className="">
   <header className="flex justify-between items-center bg-[#0758a8] h-20 w-[1500px] mx-auto text-center">
<Logo className="ml-20 h-10 text-primary" />

<div className="flex items-center w-full max-w-md mx-auto">
  <div className="relative flex-grow">
    <input
      type="search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search products..."
      className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-b-amber-50 transition-all duration-200 shadow-sm"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w- text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  </div>
 
</div>


 <button onClick={()=>router.push('/Cart')} className="cursor-pointer flex gap-1 mr-16 rounded text-white w-28 h-10 text-center justify-center bg-[#002b59] items-center">
  <FaShoppingCart 
  className="text-white w-10 "
  /> <span>cart</span>
 </button>
   </header>



<div className="grid grid-cols-3 mt-44 w-[1500px] mx-auto">
  <div className="col-span-1"><Sidebar
   selectedCategories={selectedCategories} setselectedCategories={setselectedCategories}
   price={price} setPrice={setPrice}
   secelektBrand={secelektBrand} setsecelektBrand={setsecelektBrand}
   ></Sidebar></div>
   <Suspense fallback={<div className='text-center mt-10 text-gray-500'>Loading products...</div>}>
  <div className='col-span-2'><Carid
   selectedCategories={selectedCategories}
   secelektBrand={secelektBrand}
   price={price}
   searchQuery={searchQuery}
   ></Carid></div>
   </Suspense>
</div>



   </div>
  );
}
