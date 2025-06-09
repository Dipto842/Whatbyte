
"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
const  [data ,setdata]=useState([])
useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    setdata(cart)

},[])
const removeItem = (id) => {
  const updatedCart = data.filter(item => item.id !== id); 
  setdata(updatedCart); // React state update
  localStorage.setItem('cart', JSON.stringify(updatedCart)); 
}
console.log(data);

  return (
    <div className="lg:w-[1200px] mx-auto ">
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {data.length === 0 ? (
        <p className="text-red-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow">
              <img src={item.image} alt={item.title} className=" w-full h-40 object-cover rounded mb-2" />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price} x {item.quantity}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

    
    </div>
    </div>
  )
}
