import React from 'react'
import LeftContect from './LeftContect'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='pb-16 pt-6 h-[90vh] flex items-center gap-10 px-18'>
      <LeftContect />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1content
