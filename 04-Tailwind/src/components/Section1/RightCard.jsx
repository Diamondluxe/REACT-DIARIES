import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-70 relative shrink-0 rounded-4xl overflow-hidden'>
        <img className='h-full w-full object-cover' src={props.img} alt=''/>
        <RightCardContent id={props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default RightCard
