'use client'
import React, { useState } from 'react'
import Image from '@/node_modules/next/image'

type bestSellingProduct = {
    num: number,
    name: string,
    image: string,
}

const BestSellingCard: React.FC<bestSellingProduct> = ({ num, name, image }) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className='lg:w-[calc((100%-32px)/3)] md:w-[calc((100%-16px)/2)] h-[152px] bg-white flex justify-start items-center p-4 gap-4 rounded-3xl  hover:shadow-hover hover:transition-shadow hover:duration-300'
        >
            <h1 className={`${isHover ? "text-[#A2D4BC]" : "text-[#C1E2D2]"} text-5xl font-bold`}>{num}</h1>
            <Image
                src={image}
                alt={name}
                width={120}
                height={120}
            />
            <h2 className='text-base-300 text-xl font-bold'>{name}</h2>
        </div>
    )
}

export default BestSellingCard