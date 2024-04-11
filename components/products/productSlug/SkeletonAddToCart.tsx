import React from 'react'

const SkeletonAddToCart = () => {
    return (
        <div className='h-[65px] w-full flex justify-between items-center gap-2 animate-pulse'>
            <div className='h-full flex justify-start items-center gap-2 w-full'>
                <div className='size-[65px] bg-gray-200 rounded-lg' />
                <div className='flex flex-col gap-2 justify-center items-center w-1/2'>
                    <div className='w-full h-3 bg-gray-200 rounded-lg' />
                    <div className='w-full h-3 bg-gray-200 rounded-lg' />
                </div>
            </div>
            <div className='gap-2 flex justify-center items-center'>
                <div className='w-[65px] h-[28px] bg-gray-200 rounded-lg' />
                <div className='size-10 bg-gray-200 rounded-lg' />
            </div>
        </div>
    )
}

export default SkeletonAddToCart