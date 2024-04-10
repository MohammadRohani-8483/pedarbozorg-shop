import React from 'react'

type props = {
    title: string
    desc: string
    day: string
    month: string
    year: string
}

const Message = ({ title, desc, day, month, year }: props) => {
    return (
        <div className='flex flex-col w-full gap-2 justify-center items-start md:w-[150px]'>
            <h2 className='text-sm text-secondry-base font-medium'>
                {title}
            </h2>
            <p className='text-xs w-full text-neutral-700 text-justify leading-5 line-clamp-3'>
                {desc}
            </p>
            <p className='w-full text-left text-neutral-500 text-xs'>
                {year}/{month}/{day}
            </p>
        </div>
    )
}

export default Message