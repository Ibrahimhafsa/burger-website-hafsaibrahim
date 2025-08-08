import React from 'react'
import Navbar from "../app/components/Navbar";
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';
import ProductList from './components/ProductList';
import Banner from './components/Banner';
import Offer from './components/Offer';
import Card from './components/Card';
import Footer from './components/Footer';
import Burgerlist from './components/Burgerlist';
import Menuitem from './components/Menuitem';
import Reservation from './components/Reservation';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-black to-slate-700 min-h-screen'>
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <ProductList/>
      <Banner/>
      <Burgerlist/>
      <Menuitem/>
      <Offer/>
      <Card/>
      <Reservation/>
      <Footer/>
      
   
    </div>
  )
}

export default App
