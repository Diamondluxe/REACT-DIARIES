import React from 'react'
import LeftContect from './LeftContect'
import RightContent from './RightContent'

const Page1content = () => {
  return (
    <div className='py-10 h-[90vh] flex items-center gap-10 px-18'>
      <LeftContect />
      <RightContent />
    </div>
  )
}

export default Page1content
