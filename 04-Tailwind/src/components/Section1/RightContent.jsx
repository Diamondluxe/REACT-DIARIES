import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl overflow-x-auto p-6 w-2/3 flex flex-nowrap gap-10 '>
      {props.users.map(function(elem,index){
        console.log(elem.color);
        
        return <RightCard keys={index} id={index} img={elem.img} tag={elem.tag} color={elem.color}/>
      })}
     
    </div>
  )
}

export default RightContent
