import Image from 'next/image'
import React from 'react'
import logo from '../public/portlogo.png'

const Navbar = () => {
  return (
    <nav>
      <div className='flex flex-1 justify-between mx-4'>
        <div>
        <Image src={logo} width="50" height="50" className="fixed rounded-md hover:animate-bounce duration-300 mt-4" alt='logo'/>
        </div>
        <div>
        <button title="Contact Sale"
        className="fixed z-90 top-5  right-8 bg-blue-600 w-10 h-10 rounded-full drop-shadow-md flex justify-center items-center text-white text-2xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">&#9993;</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar