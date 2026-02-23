'use client'

import React, { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products"); 
      const data = await res.json();
      setProducts(data); 
    };

    fetchProducts();
  }, []);


  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) 
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4">
      <div className="max-w-2xl mx-auto pt-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 text-lg"
          />
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </div>
      </div>

      {query && (
        <div className="max-w-4xl mx-auto mt-8">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products found</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredProducts.map((item) => (
                <div key={item._id} className="bg-white p-3 rounded shadow">
                  <img
                    src={item.imageUrl[0]}
                    alt={item.name}
                    className="h-40 w-full object-cover rounded"
                  />
                  <h3 className="mt-2 font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
