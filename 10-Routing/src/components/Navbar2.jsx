import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
  const navigate = useNavigate()


  return (

    <div className='flex justify-center gap-10 items-center py-2 px-5 bg-pink-500'>
       <button onClick={() => navigate('/')} 
      className='text-2xl active:scale-95 text-white m-5  cursor-pointer'>Go to Home</button>
      <button onClick={() => navigate(-1)} 
      className=' text-2xl active:scale-95 text-white m-5 cursor-pointer'>Back</button>
        <button onClick={() => navigate(+1)} 
      className=' text-2xl active:scale-95 text-white m-5 cursor-pointer'>Forward</button>
    </div>
  )
}

export default Navbar2
