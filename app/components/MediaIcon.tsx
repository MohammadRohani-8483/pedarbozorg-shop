'use client'
import React, { useState } from 'react'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import { media } from '@/public/types/props'

const MediaIcon:React.FC<media> = ({ link, name, icon, iconHover }) => {
    const [isHover, setIsHover] = useState(false)
    return (
        <Link
            href={link}
            className='relative aspect-square min-h-[61px] lg:min-h-[43px] lg:h-[43px] h-full'
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <Image
                alt={name}
                src={isHover ? iconHover : icon}
                fill
            />
        </Link>
    )
}

export default MediaIcon