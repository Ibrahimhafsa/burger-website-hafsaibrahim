import React from 'react';

export default function Carousel() {
  return (
    <section className='bg-gradient-to-r from-gray-900 to-black py-8 sm:py-10'>
      <div className='px-2 mx-auto w-full max-w-none'>
        <div className='flex flex-row flex-wrap sm:flex-nowrap gap-4 w-full'>
          {/* Classic Bites - Largest Card */}
          <div className='w-full sm:w-1/2 lg:w-2/5 bg-gray-900 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500'>
            <a href='' className='group relative block h-48 sm:h-56 lg:h-64'>
              <img
                src='/carsol1.jpg'
                className='absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300'
                alt='Classic Bites'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
              <h3 className='z-10 text-2xl sm:text-3xl font-bold text-white absolute bottom-3 left-3 drop-shadow-md animate-fade-in'>
                Classic Bites
              </h3>
            </a>
          </div>

          {/* Gourmet Grills - Largest Card */}
          <div className='w-full sm:w-1/2 lg:w-2/5 bg-gray-900 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500'>
            <a href='' className='group relative block h-48 sm:h-56 lg:h-64'>
              <img
                src='/carsol2.jpg'
                className='absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300'
                alt='Gourmet Grills'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
              <h3 className='z-10 text-2xl sm:text-3xl font-bold text-white absolute bottom-3 left-3 drop-shadow-md animate-fade-in delay-100'>
                Gourmet Grills
              </h3>
            </a>
          </div>

          {/* Spicy Masala - Medium Card */}
          <div className='w-full sm:w-1/3 lg:w-1/5 bg-gray-900 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-500'>
            <a href='' className='group relative block h-48 sm:h-56 lg:h-64'>
              <img
                src='/carsol3.jpg'
                className='absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300'
                alt='Spicy Masala'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
              <h3 className='z-10 text-xl sm:text-2xl font-bold text-white absolute bottom-3 left-2 drop-shadow-md animate-fade-in delay-200'>
                Spicy Masala
              </h3>
            </a>
          </div>

          {/* Vegies - Small Card */}
          <div className='w-full sm:w-1/3 lg:w-1/5 bg-gray-900 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-500'>
            <a href='' className='group relative block h-48 sm:h-56 lg:h-64'>
              <img
                src='/carsol4.jpg'
                className='absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300'
                alt='Vegies'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
              <h3 className='z-10 text-xl sm:text-2xl font-bold text-white absolute bottom-3 left-2 drop-shadow-md animate-fade-in delay-300'>
                Vegies
              </h3>
            </a>
          </div>

          {/* New Delight - Small Card */}
          <div className='w-full sm:w-1/3 lg:w-1/5 bg-gray-900 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-500'>
            <a href='' className='group relative block h-48 sm:h-56 lg:h-64'>
              <img
                src='/carsol5.jpg'
                className='absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300'
                alt='New Delight'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
              <h3 className='z-10 text-xl sm:text-2xl font-bold text-white absolute bottom-3 left-2 drop-shadow-md animate-fade-in delay-400'>
                New Delight
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}