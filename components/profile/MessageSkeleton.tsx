import React from 'react'

const MessageSkeleton = () => {
    return (
        <div className='flex flex-col w-full gap-2 justify-center items-start animate-pulse bg-white'>
            <div className='w-4/5 bg-gray-200 h-5 rounded-xl' />
            <div className='flex flex-col w-full items-center justify-center gap-1.5'>
                <div className='w-full bg-gray-200 h-4 rounded-xl' />
                <div className='w-full bg-gray-200 h-4 rounded-xl' />
                <div className='w-full bg-gray-200 h-4 rounded-xl' />
            </div>
            <div className='w-full flex justify-end'>
                <div className='w-16 h-3 bg-gray-200 rounded-[10px]' />
            </div>
        </div>
    )
}

export default MessageSkeleton