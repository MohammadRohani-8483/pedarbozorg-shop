import Image from 'next/image'
import React from 'react'

type props = {
    nameIcon: string
    size: number
    className?: string
}

const Icon = ({ nameIcon, size, className }: props) => {
    return (
        <Image
            alt={nameIcon}
            src={`/iconSax/${nameIcon}.svg`}
            width={size}
            height={size}
            className={className || ""}
        />
    )
}

export default Icon