"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";




export default function Sidebar({setselectedCategories , selectedCategories,setPrice,price , setsecelektBrand ,secelektBrand}) {
    

  const [Data,setData]=useState([])

       
const router = useRouter();
   useEffect(() => {
    let isMounted = true;

     fetch('Data.json')
       .then(data=>data.json())
       .then(data=>setData(data) )

    return () => {
      isMounted = false; 
    };
  }, []);

  const hedelprice=(e)=>{
    const newPrice = e.target.value;
    setPrice(newPrice);
     const currentParams = new URLSearchParams(window.location.search);
      currentParams.set("price", `0-${newPrice}`);
    router.push(`/?${currentParams.toString()}`);
  }


   const hedelBrand=(e)=>{

    const {value,checked} = e.target
    const currentParams = new URLSearchParams(window.location.search);

 if (value === 'All') {
    currentParams.delete('brand');
  } else {
    currentParams.set('brand', value);
  }

   


    setsecelektBrand(value)
    
   router.push(`/?${currentParams.toString()}`)
   
    
   }



  // selectedCategories

     const hedelselectedCategories = (e)=>{
 const { value, checked } = e.target;
  let updatedCategories = [...selectedCategories];
 const currentParams = new URLSearchParams(window.location.search);
  if (value === "All") {
    updatedCategories = ["All"];
  } else {
    updatedCategories = updatedCategories.filter((v) => v !== "All");

    if (checked) {
      updatedCategories.push(value);
    } else {
      updatedCategories = updatedCategories.filter((v) => v !== value);
    }

    if (updatedCategories.length === 0) {
      updatedCategories = ["All"];
    }
  }
  setselectedCategories(updatedCategories);
  const categoryParam = updatedCategories.join(",");
  currentParams.set("category", categoryParam);
   router.push(`/?${currentParams.toString()}`);
     }
     const uniqueBrands = ["All",...new Set(Data.map(product => product.brand))];
     
  return (
    <div>
      <aside className="lg:w-[400px] h-screen   w-full lg:block hidden bg-[#0659a9] ">
        <h1 className="text-white text-2xl ml-6 font-semibold leading-6 mb-5 pt-4">Filters</h1>
      <div className="mb-6 ml-6 text-white ">
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
       <label className="flex items-center space-x-2 mb-2 cursor-pointer">
      <input type="checkbox"   defaultChecked value="All"
  onChange={hedelselectedCategories} className="peer hidden" />
      <div className="  rounded-full border-2 border-white peer-checked:bg-white peer-checked:border-white flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0659a9] scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
      </div>
      <span>All</span>
    </label>
       <label className="flex items-center space-x-2 mb-2 cursor-pointer">
      <input type="checkbox" className="peer hidden"  value="Electronics"
      checked={selectedCategories.includes("Electronics")}
  onChange={hedelselectedCategories} />
      <div className="  rounded-full border-2 border-white peer-checked:bg-white peer-checked:border-white flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0659a9] scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
      </div>
      <span>Electronics</span>
    </label>

          <label className="flex items-center space-x-2 mb-2 cursor-pointer">
      <input type="checkbox"
       value="Fashion"
       checked={selectedCategories.includes("Fashion")}
  onChange={hedelselectedCategories}
      className="peer hidden" />
      <div className=" rounded-full border-2 border-white peer-checked:bg-white peer-checked:border-white flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0659a9] scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
      </div>
      <span>Fashion</span>
    </label>
         <label className="flex items-center space-x-2 mb-2 cursor-pointer">
      <input type="checkbox" 
       value="Home"
       checked={selectedCategories.includes("Home")}
  onChange={hedelselectedCategories}
      className="peer hidden" />
      <div className=" rounded-full border-2 border-white peer-checked:bg-white peer-checked:border-white flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0659a9] scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
      </div>
      <span>Home</span>
    </label>
     
      </div>
{/* Brand filter  */}
      <div className="mb-6 ml-6 text-white">
        <h1 className="text-white text-2xl font-semibold leading-6 mb-5 pt-4">Brand </h1>
        
    <select
     
     value={secelektBrand}
     
     checked={secelektBrand.includes(secelektBrand)}
     onChange={hedelBrand}
      className="select  bg-[#03284b] w-64 h-8" >
     
       
    {
      uniqueBrands.map((data,index)=>   <option key={index} className="text-white">{data}</option>)
    }
    </select>
     
     
      </div>

        <div className=" text-white p-4 rounded">
      <label className="block mb-2 font-medium">Price</label>
      
      <div className="flex items-center justify-between text-sm mb-1">
        <span>{price}</span>
        <span>1000</span>
      </div>
      
      <input
        type="range"
        min="0"
        max="1000"
        value={price}
        onChange={ hedelprice}
        className="w-full accent-white"
      />
    </div>
    </aside>
    </div>
  )
}
