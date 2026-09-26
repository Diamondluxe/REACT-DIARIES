import React from 'react'
import {MoveRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
      <div className='absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-between' >
        <h2 className='bg-white rounded-full text-2xl font-semibold h-10 w-10 flex justify-center items-center '>{props.id+1}</h2>
        <div>
            <p className='text-white text-shadow-2xs text-lg leading-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit corrupti ratione deleniti dolorem aspernatur. Voluptates?</p>
            <div className='my-5 flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-8 py-2
                 rounded-full '>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-4 py-2
                 rounded-full '><MoveRight  /></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
