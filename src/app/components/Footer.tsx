import React from 'react'
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center m-10 mb-0 '>
        <nav className='flex flex-wrap justify-center gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700'>
          <a href="#" className='hover:text-cyan-500 text-amber-500 text-2xl'>Home</a>
          <a href="#" className='hover:text-cyan-500 text-amber-500 text-2xl'>About</a>
          <a href="#" className='hover:text-cyan-500 text-amber-500 text-2xl'>Delivery</a>
          <a href="#" className='hover:text-cyan-500 text-amber-500 text-2xl'>Contact</a>
        </nav>

        <div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105'>

          <a href="https://www.facebook.com/" target='blank' rel='nofollow noopener'>
          <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" 
          alt="fblogo" />
          </a>

          <a href="https://www.instagram.com/" target='blank' rel='nofollow noopener'>
          <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" 
          alt="Instagamlogo" />
          </a>

          <a href="https://www.linkedin.com/" target='blank' rel='nofollow noopener'>
          <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" 
          alt="linkedInlogo" />
          </a>

          <a href="https://www.youtube.com/" target='blank' rel='nofollow noopener'>
          <img src="https://img.icons8.com/?size=100&id=Fzmez16u38Xl&format=png&color=000000" 
          alt="youtubelogo" />
          </a>

          <a href="https://www.twitter.com/" target='blank' rel='nofollow noopener'>
          <img src="https://img.icons8.com/?size=100&id=114450&format=png&color=000000" 
          alt="twitterlogo" />
          </a>

        </div>
        <p className='text-center hover:text-cyan-600 text-amber-400 font-medium mb-8 text-2xl'> 2025@ Coded by Hafsa Ibrahim.  All Rights Reserved.</p>

        <br />
        <br />
        <br />
        <br />

      </footer>
    </div>
  )
}
