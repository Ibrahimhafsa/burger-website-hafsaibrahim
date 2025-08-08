import React from 'react';

export default function Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-800 font-sans px-6 py-16 mb-10'>
      <div className='absolute inset-0 opacity-30 bg-blend-overlay'>
        <img
          src='https://www.tariqhalalmeats.com/pub/media/magefan_blog/How_to_Make_the_Perfect_Beef_Burger_Tips_and_Tricks_for_Juicy_and_Delicious_Results_12.jpg'
          className='w-full h-full object-cover'
          alt='Delicious Burger Banner'
        />
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className='text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in'>
          Discover Our Menu
        </h2>
        <p className='text-gray-200 text-xl sm:text-2xl max-w-2xl mb-8 animate-fade-in delay-200'>
          Shop Now! Avail Our Exclusive Discounts on Burgers
        </p>
        <button
        type='button'
        className='relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold py-4 px-8 rounded-full shadow-xl hover:from-blue-500 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 animate-pulse-slow'
      >
        Exciting Deals Launch at 12pm!
      </button>
      </div>     
    </div>
  );
}