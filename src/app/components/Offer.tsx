"use client";

import React from 'react';

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers = () => {
  const offers: Offer[] = [
    {
      title: 'Happy Hour',
      description: 'Avail 50% Discount on cold drinks from 5pm to 7pm',
    },
    {
      title: 'Family Meal Deal',
      description: 'Order 2 Main Courses and get family Deal Coupon',
    },
    {
      title: 'Weekly Brunch',
      description: 'Buy 1 and get 1 Free on Weekends, every Afternoon',
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className='py-10 bg-gray-900'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-white'>Special Offer</h2>
        <div className='space-y-4'>
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className='text-left bg-white shadow-lg rounded-lg w-full p-4 hover:bg-gray-300 transition duration-300 transform hover:scale-105'
            >
              <h3 className='text-3xl font-bold text-red-700'>{offer.title}</h3>
              <p className='text-gray-900 mt-2 text-xl'>{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;