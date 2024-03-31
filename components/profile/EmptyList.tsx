import Image from 'next/image'
import React from 'react'

const EmptyList = () => {
    return (
        <div className='flex flex-col gap-6 md:gap-8 w-full justify-center items-center h-28 md:h-32'>
            <Image
                src='/iconSax/ClipboardRemove.svg'
                width={64}
                height={64}
                alt='no items'
            />
            <h2 className='text-[#ADADAD] text0sm sm:text-base font-bold'>این لیست خالی میباشد!</h2>
        </div>
    )
}

export default EmptyList