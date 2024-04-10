import React from 'react'
import Image from '@/node_modules/next/image'
import Link from 'next/link'

type bestSellingProduct = {
    num: number,
    name: string,
    image: string,
    link: string
}

const BestSellingCard: React.FC<bestSellingProduct> = ({ num, name, image, link }) => {
    return (
        <Link href={link} className='box_container group/best w-full h-[152px] bg-white flex justify-start items-center p-4 gap-4 rounded-2xl  hover:shadow-hover transition-all duration-300'>
            <h1 className='group-hover/best:text-secondry-tint-5 text-secondry-tint-6 text-5xl font-bold transition-all duration-300'>
                {num}
            </h1>
            <Image
                src={image}
                alt={name}
                width={120}
                height={120}
            />
            <h2 className='text-secondry-base text-base md:text-lg lg:text-xl font-bold w-full'>
                {name}
            </h2>
        </Link>
    )
}

export default BestSellingCard