import Image from 'next/image'
import React from 'react'

const BenefitItem = ({ benefit }: { benefit: string }) => {
    return (
        <div className='flex gap-4 w-full items-center justify-start'>
            <Image
                src='/iconSax/tick-square-green.svg'
                alt='Tick Icon'
                width={24}
                height={24}
            />
            <p className='text-sm text-neutral-700 text-justify leading-6'>
                {benefit}
                
            </p>
        </div>
    )
}

export default BenefitItem