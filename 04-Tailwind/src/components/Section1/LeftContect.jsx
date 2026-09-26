import React from 'react'
import { MoveUpRight} from 'lucide-react'

const LeftContect = () => {
  return (
    <div className=' flex flex-col justify-between h-full w-1/3 py-5'>
        <div>
            <h3 className='mb-7 leading-[1.1] text-6xl font-bold'>Prospective <br / ><span>Customer</span><br /> Segmentation<br /></h3>
            <p className='text-lg font-medium text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nesciunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, eum nesciunt? Maxime, distinctio cumque rerum quis aut nisi perspiciatis illo.</p>
        </div>
        <div >
            <MoveUpRight className='w-8 h-8' />
        </div>
    </div>
  )
}

export default LeftContect
