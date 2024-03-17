import React from 'react'

const SkeletonCard = () => {
    return (
        <div className='w-full bg-white gap-3.5 justify-center lg:justify-start rounded-3xl p-2 lg:p-4 flex flex-col h-36 lg:h-72 animate-pulse lg:max-w-[200px]'>
            <div className='flex lg:flex-col justify-start lg:justify-between items-center h-full gap-3 lg:gap-5'>
                <div className='h-full lg:h-auto lg:w-full aspect-square bg-gray-200 rounded-2xl'/>
                <div className='flex flex-col gap-2 w-full'>
                    <div className='w-1/2 h-7 rounded-2xl bg-gray-200'/>
                    <div className='w-2/3 h-7 rounded-2xl bg-gray-200'/>
                </div>
            </div>
            <div className='h-6 w-full flex justify-between lg:hidden'>
                <div className='w-6 h-6 rounded-lg bg-gray-200'/>
                <div className='w-6 h-6 rounded-lg bg-gray-200'/>
            </div>
        </div>
    )
}

export default SkeletonCard