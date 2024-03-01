import Image from 'next/image'
import React from 'react'
import Star from './Star'

const AvgRateBox = () => {
    const avgRate = 3.5
    const roundRate = Math.floor(avgRate)

    return (
        <div className='bg-white rounded-3xl w-full md:w-2/3 lg:max-w-[272px] h-auto border border-[#E3E3E3] p-4 flex flex-col justify-center items-center gap-4 md:mt-12'>
            <div className='text-[#ADADAD] text-base font-bold'>
                <span className='text-base-300 text-lg'>{avgRate}</span> از 5
            </div>
            <div className='flex gap-4 justify-center items-center'>
                {Array.from({ length: roundRate }, (_, i) => {
                    return (
                        <Image key={i}
                            src='/iconSax/like-yellow.svg'
                            alt="like"
                            width={18}
                            height={18}
                        />
                    )
                })}
                <Star present={(avgRate - roundRate) * 100} />
                {Array.from({ length: 4 - roundRate }, (_, i) => {
                    return (
                        <Image key={i}
                            src='/iconSax/like-yellow-regular.svg'
                            alt="like"
                            width={18}
                            height={18}
                        />
                    )
                })}
            </div>
            <h5 className='text-[#757575] text-xs'>
                از مجموع {13} امتیاز
            </h5>
            <button
                className='border border-base-300 rounded-md text-base-300 text-base rectangle-btn w-full transition-all duration-300 hover:bg-base-200 py-2'
            >
                افزودن نظر
            </button>
        </div>
    )
}

export default AvgRateBox