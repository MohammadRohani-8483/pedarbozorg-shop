import React from 'react'

type props = {
    nameIcon: string
    size: number
}

const Icon = ({ nameIcon, size }: props) => {
    return (
        <i
            className='aspect-square bg-no-repeat bg-center bg-cover'
            style={{
                backgroundImage: `/iconSax/${nameIcon}.svg`,
                width: `${size}px`,
                height: `${size}px`
            }}
        />
    )
}

export default Icon