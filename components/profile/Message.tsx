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
            <h2 className='text-sm text-base-300 font-medium'>
                {title}
            </h2>
            <p className='text-xs w-full text-[#626262] text-justify leading-5 line-clamp-3'>
                {desc}
            </p>
            <p className='w-full text-left text-[#ADADAD] text-xs'>
                {year}/{month}/{day}
            </p>
        </div>
    )
}

export default Message