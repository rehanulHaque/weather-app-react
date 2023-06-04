import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex px-12 py-4 justify-between bg-gradient-to-t from-transparent to-gray-500 text-white absolute top-0 w-full'>
      <h1 className='text-2xl font-bold'>LocWeather</h1>
      <div className="">
        <Link to="/" className='mr-3'>Home</Link>
        <Link to="about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
