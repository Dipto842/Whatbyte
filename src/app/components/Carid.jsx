"use client";

import React, { useEffect, useState } from 'react'
import RatingStars from './RatingStars';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Carid({searchQuery}) {
    const [Data,setData]=useState([])
    const searchParams = useSearchParams();
    const [ViewCount, setViewCount] = useState(9);
     useEffect(() => {
    let isMounted = true;

     fetch('Data.json')
       .then(data=>data.json())
       .then(data=>setData(data) )

    return () => {
      isMounted = false; 
    };
  }, []);

    
     const category = searchParams.get('category') || 'All';
const brand = searchParams.get('brand') || 'All';
     
     const priceRange = searchParams.get('price') || '0-100000';
console.log('searchParams',category);
const selectedCategories = category.split(',');
  const selectedBrands = brand.split(',');
   const [minPrice, maxPrice] = priceRange.split('-').map(Number);
 let filtered = Data;

  if (!selectedCategories.includes('All')) {
    filtered = filtered.filter(product => selectedCategories.includes(product.category));
  }

 if (!selectedBrands.includes('All')) {
    filtered = filtered.filter(product => selectedBrands.includes(product.brand));
  }

filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);

 
       


       
if(searchQuery.trim() !==' '){
  filtered= filtered.filter(product=>product.title.toLowerCase().includes(searchQuery.toLowerCase()))
}
const visibleProducts = filtered.slice(0, ViewCount);
  const handleViewMore = () => {
    setViewCount(prev => prev + 9);
  };

 const hasMore = ViewCount < filtered.length;



console.log('searchQuery',searchQuery);




  return (
    <div>
          <section className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      { visibleProducts.length ===0 ? (
  <div className="p-4 text-red-500   font-semibold text-center">
      No products found!
    </div>
      ):  visibleProducts.map(product => (
        <div key={product.id} className="border rounded p-4 shadow hover:shadow-md transition">
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded mb-2" />
          <h3 className="text-lg font-medium">{product.title}</h3>
          <p className="text-sm text-gray-600">${product.price}</p>
          <Link href={`/product/${product.id}`}><button className="mt-2 w-full bg-blue-600 text-white px-3 py-1 cursor-pointer rounded hover:bg-blue-700">View Details</button></Link>
          <button className="mt-2  w-full bg-blue-600 text-white px-3 py-1 cursor-pointer rounded hover:bg-blue-700">Add to Cart</button>
          <div>
            <RatingStars rating={product.rating} />
          </div>
        </div>
      ))}
    </section>
      <div className='  '>
      {hasMore && filtered.length > 0 && (
  <div className='...'>
    <button className='w-40 h-10 mt-10  lg:ml-72  text-center mb-5 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 ' onClick={handleViewMore}>View More</button>
  </div>
)}
        
      </div>
    </div>
  )
}
