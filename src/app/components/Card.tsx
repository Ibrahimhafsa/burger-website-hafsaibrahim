import React from 'react'

const FloatingImageContentBlock = () =>{
  return(
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>     
      <div className='md:w-1/2 md:pr-10'>
      <h2 className='text-4xl font-bold mb-4 text-white'>Delicious Burgers</h2>
      <p className='text-white mb-4 text-xl'>Experience the Juciest Burgers in the town, made with fresh Ingredients and Grilled to Perfection</p>
      <button className='bg-blue-700 text-white text-xl px-4 py-2 rounded hover:bg-blue-500 duration-200'>
        Order Now</button>
        <h3 className='text-4xl font-bold mt-6 mb-2 text-white'>
          {""}
          Coming Soon: Our New Burger Launches{""}</h3>

        <ul className='text-white mt-6 text-xl'> 
          <li>
          <strong className=''>* Cheesy BBQ Bacon Burger: </strong> A mouthwatering blend of cheddar cheese, crispy Bacon and BBQ
          </li>
          <br />

          <li>
          <strong>* Spicy Jalapeno Burger: </strong> A delight topped with fresh Jalapenos and Chipotle Mayo.
          </li>
          <br />

          <li>
          <strong>* Mushroom Swiss Burger: </strong> Juicy beef petty melted swiss cheese for a rich, savory taste.
          </li>
          <br />

          <li>
          <strong>* Avocado Veggie Burger: </strong>A delicious plant-based option featuring a grilled veggie petty. 
          </li>
          <br />

          <li>
          <strong>* Buffalo Chicken Burger: </strong>Crispy Chicken breast tossed in spicy buffalo Sauce.
          </li>
          <br />
        </ul>
        </div>

        <div className='md:w-1/2 mt-6 md:mt-0 '>
        <img src="/deal.jpg" alt="delicious burger" 
        className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'/></div>

        
    </section>
  )
}

export default FloatingImageContentBlock
