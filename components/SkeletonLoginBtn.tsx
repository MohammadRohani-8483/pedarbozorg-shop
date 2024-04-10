import React from 'react'

const SkeletonLoginBtn = () => {
  return (
    <div className='w-[162px] flex gap-3 border-secondry-base border py-2 px-4 rounded-lg animate-pulse'>
      <div className='size-5 bg-secondry-tint-4 rounded-md' />
      <div className='w-[96px] h-5 bg-secondry-tint-4 rounded-md' />
    </div>
  )
}

export default SkeletonLoginBtn