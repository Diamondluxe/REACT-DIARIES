import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-8 py-4 bg-pink-800 text-white'>
      <h2 className='text-xl font-bold cursor-pointer'>Dodo</h2>
      <div className='flex gap-8'>
        <Link className='text-lg font-bold cursor-pointer' to='/'>Home</Link>
        <Link className='text-lg font-bold cursor-pointer' to='/about'>About</Link>
        <Link className='text-lg font-bold cursor-pointer' to='/courses'>Courses</Link>
        <Link className='text-lg font-bold cursor-pointer' to='/product'>Product</Link>
        <Link className='text-lg font-bold cursor-pointer' to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
