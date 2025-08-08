import React from 'react';
import { IoCartSharp } from "react-icons/io5";

const productImages = [
  "/menu1.jpg",
  "/menuu2.jpg",
  "/menu3.jpg",
  "/menu4.jpg",
  "/menu5.jpg",
  "/menu6.jpg",
];

const ProductCardGrid = () => {
  const products = [
    { id: 1, name: "Cheese Burger", price: "380.00", image: productImages[0] },
    { id: 2, name: "Classic Beef Burger", price: "390.00", image: productImages[1] },
    { id: 3, name: "Double Beef Burger", price: "350.00", image: productImages[2] },
    { id: 4, name: "Bouncy Bun Burger", price: "450.00", image: productImages[3] },
    { id: 5, name: "BBQ Burger", price: "520.00", image: productImages[4] },
    { id: 6, name: "Bacon Cheese Burger", price: "650.00", image: productImages[5] },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black py-12 px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-bold text-center mb-2">Most Requested Items</h2>
        <p className="text-gray-200 text-center mb-8 text-2xl">Order Now!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-red-700 text-xl font-semibold mb-0 ">{product.name}</h3>
                <p className="text-black font-semibold text-lg mb-2 cursor-auto">{product.price}</p>
                <button className="bg-red-500 text-white text-sm py-1 px-3 rounded-full hover:bg-red-600 transition">
                  Order Now
                </button>
                
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardGrid;