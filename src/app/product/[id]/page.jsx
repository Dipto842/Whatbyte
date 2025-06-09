"use client";

import React, { use, useEffect, useState } from 'react';

const ProductDetailPage = ({ params }) => {
    const { id } = use(params);
const [Data,setData]=useState([])
 
       useEffect(() => {
      
    
         fetch('/Data.json')
           .then(data=>data.json())
           .then(data=>setData(data) )
    
        
      }, []);






  const product = Data.find((data) => data.id === parseInt(id));


  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-4 text-red-500">Product not found!</div>;
  }

  const handleAddToCart = (product) => {

const cart = JSON.parse(localStorage.getItem('cart'))||[]

const cheakproduct = cart.findIndex(item=>item.id===product.id)

if(cheakproduct !==-1){
  cart[cheakproduct].quantity +=1
}else{
  cart.push({...product,quantity:1})
}

localStorage.setItem("cart",JSON.stringify(cart))

    alert(`Added ${quantity} ${product.title}(s) to cart!`);
   
  };
   

  return (


  
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="text-xl font-semibold text-green-700 mb-3">
            ${product.price}
          </p>
          <p className="mb-4">{product.description}</p>
          <p className="italic text-gray-600 mb-4">
            Category: {product.category}
          </p>
        </div>

        {/* Quantity selector */}
        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="mr-3 font-semibold">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border rounded px-2 py-1 w-20"
          />
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={()=>handleAddToCart(product)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage
